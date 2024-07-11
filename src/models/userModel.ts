import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user : String,
    message : String,
    timeStamp : String,
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User