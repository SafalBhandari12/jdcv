import { Router } from "express";

import authRouter from "./auth.route.js";
import resumeRouter from "./resume.route.js";
import skillsRouter from "./skills.route.js";
import jobDescriptionRouter from "./jobdescription.route.js";
import resumeFilterRouter from "./resumeFilter.route.js";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/resume", resumeRouter);
routes.use("/skills", skillsRouter);
routes.use("/job-description", jobDescriptionRouter);
routes.use("/resume-filter", resumeFilterRouter);
export default routes;
