"use client";

import Image from "next/image";
import { Submit } from "./api/action";
import { useState } from "react";

function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default function Home() {
  const [data, setData] = useState({
    user: "",
    message: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await Submit({
        user: data.user,
        message: data.message,
        timeStamp: getCurrentDateTime(),
      });
      console.log(response);
      setData({
        user: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="px-6 py-4">
      <h1>Welcome to nextjs 14</h1>
      <form action={handleSubmit}>
        <input type="text" name="user" className="text-black mt-4" value={data.user} onChange={(e)=>setData((prev)=>({...prev,user:e.target.value}))}/>
        <br />
        <input type="text" name="message" className="text-black my-2" value={data.message} onChange={(e)=>setData((prev)=>({...prev,message:e.target.value}))}/>
        <br />
        <input type="submit" value={"Submit"} className="p-3 bg-green-500" />
      </form>
    </main>
  );
}
