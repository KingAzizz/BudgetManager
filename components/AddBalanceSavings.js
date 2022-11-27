import React, { useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import { useStateContext } from '../Context/StateContext'

const AddBalanceSavings = ({type,currentAmount,hideAdd}) => {
    const [amount,setAmount] = useState(0)
    const {addBalanceSavingsAmount} = useStateContext()
  return (
    <div className='addContainer'>
          <button
          type="button"
          className='hide-add'
          onClick={() => hideAdd(false)}
        >
          <AiOutlineLeft size={25} style={{cursor:'pointer'}} />
      
        </button>
        <div>
        <label>{type}</label>
        <h3>{currentAmount}</h3>
        </div>
        <input className='addInput' placeholder='how much you want to add' type={"number"} onChange={(e) => setAmount(e.target.value)}/>
        <button className="button-33" role="button" onClick={() => addBalanceSavingsAmount(type,parseFloat(amount))}>Add {type}</button>


    </div>
  )
}

export default AddBalanceSavings