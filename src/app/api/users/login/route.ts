import { connect } from '@/dbconfig/dbConfig';
import User  from '@/models/user.model';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
try{
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if(!user){
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

   const isPasswordValid = await bcrypt.compare(password, user.password)
   if(!isPasswordValid){
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
   }
   const tokenData = {
    id: user._id,
    email: user.email,
   }
   const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET as string, { expiresIn: '1d' });
   
const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
response.cookies.set('token', token, { httpOnly: true });
return response;

}catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
}
}