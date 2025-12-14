/*
  Warnings:

  - You are about to drop the column `endDate` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Resume` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExperienceType" AS ENUM ('FULL_TIME', 'CONTRACT', 'INTERNSHIP', 'OTHER');

-- CreateEnum
CREATE TYPE "NormalizedDegree" AS ENUM ('HIGH_SCHOOL', 'BACHELORS', 'MASTERS', 'PHD', 'OTHER');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('NOVICE', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "degreeRaw" TEXT,
ADD COLUMN     "endDateIso" TIMESTAMP(3),
ADD COLUMN     "endDateRaw" TEXT,
ADD COLUMN     "fieldOfStudy" TEXT,
ADD COLUMN     "gpaScale" DOUBLE PRECISION,
ADD COLUMN     "gpaScore" DOUBLE PRECISION,
ADD COLUMN     "institutionRaw" TEXT,
ADD COLUMN     "normalizedDegree" "NormalizedDegree",
ADD COLUMN     "startDateIso" TIMESTAMP(3),
ADD COLUMN     "startDateRaw" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "companyDomain" TEXT,
ADD COLUMN     "companyRaw" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endDateIso" TIMESTAMP(3),
ADD COLUMN     "endDateRaw" TEXT,
ADD COLUMN     "endIsCurrent" BOOLEAN DEFAULT false,
ADD COLUMN     "isVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "location" JSONB,
ADD COLUMN     "normalizedTitle" TEXT,
ADD COLUMN     "skillsDetected" TEXT[],
ADD COLUMN     "startDateIso" TIMESTAMP(3),
ADD COLUMN     "startDateRaw" TEXT,
ADD COLUMN     "startIsCurrent" BOOLEAN DEFAULT false,
ADD COLUMN     "titleRaw" TEXT,
ADD COLUMN     "type" "ExperienceType",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "verificationConfidence" DOUBLE PRECISION,
ADD COLUMN     "verificationDate" TIMESTAMP(3),
ADD COLUMN     "verificationNotes" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "analysis" JSONB,
ADD COLUMN     "basics" JSONB,
ADD COLUMN     "fileHash" TEXT,
ADD COLUMN     "parsedAt" TIMESTAMP(3),
ADD COLUMN     "parserVersion" TEXT,
ADD COLUMN     "primaryEmail" TEXT,
ADD COLUMN     "primaryPhone" TEXT,
ADD COLUMN     "verification" JSONB;

-- CreateTable
CREATE TABLE "ResumeEmail" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rawText" TEXT,
    "confidence" DOUBLE PRECISION,
    "pageIndex" INTEGER,

    CONSTRAINT "ResumeEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumePhone" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "rawText" TEXT,
    "confidence" DOUBLE PRECISION,
    "pageIndex" INTEGER,

    CONSTRAINT "ResumePhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeUrl" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "type" TEXT,
    "url" TEXT NOT NULL,
    "rawText" TEXT,
    "pageIndex" INTEGER,

    CONSTRAINT "ResumeUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillProfile" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT,
    "category" TEXT,
    "computedLevel" "SkillLevel",
    "validityScore" DOUBLE PRECISION,
    "metadata" JSONB,
    "sources" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SkillProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "name" TEXT,
    "issuer" TEXT,
    "dateRaw" TEXT,
    "dateIso" TIMESTAMP(3),
    "doesExpire" BOOLEAN DEFAULT false,
    "verificationUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "proficiency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ResumeEmail_resumeId_idx" ON "ResumeEmail"("resumeId");

-- CreateIndex
CREATE INDEX "ResumeEmail_email_idx" ON "ResumeEmail"("email");

-- CreateIndex
CREATE INDEX "ResumePhone_resumeId_idx" ON "ResumePhone"("resumeId");

-- CreateIndex
CREATE INDEX "ResumePhone_phone_idx" ON "ResumePhone"("phone");

-- CreateIndex
CREATE INDEX "ResumeUrl_resumeId_idx" ON "ResumeUrl"("resumeId");

-- CreateIndex
CREATE INDEX "ResumeUrl_url_idx" ON "ResumeUrl"("url");

-- CreateIndex
CREATE INDEX "SkillProfile_resumeId_idx" ON "SkillProfile"("resumeId");

-- CreateIndex
CREATE INDEX "SkillProfile_name_idx" ON "SkillProfile"("name");

-- CreateIndex
CREATE INDEX "SkillProfile_normalizedName_idx" ON "SkillProfile"("normalizedName");

-- CreateIndex
CREATE INDEX "Certification_resumeId_idx" ON "Certification"("resumeId");

-- CreateIndex
CREATE INDEX "Certification_name_idx" ON "Certification"("name");

-- CreateIndex
CREATE INDEX "Language_resumeId_idx" ON "Language"("resumeId");

-- CreateIndex
CREATE INDEX "Language_language_idx" ON "Language"("language");

-- CreateIndex
CREATE INDEX "Education_institution_idx" ON "Education"("institution");

-- CreateIndex
CREATE INDEX "Experience_company_idx" ON "Experience"("company");

-- CreateIndex
CREATE INDEX "Experience_title_idx" ON "Experience"("title");

-- CreateIndex
CREATE INDEX "Project_name_idx" ON "Project"("name");

-- CreateIndex
CREATE INDEX "Resume_fileHash_idx" ON "Resume"("fileHash");

-- CreateIndex
CREATE INDEX "Resume_parsedAt_idx" ON "Resume"("parsedAt");

-- AddForeignKey
ALTER TABLE "ResumeEmail" ADD CONSTRAINT "ResumeEmail_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumePhone" ADD CONSTRAINT "ResumePhone_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeUrl" ADD CONSTRAINT "ResumeUrl_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProfile" ADD CONSTRAINT "SkillProfile_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
