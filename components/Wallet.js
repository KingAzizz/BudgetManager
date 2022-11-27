import React, { useState } from 'react'
import {BsPiggyBank} from 'react-icons/bs'
import {GiPayMoney,GiReceiveMoney} from'react-icons/gi'
import toast from 'react-hot-toast'
import { useStateContext } from '../Context/StateContext'
import AddBalanceSavings from './AddBalanceSavings'
const Wallet = () => {
    const [showAddBalance,setShowAddBalance] = useState(false)
    const [showAddSaving,setShowAddSaving] = useState(false)

    const {balance,saving,spending} = useStateContext()

    const comingSoon = () => toast("Track the history feature coming soon")
  return (
    <>
        {showAddBalance && <AddBalanceSavings type={"Balance"} currentAmount={balance} hideAdd={setShowAddBalance}/>}

        {showAddSaving && <AddBalanceSavings type={"Saving"} currentAmount={saving} hideAdd={setShowAddSaving} />}

        <div>
            <div className='box'>
                <h3>Savings</h3>
                <p>{saving} <span style={{position:'absolute',right:85}}><BsPiggyBank /></span></p>
            </div>
            <div className='wallet-buttons'>
                <button type='button' onClick={() =>setShowAddSaving(true)}>Add Saving</button>
                <button type='button' onClick={comingSoon}>History</button>
            </div>
        </div>
        <div className='spendingBox'>
            <h3>Spending</h3>
            <p>{spending} <span style={{position:'absolute',right:15,marginTop:'8px'}}><GiPayMoney /></span></p>
        </div>
        <div>
        <div className='box'>
                <h3>Balance </h3>
                <p>{balance} <span style={{position:'absolute',right:85}}><GiReceiveMoney /></span></p>
            </div>
            <div className='wallet-buttons'>
                <button type='button' onClick={() => setShowAddBalance(true)}>Add Balance</button>
                <button type='button' onClick={comingSoon}>History</button>
            </div>
        </div>
    </>
  )
}

export default Wallet
