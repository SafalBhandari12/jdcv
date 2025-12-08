/*
  Warnings:

  - You are about to drop the column `educationDegree` on the `JobDescription` table. All the data in the column will be lost.
  - You are about to drop the column `educationFieldOfStudy` on the `JobDescription` table. All the data in the column will be lost.
  - You are about to drop the column `educationQualifications` on the `JobDescription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobDescription" DROP COLUMN "educationDegree",
DROP COLUMN "educationFieldOfStudy",
DROP COLUMN "educationQualifications",
ADD COLUMN     "degrees" TEXT[];
