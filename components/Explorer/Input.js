'use client'
import React,{useState,useEffect} from 'react'
import {Connection,PublicKey} from '@solana/web3.js'
import Overview from './Overview'
const Input = () => {
    const [publickey,setPublickkey]=useState('');
    const [data,setData]=useState([]);
    const [connection,setConnection]=useState('');
    const [balance,setBalance]=useState(0);
    const [isValid,setIsValid]=useState(true);



    useEffect(()=>{
        const connect=new Connection("https://solana-devnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK");
        setConnection(connect);
    },[])


    const handleChange=(e)=>{
        console.log(e.target.value);
        setPublickkey(e.target.value);
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
         const publicKeyObj = new PublicKey(publickey);
        console.log('submiited')
        const newBalance=await connection?.getBalance(publicKeyObj) ?? 0;
        setBalance(newBalance)
        const isValidHash=await connection?.isBlockhashValid(publicKeyObj) ?? 0;
        setIsValid(isValidHash.value);
        console.log(isValidHash.value);
    }




  return (
    <div className='mt-10'>
        <form>
            <div className="flex flex-row justify-between items-center gap-6">
                <input
  type="text"
  placeholder="Enter Public Key"
  className="input input-bordered input-primary w-full text-black" onChange={handleChange} />
  <button className="btn btn-outline btn-primary" onClick={handleSubmit}>Search</button>

            </div>
        </form>
        <Overview balance={balance} isValid={isValid}/>
    </div>
  )
}




export default Input

