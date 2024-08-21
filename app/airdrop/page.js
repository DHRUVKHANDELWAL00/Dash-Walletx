'use client'
import Navbar from "@/components/Navbar";
import Airdrop from '@/components/Airdrop/Airdrop';

const page = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Navbar/>
      <Airdrop/>

    </div>
  )
}

export default page