import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Wallet from '../components/Wallet'

export default function Home() {
  let walletRef = useRef()

  

  
  return (
    <>
     <div className='wallet-container' ref={walletRef}>
    <Wallet />
     </div>
    </>
  )
}
