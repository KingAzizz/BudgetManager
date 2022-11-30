import { useStateContext } from "../Context/StateContext";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect ,PureComponent} from "react";

const Chart = () => {
  const [width,setWidth] = useState(0)
  const { historySpending} = useStateContext();
  const [domLoaded, setDomLoaded] = useState(false);
    
  useEffect(() => {
    setDomLoaded(true);
    setWidth(window.innerWidth)

  }, [domLoaded]);
 
  return (
    <>
    
         {domLoaded && <LineChart data={historySpending?.sort((a,b) =>new Date(a.date) -  new Date(b.date) )} width={width - 20} height={300}>
            <Line type="monotone" dataKey="currentSaving" name="current Saving" stroke="#8884d8" />
            <Line type="monotone" dataKey="balanceBefore" name="Balance Before transaction" stroke="#8884d8" />
            <Line type="monotone" dataKey="amountSpend" name="expense" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>}
       
      
    </>
  );
};

export default Chart;
