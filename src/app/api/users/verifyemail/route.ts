import { connect } from '@/dbconfig/dbConfig';
import User  from '@/models/user.model';
import { NextRequest, NextResponse } from 'next/server';


connect();

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json();
        const {token} = reqBody;
        if(!token){
            return NextResponse.json({message: "Token is required"}, {status: 400})
        }
        const user = await User.findOne({verifyToken : token , verifyTokenExpiry: {$gt: Date.now()}});
        if(!user){
            return NextResponse.json({message: "Token is invalid or has expired"}, {status: 400})
        }
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyExpiry = undefined;
        await user.save();
        return NextResponse.json({message: "Email verified successfully"}, {status: 200});
    }catch(error : any){
        return NextResponse.json({message: error.message}, {status: 500})
    }
}