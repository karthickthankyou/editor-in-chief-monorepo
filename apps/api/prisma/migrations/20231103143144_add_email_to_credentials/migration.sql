/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Credentials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credentials" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_email_key" ON "Credentials"("email");
