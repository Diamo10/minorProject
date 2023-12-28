import connectMongoDB from "@/lib/mongodb";
import contact from "@/models/conctact";
import { NextResponse } from "next/server";

export async function POST(req)
{
    const{fname, lname, email, message} = await req.json();
    await connectMongoDB;
    await contact.create({fname, lname, email, message});
    return NextResponse.json({message: "message sent successfully"}, {status: 201});
}
