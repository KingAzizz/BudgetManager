import React from 'react'
import {BsPiggyBank} from 'react-icons/bs'
import {GiPayMoney,GiReceiveMoney} from'react-icons/gi'
const Wallet = () => {
  return (
    <>
        <div>
            <div className='box'>
                <h3>Savings</h3>
                <p>1000 <span style={{position:'absolute',right:85}}><BsPiggyBank /></span></p>
            </div>
            <div className='wallet-buttons'>
                <button type='button'>Add Saving</button>
                <button type='button'>History</button>
            </div>
        </div>
        <div className='spendingBox'>
            <h3>Spending</h3>
            <p>6000 <span style={{position:'absolute',right:15,marginTop:'8px'}}><GiPayMoney /></span></p>
        </div>
        <div>
        <div className='box'>
                <h3>Balance</h3>
                <p>1000 <span style={{position:'absolute',right:85}}><GiReceiveMoney /></span></p>
            </div>
            <div className='wallet-buttons'>
                <button type='button'>Add Balance</button>
                <button type='button'>History</button>
            </div>
        </div>
    </>
  )
}

export default Wallet