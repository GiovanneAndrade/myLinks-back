-- AlterTable
ALTER TABLE "metaFetcher" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "banner" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;