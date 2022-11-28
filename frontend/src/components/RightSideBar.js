import Reac, {useState} from "react"
import { useDispatch } from "react-redux/es/exports";
import {RightSideBarWrapper,SideBarStyle,AddingForm,AddButton,FormDiv} from "../styles/RightSideBar"
export default function SideBar(){
    //const {cartItems,setShowCart,onAdd,onRemove,totalPrice} = useStateContext();
    const [showSideBar,setShowSideBar] = useState(false);
    const dispatch = useDispatch();

    return( 
    <RightSideBarWrapper onClick={() => {dispatch(showSideBar)}}>
        
        <SideBarStyle>          
           <h3>Add an Employee</h3>
            
        <AddingForm >

            <form method="post">
             <FormDiv>
                <div>
                  <label>Employee Name</label>
                </div>
                <div>
                  <input type="text" placeholder="Name" required/>
                </div>
             </FormDiv>  

            <FormDiv>
                <div>
                  <label>Date of Birth</label>
                </div>
                <div>
                  <input type="Date" placeholder="Name" required/>
                </div>
             </FormDiv>


            <FormDiv>
                <div>
                  <label>Gender</label>
                </div>
                <div>

                
                <select required >Gender
                    <option value="male" selected >Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
             </FormDiv>


            <FormDiv>
                <div>
                   <label>Salary</label>
                </div>
                <div>
                   <input type="Number" placeholder="Name" required/>
                </div>
             </FormDiv>

             <AddButton>
                  <button>Add</button>
             </AddButton>



                
              
            </form>

        </AddingForm>
        </SideBarStyle>
        
    </RightSideBarWrapper>
  );
}
