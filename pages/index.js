import Head from 'next/head'
import Image from 'next/image'
import Wallet from '../components/Wallet'

export default function Home() {
  return (
    <>
     <div className='wallet-container'>
    <Wallet />
     </div>
    </>
  )
}
