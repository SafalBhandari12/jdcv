from typing import List, Dict, Any,Optional

from datetime import date, datetime
import os
import json

# Directory containing parsed resume JSON files
RESUME_DIR = "./resumes/parsed"

def load_all_resumes(resume_dir: str) -> List[Dict[str,Any]]:
  resumes = []
  for file in os.listdir(RESUME_DIR):
    if file.endswith(".json"):
      with open(os.path.join(resume_dir,file),"r",encoding="utf-8") as f:
        resumes.append(json.load(f))
  return resumes
allResume = load_all_resumes(RESUME_DIR)

# Function to check quality gate
# Here if you look at the prompt you will see that min_quality greater than 60 is average and max_suspicion less than 40 is concerning
# todo: refactor to use enums for quality and suspicion levels
def passes_quality_gate(resume:Dict[str,Any],min_quality:int=60,max_suspicion:int=40):
  quality_score = resume.get("extractedResume",{}).get("analysis",{}).get("quality",{}).get("score",0)
  suspicion_score = resume.get("extractedResume",{}).get("analysis",{}).get("suspicion",{}).get("score",0)
  return quality_score >= min_quality and suspicion_score <= max_suspicion
  
passes_quality_gate(allResume[0],min_quality=70,max_suspicion=30)

# I built this because the default iso date parser in python is too strict for our use case since dates can be in YYYY, YYYY-MM or YYYY-MM-DD format
def getDate(date):
  if len(date) == 10:
    return datetime.fromisoformat(date).date()
  elif len(date) == 7:
    return datetime.strptime(date,"%Y-%m").date()
  elif len(date) == 4:
    return datetime.strptime(date,"%Y").date()
  return 0

  
# Calculate total months between two dates given in FlexibleDate format
def getTotalMonths(startDate:Dict[str,Any],endDate:Dict[str,Any]):
  if not startDate or not endDate or not startDate.get("isoDate"):
    return 0
  try:
    startDate = getDate(startDate.get("isoDate"))
  except:
    return 0
  if endDate and endDate.get("isCurrent") is True:
    endDate = date.today()
  elif endDate and endDate.get("isoDate"):
    try:
      endDate = getDate(endDate.get("isoDate"))
    except:
      endDate = date.today()
  else:
    endDate = date.today()
  year_diff = endDate.year - startDate.year
  month_diff = endDate.month - startDate.month
  total_months = year_diff * 12 + month_diff
  return max(total_months,0)


def industry_experience_gate(resume:Dict[str,Any],min_industry_experience:int=36):
  total_months = 0
  workExperiences = resume.get("extractedResume",{}).get("workExperience",{})
  for workExperience in workExperiences:
    total_months += getTotalMonths(workExperience.get("startDate"),workExperience.get("endDate"))
  return total_months >= min_industry_experience
  
industry_experience_gate(allResume[0])


DEGREE_RANK = {
    "high_school": 1,
    "diploma": 2,
    "associate": 2,
    "bachelors": 3,
    "masters": 4,
    "phd": 5,
    "doctorate": 5
}
def education_gate(candidate_education: List[Dict[str,Any]],required_degrees:List[str],required_fields: Optional[List[str]]=None,isCurrent:bool = False):
    for edu in candidate_education:
        degree = edu.get("normalizedDegree")
        fieldOfStudy = edu.get("fieldOfStudy","").lower()
        endDate = edu.get("endDate",{})
        hasRequiredDegree = False
        hasRequiredField = False
        for required_degree in required_degrees:
            if degree and DEGREE_RANK.get(required_degree,0) <= DEGREE_RANK.get(degree,0):
                hasRequiredDegree = True
                break
        if not hasRequiredDegree:
            continue
        for required_field in (required_fields or []):
            if required_field and required_field.lower() in fieldOfStudy:
                hasRequiredField = True
                break
        if required_fields and not hasRequiredField:
            break
        if isCurrent and endDate.get("isCurrent") is not True:
            continue
        return True
    return False
education_gate(
    candidate_education=allResume[0].get("extractedResume",{}).get("education",[]),
    required_degrees=["bachelors","masters"],
    required_fields=["software"],
    isCurrent=False
)

SKILL_LEVEL_RANK = {
    "novice": 1,
    "intermediate": 2,
    "advanced": 3,
    "expert": 4
}
# Helper function to calculate months since a given date string
def month_since(date_str:str)->int:
    d = getDate(date_str)
    today = date.today()
    return (today.year - d.year) * 12 + (today.month - d.month)

# Function to match a candidate's skill against job requirements
def matchSkill(skill:Dict,req:Dict,check_recent:bool=False)->bool:
    if SKILL_LEVEL_RANK.get(skill.get("computedLevel","novice")) < SKILL_LEVEL_RANK.get(req.get("minLevel","novice")):
        return False
    if skill.get("metadata",{}).get("totalMonthsExperience",0) < req.get("minMonthsExperience",0):
        return False
    if check_recent:
        lastUsed = skill.get("metadata",{}).get("lastUsed")
        if lastUsed is None:
            return False
        if month_since(lastUsed) > req.get("maxMonthsSinceLastUse",9999):
            return False
    return True

    
def skill_gate(candidate_skills:List[Dict],jd_skills:Dict):
    lookUp = {}
    for skill in candidate_skills:
        lookUp[skill.get("normalizedName","").lower()] = skill

    # Compulsory Fields
    for req in jd_skills.get("must",[]):
        skill_name = req["name"].lower()
        if skill_name not in lookUp:
            return False
        candidate_skill = lookUp[skill_name]
        if not matchSkill(candidate_skill,req,check_recent=True):
            return False
    
    # Optional Fields
    optional_count = 0
    for req in jd_skills.get("optional",[]):
        skill_name = req["name"].lower()
        if skill_name in lookUp:
            candidate_skill = lookUp[skill_name]
            if matchSkill(candidate_skill,req):
                optional_count += 1
    if optional_count < jd_skills.get("minOptionalRequired",0):
        return False
    
    # Either Fields
    for skill in jd_skills.get("either",[]):
        either_matched = False
        for skill_name in skill.get("skills",[]):
            skill_name = skill_name.lower()
            if skill_name in lookUp:
                candidate_skill = lookUp[skill_name]
                if matchSkill(candidate_skill,skill):
                    either_matched = True
                    break
        if not either_matched:
            return False
    return True
jd_skills = {
    "must": [
        {
            "name": "Docker",
            "minLevel": "advanced",
            "minMonths": 6,
            "recentWithinMonths": 24
        },
        {
            "name": "Kubernetes",
            "minLevel": "intermediate",
            "minMonths": 6,
            "recentWithinMonths": 24
        },
        {
            "name": "ci/cd",
            "minLevel": "expert",
            "minMonths": 12,
            "recentWithinMonths": 12
        }
    ],
    "optional": [
        {"name": "Docker", "minLevel": "advance"},
        {"name": "AWS", "minLevel": "expert"}
    ],
    "minOptionalRequired": 1,
    "either": [
        {
            "skills": ["PostgreSQL", "MySQL"],
            "minLevel": "intermediate"
        }
    ]
}
print(skill_gate(allResume[1].get("extractedResume",{}).get("skills",[]),jd_skills))