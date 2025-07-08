/*
  Warnings:

  - You are about to drop the column `UserId` on the `comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_UserId_fkey";

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "UserId",
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_username_fkey" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE SET NULL ON UPDATE CASCADE;
