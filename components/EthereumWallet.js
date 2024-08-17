import React,{useState,useEffect} from 'react'
import { Wallet, HDNodeWallet } from "ethers";
import Web3 from "web3";
const EthereumWallet = (props) => {
    
    const {publicEthKey,setPublicEthKey,createEthWallet,removeEthWallet}=props;
    const [connection,setConnection]=useState(null);
    const [web3,setWeb3]=useState(null);
  const [balances,setBalances]=useState([]);
   useEffect(() => {
    const provider = new Web3.providers.HttpProvider(
 "https://eth-mainnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK"
     );
    const newWeb3 = new Web3(provider);
    setWeb3(newWeb3);
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
        <button onClick={createEthWallet} className="btn btn-outline">Create Ethereum Wallet</button>
        <div className="flex flex-col justify-between items-center">
          {publicEthKey.length>0 ? 
        <>
        {publicEthKey.map((item,index)=>{
          return(
            <div key={index}  className='flex flex-col items-center justify-center p-6'>
              <h1>{item.publickey}</h1>
            </div>
          )
        })}
        <button onClick={removeEthWallet} className="btn btn-outline mt-6">Delete all Wallets</button>
        </>
        
        :
        <>
        <h1>No Eth wallets to show</h1>
        </>
        }
        </div>
      </div>
  )
}

export default EthereumWallet
