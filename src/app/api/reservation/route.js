import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req,res){
    const body = await req.json()
    const { name, service, date, time } = body;
    const newReservation = await prisma.reservation.create({
        data: {
            name,
            service,
            date: new Date(date),
            time,},
    })
    return NextResponse.json({
        succes:true,
        message:"data posted",
        data:newReservation},{status:201})
}