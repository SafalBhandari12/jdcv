import type { ParsedResume } from "./types/resume.js";
import fs from "fs";
import "../resumes/aiParsed/01.json";

const loadResume = (id: string): ParsedResume => {
  const raw = fs.readFileSync(`./resumes/aiParsed/${id}.json`, "utf-8");
  return JSON.parse(raw) as ParsedResume;
};

const resumeData: Record<string, ParsedResume> = {
  "01": loadResume("01"),
  "02": loadResume("02"),
  "03": loadResume("03"),
  "04": loadResume("04"),
  "05": loadResume("05"),
  "06": loadResume("06"),
  "07": loadResume("07"),
  "08": loadResume("08"),
  "09": loadResume("09"),
  "10": loadResume("10"),
};

export default resumeData;
