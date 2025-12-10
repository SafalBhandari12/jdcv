import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token to every request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem("session");
    if (session) {
      try {
        const sessionData = JSON.parse(session);
        // Supabase session structure has access_token property
        const token = sessionData?.access_token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Failed to parse session:", error);
      }
    }
  }
  return config;
});

export default api;
