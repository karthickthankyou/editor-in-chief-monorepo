/*
  Warnings:

  - Made the column `count` on table `Read` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Read" ALTER COLUMN "count" SET NOT NULL;
