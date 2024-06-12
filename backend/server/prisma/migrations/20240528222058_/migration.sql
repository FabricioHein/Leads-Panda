/*
  Warnings:

  - You are about to drop the column `className` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `date_end` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `date_start` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `agenda_user` table. All the data in the column will be lost.
  - You are about to drop the `_UsersToagenda_user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,agendaId]` on the table `agenda_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `agendaId` to the `agenda_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `agenda_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_UsersToagenda_user" DROP CONSTRAINT "_UsersToagenda_user_A_fkey";

-- DropForeignKey
ALTER TABLE "_UsersToagenda_user" DROP CONSTRAINT "_UsersToagenda_user_B_fkey";

-- AlterTable
ALTER TABLE "agenda_user" DROP COLUMN "className",
DROP COLUMN "created_at",
DROP COLUMN "date_end",
DROP COLUMN "date_start",
DROP COLUMN "description",
DROP COLUMN "status",
DROP COLUMN "title",
DROP COLUMN "updated_at",
ADD COLUMN     "agendaId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_UsersToagenda_user";

-- CreateTable
CREATE TABLE "Agenda" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "className" VARCHAR(20),
    "status" VARCHAR(10),
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "agenda_user_userId_agendaId_key" ON "agenda_user"("userId", "agendaId");

-- AddForeignKey
ALTER TABLE "agenda_user" ADD CONSTRAINT "agenda_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda_user" ADD CONSTRAINT "agenda_user_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "Agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
