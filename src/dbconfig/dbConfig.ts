import mongoose from "mongoose";

export async function connect() {
    try{
    mongoose.connect(process.env.MONGO_URL!);
     const connection = mongoose.connection;
     connection.on("connected", () => {
         console.log("mongodb connected successfully");
     })
     connection.on("error", (err) => {
         console.log(`error while connecting to mongodb ${err}`);
         process.exit();
     })
    }catch(err){
        console.log(`somthig went wrong regarding db connection ${err}`);
    }
}