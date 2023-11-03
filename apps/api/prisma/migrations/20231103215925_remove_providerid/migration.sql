/*
  Warnings:

  - You are about to drop the column `providerUid` on the `AuthProvider` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "AuthProvider_providerUid_key";

-- AlterTable
ALTER TABLE "AuthProvider" DROP COLUMN "providerUid";
