/*
  Warnings:

  - You are about to drop the column `usersId` on the `agenda_user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "agenda_user" DROP CONSTRAINT "agenda_user_usersId_fkey";

-- AlterTable
ALTER TABLE "agenda_user" DROP COLUMN "usersId";

-- CreateTable
CREATE TABLE "_UsersToagenda_user" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UsersToagenda_user_AB_unique" ON "_UsersToagenda_user"("A", "B");

-- CreateIndex
CREATE INDEX "_UsersToagenda_user_B_index" ON "_UsersToagenda_user"("B");

-- AddForeignKey
ALTER TABLE "_UsersToagenda_user" ADD CONSTRAINT "_UsersToagenda_user_A_fkey" FOREIGN KEY ("A") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsersToagenda_user" ADD CONSTRAINT "_UsersToagenda_user_B_fkey" FOREIGN KEY ("B") REFERENCES "agenda_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
