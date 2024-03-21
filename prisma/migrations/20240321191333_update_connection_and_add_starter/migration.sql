/*
  Warnings:

  - You are about to drop the column `published` on the `Connection` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Starter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "connectionId" INTEGER NOT NULL,
    CONSTRAINT "Starter_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "Connection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Connection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "position" TEXT,
    "notes" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "location" TEXT,
    "relationship" TEXT,
    "tags" TEXT,
    "lastContact" DATETIME,
    "priority" TEXT,
    "dateCreated" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "birthday" DATETIME,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Connection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Connection" ("id", "name", "notes", "userId") SELECT "id", "name", "notes", "userId" FROM "Connection";
DROP TABLE "Connection";
ALTER TABLE "new_Connection" RENAME TO "Connection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
