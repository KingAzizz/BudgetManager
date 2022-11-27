
import React,{createContext,useContext,useState,useEffect,useRef} from 'react'


const Context = createContext()



export const StateContext = ({children}) => {
    const [balance, setBalance] = useState(0)
    const [saving,setSaving] = useState(0)
    const [spending, setSpending] = useState(0)
    const [typeOfSpending,setTypeOfSpending] = useState("")
    const [date,setDate] = useState(null)
    const [name,setName] = useState("")

    const addBalanceSavingsAmount = (type,amount) => {
        if(type === "Saving"){
            setSaving((prevAmount) => prevAmount + amount)
        }

        else if(type === "Balance"){
            setBalance((prevAmount) => prevAmount + amount)
        }
    }
    
return (<Context.Provider value={{
    balance,
    saving,
    spending,
    addBalanceSavingsAmount
}}>


    {children}
</Context.Provider>)
}


export const useStateContext = () => useContext(Context)