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
  const [balances,setBalances]=useState([]);
  useEffect(() => {
    const newConnection = new Connection(
      "https://solana-mainnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK"
    );
    setConnection(newConnection);
  }, []);
  const getBalance = async (item) => {
  try {
    const publicKeyObj = new PublicKey(item);
    const newBalance = await connection?.getBalance(publicKeyObj) ?? 0;
    setBalances([...balances, newBalance / LAMPORTS_PER_SOL]);
  } catch (error) {
    console.error("Error getting balance:", error);
  }
};
  return (
    <div className="flex flex-col justify-between items-center pb-16">
        <button onClick={createWallet} className="btn btn-outline">Create Solana Wallet</button>
        <div className="flex flex-col justify-between items-center">
          {publicKey.length>0 ? 
        <>
        {publicKey.map((item,index)=>{
          return(
            <div key={index}>
              <h1>{item}</h1>
              {balances? <>{balances}</>:<>Loading...</>}
              <button onClick={()=>getBalance(item)} className="btn btn-outline">Get Balance</button>
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
