/*
  Warnings:

  - Added the required column `locationX` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationY` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "locationX" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationY" DOUBLE PRECISION NOT NULL;
