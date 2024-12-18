/*
  Warnings:

  - You are about to drop the `CreditCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_empresa_configId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_empresa_configId_fkey";

-- DropForeignKey
ALTER TABLE "config_clientes" DROP CONSTRAINT "config_clientes_currentPlanId_fkey";

-- DropTable
DROP TABLE "CreditCard";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Plan";

-- CreateTable
CREATE TABLE "planos" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "empresa_configId" INTEGER,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_card" (
    "id" SERIAL NOT NULL,
    "cardNumber" VARCHAR(19) NOT NULL,
    "expiryDate" VARCHAR(5) NOT NULL,
    "cvv" VARCHAR(4) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "empresa_configId" INTEGER,

    CONSTRAINT "credit_card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_card" ADD CONSTRAINT "credit_card_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "config_clientes" ADD CONSTRAINT "config_clientes_currentPlanId_fkey" FOREIGN KEY ("currentPlanId") REFERENCES "planos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
