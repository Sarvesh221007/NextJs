import { connect } from "@/dbConfig/dbConfig";
import User "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        if (!reqBody) {
            return NextResponse.json({ error: "Request body is required" }, { status: 400 });
        }
        const { username, email, password } = reqBody;
        console.log("Received data:", reqBody);


        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        //check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        //hash password 
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        return NextResponse.json({ message: "User created successfully", success: true, savedUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}