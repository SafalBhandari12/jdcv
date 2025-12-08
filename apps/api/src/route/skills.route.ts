import { Router, type Request, type Response } from "express";
import prisma from "../config/prisma.js";
import { skillSearchSchema } from "./skills.validation.js";
import { formatZodErrors } from "../utils/formatZodErrors.js";

const skillsRouter = Router();

let popularSkillsCache: Array<{ skill: string; count: number }> | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000;

async function getPopularSkills() {
  const now = Date.now();

  if (popularSkillsCache && now - cacheTimestamp < CACHE_DURATION) {
    return popularSkillsCache;
  }

  const result = await prisma.$queryRaw<Array<{ name: string; count: bigint }>>`
    SELECT name, COUNT(*) as count
    FROM "Skill"
    GROUP BY name
    ORDER BY count DESC, name ASC
    LIMIT 50
  `;

  const topSkills = result.map((item) => ({
    skill: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    count: Number(item.count),
  }));

  popularSkillsCache = topSkills;
  cacheTimestamp = now;

  return topSkills;
}

skillsRouter.get("/search/:id", async (req: Request, res: Response) => {
  try {
    const { id = "" } = req.params;

    // Validate input using Zod
    const validation = skillSearchSchema.safeParse({ id });

    if (!validation.success) {
      const errors = formatZodErrors(validation.error);
      return res.status(400).json({
        msg: "Invalid search input",
        errors,
      });
    }

    const { id: searchQuery } = validation.data;
    const trimmedQuery = searchQuery.trim().toLowerCase();

    let results: Array<{ skill: string; count: number }>;

    if (!trimmedQuery) {
      results = await getPopularSkills();
    } else {

      const queryResult = await prisma.$queryRaw<
        Array<{ name: string; count: bigint }>
      >`
        SELECT name, COUNT(*) as count
        FROM "Skill"
        WHERE name ILIKE ${"%" + trimmedQuery + "%"}
        GROUP BY name
        ORDER BY count DESC, name ASC
        LIMIT 50
      `;

      results = queryResult.map((item) => ({
        skill: item.name.charAt(0).toUpperCase() + item.name.slice(1),
        count: Number(item.count),
      }));
    }

    res.status(200).json({
      msg: "Skills search results",
      query: id,
      results,
      count: results.length,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      msg: "Error searching skills",
      error: error.message,
    });
  }
});

export default skillsRouter;
