import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req) {
    const comments = await prisma.comment.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json({
        succes:true,
        message:"data get",
        data:comments},{status:200})
}

export async function POST(req) {
    const body = await req.json();
    const { username, text } = body;
    const newComment = await prisma.comment.create({
        data: {
            username,  
            text,
        },
    });
    return NextResponse.json({
        succes:true,
        message:"data posted",
        data:newComment},{status:201})
}
