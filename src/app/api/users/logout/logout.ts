import { connect } from '@/dbconfig/dbConfig';
import User  from '@/models/user.model';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connect();

export async function GET(request: NextRequest) {
    try{
        const response = NextResponse.json({message: 'Logout successful'}, {status: 200});
        response.cookies.set('token', '', {httpOnly: true , expires: new Date(0)}, );
        return response;
    }catch(error : any){
     return NextResponse.json({message: error.message}, {status: 500} ,);
    }
}
