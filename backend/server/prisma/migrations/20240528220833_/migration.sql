-- CreateTable
CREATE TABLE "agenda_user" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "className" VARCHAR(20),
    "status" VARCHAR(10),
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "usersId" INTEGER,

    CONSTRAINT "agenda_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agenda_user" ADD CONSTRAINT "agenda_user_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
