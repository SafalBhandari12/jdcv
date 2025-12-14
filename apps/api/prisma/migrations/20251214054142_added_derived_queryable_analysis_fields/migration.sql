-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "geoConsistency" TEXT,
ADD COLUMN     "hasTimelineGaps" BOOLEAN,
ADD COLUMN     "qualityLevel" TEXT,
ADD COLUMN     "qualityScore" INTEGER,
ADD COLUMN     "socialFootprintFound" BOOLEAN,
ADD COLUMN     "suspicionLevel" TEXT,
ADD COLUMN     "suspicionScore" INTEGER;
