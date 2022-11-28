
import { useState } from "react";
import {NavStyles, NavItems} from "../styles/NavStyles"
import SideBar from "./RightSideBar";


export default function Nav(){
  const [showBar,setShowBar] = useState(false);
  
    return(
        <NavStyles>
          <h3>Employee Management </h3>
          <NavItems>
            
            <a href="https://reactjs.org">Add Employee</a>
            <a href="https://reactjs.org">Logout</a>
            <button onClick={()=>showSideBar((prev) => (!prev))}>Add</button>
          </NavItems>
         
          {
            showSideBar && <SideBar />
          }
          
        </NavStyles>
    );
}