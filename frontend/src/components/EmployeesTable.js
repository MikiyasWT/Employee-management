import styled from 'styled-components'
import {FaFemale,FaMale,FaPowerOff,FaPlusCircle,FaTrash,FaUserCircle,FaUserEdit} from 'react-icons/fa'
import {showSideBar} from "../features/sideBar"
import { useDispatch,useSelector } from "react-redux/es/exports";



const TableWrapper = styled.div`
  position: relative;
  
  top:10%;
  display:flex;
  flex-direction:column;
  margin: 0rem 0rem;
  padding: 2rem 8rem;



  table {
    width:100%;
    border:solid whitegrey 2px;
    border-radius: 25px;
    justify-self: center;
    padding: 1rem 0rem;
    background: #282c34;
  }

  thead,tfoot {
    margin: 3rem 0.5rem;
    background: #282c34;
    color:white;
  }

tfoot > tr > td {
  border-top:solid grey 2px;
}

  tbody > tr > td {
    padding:0.5rem 4rem;
    border-top:solid grey 1px;
    color:white;
  }
`;


export const FormButtons = styled.button`
    background:${props => props.color};
    color:white;
    font-size:1rem;
    padding:1.2rem 0.7rem;
    padding-top: 0.2rem;
    margin:0rem 0rem;
    cursor:pointer;
    border:none;
    border-radius:3px;
    max-height:1vh;
   
   
  `;

//<FontAwesomeIcon  icon="fa-solid fa-user-pen"  />

export default function EmployeesTable(){
  const dispatch = useDispatch();
    return(
      <TableWrapper>
       <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Salary</th>
          <th>Edit</th>
          <th>Remove</th>
          </tr>
        </thead>
          <tbody>
            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>

            <tr>
                <td>abebe</td>
                <td>MALE</td>
                <td>1989898787</td>
                <td>14545</td>
                <td><FormButtons color="blue" onClick={() => {dispatch(showSideBar())}}><span><FaUserEdit /></span></FormButtons></td>
                <td><FormButtons color="red"><span><FaTrash /></span></FormButtons></td>
            </tr>
          </tbody>

         <tfoot>
         <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
         </tfoot> 
        
       
       </table>
      </TableWrapper>
    );
}
