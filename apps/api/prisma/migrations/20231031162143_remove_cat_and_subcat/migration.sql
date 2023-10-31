/*
  Warnings:

  - You are about to drop the column `category` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `subCategory` on the `Article` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "category",
DROP COLUMN "subCategory";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
