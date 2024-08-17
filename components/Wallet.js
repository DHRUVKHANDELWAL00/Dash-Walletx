import React,{useState,useEffect} from 'react'
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
const Wallet = (props) => {
  const {createWallet,removeSolanaWallet,publicKey,setPublicKey} = props;
  const [connection,setConnection]=useState(null);
  // const [balance,setBalance]=useState(0);
  
//   const getBalance = async (item) => {
//   try {
    
//     const publicKeyObj = new PublicKey(item.publickey);
//     const newBalance = await connection?.getBalance(publicKeyObj) ?? 0;
//     const balances=newBalance / LAMPORTS_PER_SOL;
//     item['balances']=balances;
//     setBalance(balances)
//     console.log(item)
//   } catch (error) {
//     console.error("Error getting balance:", error);
//   }
// };
  return (
    <div className="flex flex-col justify-between items-center pb-16">
        <button onClick={createWallet} className="btn btn-outline">Create Solana Wallet</button>
        <div className="flex flex-col justify-between items-center">
          {publicKey.length>0 ? 
        <>
        {publicKey.map((item,index)=>{
          return(
            <div key={index} className='flex flex-col items-center justify-center p-6'>
              <h1>{item.publickey}</h1>
              <h1>Balance:{item.balances}</h1>

              {/* <button onClick={()=>getBalance(item)} className="btn btn-outline mt-6">Get Balance</button> */}
            </div>
          )
        })}
        <button onClick={removeSolanaWallet} className="btn btn-outline">Delete all Wallets</button>
        </>
        
        :
        <>
        <h1>No wallets to show</h1>
        </>
        }
        </div>
      </div>
  )
}

export default Wallet
