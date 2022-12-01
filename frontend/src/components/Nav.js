
import { useState } from "react";
import {NavStyles, NavItems} from "../styles/NavStyles"
import SideBar from "./RightSideBar";
import {showSideBar} from "../features/sideBar"
import { useDispatch,useSelector } from "react-redux/es/exports";

export default function Nav(){
  const isShowSideBarTrue = useSelector((state) => state.showSideBar.value)
  const dispatch = useDispatch();
  return(
        <NavStyles>
          <h3>Employee Management </h3>
          <NavItems>
            
            <a href="https://reactjs.org" >Add Employee</a>
            <a>Logout</a>
            <button onClick={() => {dispatch(showSideBar())}}>Add</button>
          </NavItems>
         
          {
            isShowSideBarTrue && <SideBar />
          }
          
        </NavStyles>
    );
}

