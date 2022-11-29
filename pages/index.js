import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import SpendingTracker from '../components/SpendingTracker'
import Wallet from '../components/Wallet'

export default function Home() {
  let walletRef = useRef()

  

  
  return (
    <>
     <div className='wallet-container' ref={walletRef}>
    <Wallet />
     </div>
     <div className="spendingTrackerContainer">
      <SpendingTracker />
     </div>
    </>
  )
}
