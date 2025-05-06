import { connect } from '@/dbconfig/dbConfig';
import User  from '@/models/user.model';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { sendEmail } from '@/helpers/mailer';


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {name, username, email, password}= reqBody;
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({name, username, email, password: hashedPassword});
        const savedUser = await newUser.save();
        console.log(savedUser);
        // send email
      await sendEmail(savedUser.email, "verify", savedUser._id, savedUser.name);  

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });



    }catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

