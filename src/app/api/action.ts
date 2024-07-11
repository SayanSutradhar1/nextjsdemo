"use server";

import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

type formData = {
  user: string;
  message: string;
  timeStamp: string;
};

export const Submit = async (data: formData) => {
  try {
    await dbConnect();
    await User.create(data);
    return { status: "OK", message: "Stored Successfully" };
  } catch (error) {
    console.log(error)
    return {status : "ERROR" , message : "Failed"}
  }
};
