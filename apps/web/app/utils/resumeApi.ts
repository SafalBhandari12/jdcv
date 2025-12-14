import api from "./axiosinstance";

export interface Resume {
  id: string;
  userId: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  summary: string | null;
  yearsOfExperience: number | null;
  imageKitUrl: string;
  originalFileName: string;
  createdAt: string;
  updatedAt: string;
  experience?: Array<{
    id: string;
    title: string | null;
    company: string | null;
    startDate: string | null;
    endDate: string | null;
    description: string | null;
    yearsOfExperience: number | null;
    responsibilities: string[];
  }>;
  education?: Array<{
    id: string;
    degree: string | null;
    institution: string | null;
    startDate: string | null;
    endDate: string | null;
    details: string | null;
  }>;
  projects?: Array<{
    id: string;
    name: string | null;
    description: string | null;
    techStack: string[];
    responsibilities: string[];
  }>;
  skills?: Array<{
    id: string;
    name: string;
  }>;
}

/**
 * Get all resumes for the authenticated user
 * 
 */
export const getAllResumes = async (): Promise<Resume[]> => {
  try {
    const response = await api.get("/resume");
    return response.data.resumes || [];
  } catch (error: any) {
    console.error("Error fetching resumes:", error);
    throw error;
  }
};

/**
 * Get a specific resume by ID
 */
export const getResumeById = async (resumeId: string): Promise<Resume> => {
  try {
    const response = await api.get(`/resume/${resumeId}`);
    return response.data.resume;
  } catch (error: any) {
    console.error(`Error fetching resume ${resumeId}:`, error);
    throw error;
  }
};

/**
 * Upload a new resume
 */
export const uploadResume = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("resume", file);

    const response = await api.post("/resume/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error uploading resume:", error);
    throw error;
  }
};

/**
 * Update resume details
 */
export const updateResume = async (resumeId: string, data: Partial<Resume>) => {
  try {
    const response = await api.put(`/resume/${resumeId}`, data);
    return response.data;
  } catch (error: any) {
    console.error(`Error updating resume ${resumeId}:`, error);
    throw error;
  }
};
