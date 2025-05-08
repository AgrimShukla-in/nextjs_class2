import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (req: NextRequest) => {
    try {
        req.cookies.get("token")
        const token = req.cookies.get("token")?.value || ""
        const data : any = jwt.verify(token, process.env.TOKEN_SECRET as string)
        return data.id
    }catch (error : any) {
throw new Error(error.message) 
    }
}