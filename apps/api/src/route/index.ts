import { Router } from "express";

import authRouter from "./auth.route.js";
import resumeRouter from "./resume.route.js";
import skillsRouter from "./skills.route.js";
import jobDescriptionRouter from "./jobdescription.route.js";
import aiRouter from "./ai.route.js";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/resume", resumeRouter);
routes.use("/skills", skillsRouter);
routes.use("/job-description", jobDescriptionRouter);
routes.use("/ai", aiRouter);

export default routes;
