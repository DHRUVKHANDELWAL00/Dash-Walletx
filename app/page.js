'use client'
import Image from "next/image";
import { useState,useEffect } from "react";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wallet from "@/components/Wallet";
import EthereumWallet from "@/components/EthereumWallet";
import Mnemonic from "@/components/Mnemonic";
// import { Wallet, HDNodeWallet } from "ethers";
import Web3 from "web3";

export default function Home() {
  const [mnemonic,setMnemonic]=useState("")
  const [seed,setSeed]=useState("")
  const [publicKey,setPublicKey]=useState([])
  const [publicEthKey,setPublicEthKey]=useState([])
  const [cntSol,setCntSol]=useState(0);
  const [cntEth,setCntEth]=useState(0);
  const [connection,setConnection]=useState(null);

  useEffect(() => {
    const newConnection = new Connection(
      "https://solana-mainnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK"
    );
    setConnection(newConnection)
  }, []);

//   useEffect(() => {
//     const provider = new Web3.providers.HttpProvider(
//  "https://eth-mainnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK"
//      );
//     const newWeb3 = new Web3(provider);
//     setWeb3(newWeb3);
//   }, []);

  const handleClick=()=>{
    const mnemonicc = generateMnemonic();
    // console.log("Generated Mnemonic:", mnemonicc);
    const seedd = mnemonicToSeedSync(mnemonicc);
    setSeed(seedd);
    setMnemonic(mnemonicc)
  }
  

  const createWallet=async()=>{
  const path = `m/44'/501'/${cntSol}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  // console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
  const publicKeyObj = new PublicKey(Keypair.fromSecretKey(secret).publicKey.toBase58());
    const newBalance = await connection?.getBalance(publicKeyObj) ?? 0;
    const balances=newBalance / LAMPORTS_PER_SOL;
  publicKey.push({publickey:Keypair.fromSecretKey(secret).publicKey.toBase58(),balances:balances});
  setCntSol(cntSol+1);
  setPublicKey([...publicKey]);
  
    // item['balances']=balances;
    // setBalance(balances)
    console.log(item)
  // console.log(publicKey);
  }


  const createEthWallet=()=>{
  const path = `m/44'/60'/${cntEth}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  // console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
  publicEthKey.push({publickey:Keypair.fromSecretKey(secret).publicKey.toBase58()});
  setCntEth(cntEth+1);
  setPublicEthKey([...publicEthKey]);
  // console.log(publicKey);
  }


  const removeSolanaWallet=()=>{
    setPublicKey([])
    setCntSol(0)
  }


  const removeEthWallet=()=>{
    setPublicEthKey([])
    setCntEth(0)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Mnemonic mnemonic={mnemonic} setMnemonic={setMnemonic} handleClick={handleClick}/>
      <Wallet createWallet={createWallet} removeSolanaWallet={removeSolanaWallet} publicKey={publicKey} setPublicKey={setPublicKey} />
      <EthereumWallet createEthWallet={createEthWallet} removeEthWallet={removeEthWallet} publicEthKey={publicEthKey} setPublicEthKey={setPublicEthKey}/>
      <Footer/>
    </main>
  );
}
