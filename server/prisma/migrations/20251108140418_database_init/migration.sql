-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "FristName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "HashPassword" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");
