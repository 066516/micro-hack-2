/*
  Warnings:

  - You are about to drop the column `personId` on the `Task` table. All the data in the column will be lost.
  - Added the required column `type` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_personId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "personId",
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "subTask" (
    "id" SERIAL NOT NULL,
    "personId" INTEGER,
    "taskId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'created',

    CONSTRAINT "subTask_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subTask" ADD CONSTRAINT "subTask_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subTask" ADD CONSTRAINT "subTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
