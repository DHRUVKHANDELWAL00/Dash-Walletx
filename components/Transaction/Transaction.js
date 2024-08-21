'use client'
import React,{useState,useEffect} from 'react'
import {Connection,PublicKey, LAMPORTS_PER_SOL} from '@solana/web3.js'
const Transaction = () => {
    const [senderpublickey,setSenderpublickkey]=useState('');
    const [recieverpublickey,setRecieverpublickkey]=useState('');
    // const [data,setData]=useState([]);
    const [connection,setConnection]=useState('');
    const [amt,setAmt]=useState(0);
    // const [isValid,setIsValid]=useState(true);
    // const [airdropamt,setAirdropamt]=useState(0);



    useEffect(()=>{
        const connect=new Connection("https://solana-devnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK");
        setConnection(connect);
    },[])


    const handleChange=(e)=>{
        console.log(e.target.value);
        setSenderpublickkey(e.target.value);
    }
    const handleChange2=(e)=>{
        console.log(e.target.value);
        setRecieverpublickkey(e.target.value);
    }
     const handleOptionChange=(e)=>{
        console.log(e.target.value*LAMPORTS_PER_SOL);
        setAmt(e.target.value*LAMPORTS_PER_SOL);
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
         const publicKeyObj = new PublicKey(publickey);
        console.log('submiited')

// const newBalance = await connection?.requestAirdrop?.(publicKeyObj, airdropamt) ?? 0;
//         console.log("done, success")
        // const isValidHash=await connection?.isBlockhashValid(publicKeyObj) ?? 0;
        // setIsValid(isValidHash.value);
        // console.log(isValidHash.value);
    }




  return (
    <div className='flex flex-col justify-center items-center mt-0'>
        <form>
            <div className="flex flex-col mt-0 items-center gap-6">
                <input
  type="text"
  placeholder="Enter Your Address"
  className="input input-bordered input-primary w-full text-black" onChange={handleChange} />
  <input
  type="text"
  placeholder="Enter Reciever's Address"
  className="input input-bordered input-primary w-full text-black" onChange={handleChange2} />
  <select className="select select-primary w-full max-w-xs text-black"  onChange={handleOptionChange} >
  <option disabled selected>Select Amount</option>
  <option>0.5</option>
  <option>1</option>
  <option>1.5</option>
  <option>2</option>
</select>
  <button className="btn btn-outline btn-primary" onClick={handleSubmit}>Send Money</button>

            </div>
        </form>
    </div>
  )
}




export default Transaction


