import { connectToDatabase } from "@/helpers/server-helpers";
import { NextResponse } from "next/server";
import prisma from '@/prisma';

export const POST = async (req: Request) => {
  try {
    const { title, content } = await req.json();
    if (!title || !content) return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    await connectToDatabase();
    const newuser = await prisma.post.create({
      data: { title, content },
    });
    console.log(newuser);
    return NextResponse.json({ newuser }, { status: 201 });
  } catch (error) {

    console.error(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const GET = async () => {
  try {
    await connectToDatabase();
    const post = await prisma.post.findMany();
    console.log(post);
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {

    console.error(11111111,error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};