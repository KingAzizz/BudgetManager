import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <header>

    <Navbar />
        </header>

        <main className='main'>
            {children}
        </main>

        <footer className='soon'></footer>

    </div>
  )
}

export default Layout