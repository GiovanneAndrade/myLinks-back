-- CreateTable
CREATE TABLE "list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinkToList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LinkToList_AB_unique" ON "_LinkToList"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkToList_B_index" ON "_LinkToList"("B");

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToList" ADD CONSTRAINT "_LinkToList_A_fkey" FOREIGN KEY ("A") REFERENCES "link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToList" ADD CONSTRAINT "_LinkToList_B_fkey" FOREIGN KEY ("B") REFERENCES "list"("id") ON DELETE CASCADE ON UPDATE CASCADE;
