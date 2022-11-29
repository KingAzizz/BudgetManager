
import React,{createContext,useContext,useState,useEffect,useRef} from 'react'
import toast from 'react-hot-toast'

const Context = createContext()



export const StateContext = ({children}) => {
    const [balance, setBalance] = useState(0)
    const [saving,setSaving] = useState(0)
    const [spending, setSpending] = useState(0)
    const [historySpending,setHistorySpending] = useState([])

    useEffect(() => {
        // localStorage.clear()
        localStorage.getItem("balance") && setBalance(parseFloat(localStorage.getItem("balance")))
        localStorage.getItem("saving") &&  setSaving(parseFloat(localStorage.getItem("saving")))
        localStorage.getItem("spending") && setSpending(parseFloat(localStorage.getItem("spending")))
    },[])
    useEffect(() => {
        
        setHistorySpending(JSON.parse(localStorage.getItem("spendDetails")))
    },[spending])
    
    const addBalanceSavingsAmount = (type,amount,hideAdd) => {
        if(type === "Saving"){
            setSaving((prevAmount) => prevAmount + amount)
            hideAdd(false)
            localStorage.setItem("saving",saving + amount)
        }

        else if(type === "Balance"){
            setBalance((prevAmount) => prevAmount + amount)
            hideAdd(false)
            localStorage.setItem("balance",balance + amount)


        }
    }

    const addSpending = (amountSpend,date,type,setDate,setCurrentSpend,setTypeOfSpending) => {
        
        if(amountSpend === "" || date === "" || type === ""){
            toast.error("Fields are empty")

        }else{

            setBalance((prevAmount) => prevAmount - parseFloat(amountSpend))
            localStorage.setItem("balance",balance - parseFloat(amountSpend))
            setSpending((prev) => prev + parseFloat(amountSpend))
            localStorage.setItem("spending",spending + parseFloat(amountSpend))
            let spendDetails ={
                type:type,
                date:date,
                amountSpend:amountSpend
            }
          
            if(localStorage.getItem("spendDetails") !== null){

                localStorage.setItem("spendDetails",JSON.stringify([...historySpending,spendDetails]))
            }else{
                localStorage.setItem("spendDetails",JSON.stringify([spendDetails]))

            }
            setTypeOfSpending("")
            setDate("")
            setCurrentSpend(0)
        }
        }
    
return (<Context.Provider value={{
    balance,
    saving,
    spending,
    setSpending,
    addBalanceSavingsAmount,
    addSpending
,historySpending
   
    
}}>


    {children}
</Context.Provider>)
}


export const useStateContext = () => useContext(Context)