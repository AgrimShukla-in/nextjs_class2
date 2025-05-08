import { connect } from '@/dbconfig/dbConfig';
import User  from '@/models/user.model';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

export async function POST (request: NextRequest) {
    const userId = await getDataFromToken(request);
    if (!userId) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    const user = await User.findById( { _id: userId } ).select('-password');
    if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  return NextResponse.json({ massge : 'User found', user }, { status: 200 });
}       
