'use client'
import React from 'react'
import Input from "@/components/Explorer/Input";
import Navbar from "@/components/Navbar";
import History from "@/components/Explorer/History";
import Image from "next/image";

const page = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Input/>
      <History/>

    </div>
  )
}

export default page

