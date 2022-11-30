import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <Head>
            <title>Budget Manager</title>
            <link rel="icon" type="image/x-icon" href="/logoColor.png" />

<meta name="title" content="Budget Manager" />
<meta name="description" content="Manage your spending monitor your expenses to see where your money is being wasted
" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://budget-manager-beige.vercel.app/" />
<meta property="og:title" content="Budget Manager" />
<meta property="og:description" content="Manage your spending monitor your expenses to see where your money is being wasted
" />
<meta property="og:image" content="/logoColor.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://budget-manager-beige.vercel.app/" />
<meta property="twitter:title" content="Budget Manager" />
<meta property="twitter:description" content="Manage your spending monitor your expenses to see where your money is being wasted
" />
<meta property="twitter:image" content="/logoColor.png"></meta>

            </Head>
        <Image src="/logo.png" width={102} height={70} alt="logo image"/>
    </nav>
  )
}

export default Navbar