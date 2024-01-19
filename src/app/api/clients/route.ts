import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: Request) {
  try {
    const clients = await prisma.client.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    if (error instanceof Error) {
      NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  const { name, transaction_number } = await request.json();

  const newClient = await prisma.client.create({
    data: {
      transaction_number,
      name,
    },
  });
  return NextResponse.json(newClient);
}
