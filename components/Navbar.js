import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <Head>
            <title>Budget Manager</title>
            <link rel="icon" type="image/x-icon" href="/logoColor.png" />
            </Head>
        <Image src="/logo.png" width={102} height={70}/>
    </nav>
  )
}

export default Navbar