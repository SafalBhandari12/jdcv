/*
  Warnings:

  - You are about to drop the column `company` on the `JobDescription` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `JobDescription` table. All the data in the column will be lost.
  - You are about to drop the column `imageKitUrl` on the `JobDescription` table. All the data in the column will be lost.
  - You are about to drop the column `originalFileName` on the `JobDescription` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `JobDescription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobDescription" DROP COLUMN "company",
DROP COLUMN "description",
DROP COLUMN "imageKitUrl",
DROP COLUMN "originalFileName",
DROP COLUMN "title";
