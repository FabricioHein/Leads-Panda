/*
  Warnings:

  - You are about to drop the `Agenda` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "agenda_user" DROP CONSTRAINT "agenda_user_agendaId_fkey";

-- DropTable
DROP TABLE "Agenda";

-- CreateTable
CREATE TABLE "agenda" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "className" VARCHAR(20),
    "status" VARCHAR(10),
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agenda_user" ADD CONSTRAINT "agenda_user_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
