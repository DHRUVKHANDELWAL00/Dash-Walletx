import React from 'react'

const EthereumWallet = (props) => {
    const {publicEthKey,setPublicEthKey,createEthWallet,removeEthWallet}=props;
  return (
    <div className="flex flex-col justify-between items-center pb-16">
        <button onClick={createEthWallet} className="btn btn-outline">Create Ethereum Wallet</button>
        <div className="flex flex-col justify-between items-center">
          {publicEthKey.length>0 ? 
        <>
        {publicEthKey.map((item,index)=>{
          return(
            <div key={index}>
              <h1>{item}</h1>
            </div>
          )
        })}
        <button onClick={removeEthWallet} className="btn btn-outline">Delete all Wallets</button>
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
