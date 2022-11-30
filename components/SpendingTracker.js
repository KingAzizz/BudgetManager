import React,{useState} from "react";
import { GrAdd } from "react-icons/gr";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import { useStateContext } from '../Context/StateContext'

const SpendingTracker = () => {
  let currentDate = new Date().toJSON().slice(0, 10);

  const [date,setDate] = useState(currentDate)
  const [typeOfSpending,setTypeOfSpending] = useState("")
  const [currentSpend,setCurrentSpend] = useState(0)

  const {addSpending,historySpending} = useStateContext()
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(today);
  var dayName = days[d.getDay()];
  return (
    <>
      <div className="spendingWrapper">
        <div className="header">
          <h3>{today}</h3>
          <h3>{dayName}</h3>
        </div>
        <div className="card-wrapper">
          {historySpending !== null ? historySpending.sort((a,b) => {
             return new Date(b.date) - new Date(a.date)
          }).map((item,indx) =>
          <div className="card" key={indx}>
            <h3>{item.type}</h3>
            <h3>{item.date}</h3>
            <h3>${item.amountSpend}</h3>
          </div>) : <h2 style={{textAlign:'center'}}>Track your expenses ...</h2>}
          
        </div>
        <div className="spendingInputs">
          <div className="spendingInputsWrapper">
        
            <Menu onItemClick={(e) => setTypeOfSpending(e.value)} menuButton={<MenuButton>{typeOfSpending !== "" ? typeOfSpending : "Select Type"}</MenuButton>}>
              <SubMenu label="Me" className="subMenu">
                <MenuItem className="menuItem" value="Bills">Bills</MenuItem>
                <MenuItem className="menuItem" value="Clothes">Clothes</MenuItem>
                <MenuItem className="menuItem" value="Medicine">Medicine</MenuItem>
                <MenuItem className="menuItem" value="Me/Other">Other</MenuItem>
              </SubMenu>
              <SubMenu label="restaurant" className="subMenu">
                <MenuItem className="menuItem" value="Breakfast">Breakfast</MenuItem>
                <MenuItem className="menuItem" value="Lunch">Lunch</MenuItem>
                <MenuItem className="menuItem" value="Dinner">Dinner</MenuItem>
                <MenuItem className="menuItem" value="Coffee">Coffee</MenuItem>
                <MenuItem className="menuItem" value="Restaurant/Other">Other</MenuItem>
              </SubMenu>
              <SubMenu label="House" className="subMenu">
                <MenuItem className="menuItem" value="Rent">Rent</MenuItem>
                <MenuItem className="menuItem" value="Furniture">Furniture</MenuItem>
                <MenuItem className="menuItem" value="Electricity">Electricity</MenuItem>
                <MenuItem className="menuItem" value="Internet">Internet</MenuItem>
                <MenuItem className="menuItem" value="Water">Water</MenuItem>
                <MenuItem className="menuItem" value="Gas">Gas</MenuItem>
                <MenuItem className="menuItem" value="House/Maintenance">Maintenance</MenuItem>
                <MenuItem className="menuItem" value="House/Other">Other</MenuItem>
              </SubMenu>
              <SubMenu label="Car" className="subMenu">
                <MenuItem className="menuItem" value="Fuel">Fuel</MenuItem>
                <MenuItem className="menuItem" value="Traffic violation">Traffic violation</MenuItem>
                <MenuItem className="menuItem" value="car installment">car installment</MenuItem>
                <MenuItem className="menuItem" value="Car/Maintenance">Maintenance</MenuItem>
                <MenuItem className="menuItem" value="Car/Other">Other</MenuItem>
              </SubMenu>
            </Menu>
           
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}  />
            <input type="number" onChange={(e) => setCurrentSpend(e.target.value)}  placeholder="Enter Expenses" />
            <button onClick={() => addSpending(currentSpend,date,typeOfSpending,setDate,setCurrentSpend,setTypeOfSpending)}>
              <GrAdd
                size="60px"
                style={{
                  color: "white",
                  cursor: "pointer",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </button>
          </div>
        </div>
      </div>

 
    </>
  );
};

export default SpendingTracker;
