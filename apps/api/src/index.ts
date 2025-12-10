import "./config/loadEnv.js";
import express from "express";
import helmet from "helmet";
import cors from "cors";

import routes from "./route/index.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Server is running" });
});

app.use("/api", routes);
app.use(express.static("src/public"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
