'use client'
import React from 'react'

const page = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button className="btn btn-outline btn-info" onClick={handleClick}>Info</button>

    </div>
  )
}

export default page
