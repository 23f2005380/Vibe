import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  // Create a new user for testing
  const user = await prisma.user.create({
    data: { email: `test${Date.now()}@test.com`, name: "Test User" },
  });
  return NextResponse.json(user);
}
