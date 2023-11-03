/*
  Warnings:

  - A unique constraint covering the columns `[providerUid]` on the table `AuthProvider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `providerUid` to the `AuthProvider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuthProvider" ADD COLUMN     "providerUid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AuthProvider_providerUid_key" ON "AuthProvider"("providerUid");
