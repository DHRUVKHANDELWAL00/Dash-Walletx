import React from 'react'

const Overview = (props) => {
    const {isValid,balance}=props;
    // console.log(isValid.value,balance)
  return (
    <div className='h-72 mt-16 border border-white-400 rounded-md flex flex-col justify-center items-center m-16 p-8 hover:bg-white hover:text-black transition-all'>Overview

<h1>Balance:    {balance}</h1>
<h1>Valid Hash:   {isValid.toString()}</h1>
    </div>
  )
}

export default Overview