import { useDispatch ,useSelector} from "react-redux/es/exports";
import {RightSideBarWrapper,SideBarStyle,AddingForm,FormDiv} from "../styles/RightSideBar"
import {showSideBar} from "../features/sideBar"
import styled from 'styled-components'

const FormButtons = styled.button`
    background:${props => props.color};
    color:white;
    font-size:1rem;
    padding:1rem 0rem;
    padding-bottom:2rem;
    margin:1rem 1rem;
    width: 40%;
    cursor:pointer;
    border:none 2px;
    border-radius:3px;
    max-height:3vh;
   
   
  `;

const ButtonsContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
margin: 0px 0px;
padding:0px 0px;
`;



const InputDiv = styled.div`

width:100%;
padding:0.5rem 0.5rem;
display:flex;
flex-direction:column;
margin-bottom:0.5px;

div {
  margin-bottom: 0.5rem;
}

div > label {
  font-family:'Poppins', sans-serif;
  font-size:17px;
}

div > Input , div > select {
  min-height: 2.5rem;
  width:100%;
  margin:0rem 0rem;
  border:solid lightgray 2px;
  border-radius:5px;

  &:focus {
  border-color:solid lightgreen 5px;
  }

}

`;

const Title = styled.div`
margin: 0rem 2rem;
justify-items:center;

h3 {
  font-family:'Poppin',sans-serif;
  font-size: 20px;
}
`


export default function SideBar(){

    const dispatch = useDispatch();
    const sidebarStatus = useSelector((state) => state.showSideBar.value)
    console.log(sidebarStatus)
    return( 
    <RightSideBarWrapper onClick={() => {dispatch(showSideBar())}}>
        
        <SideBarStyle onClick={(e)=>e.stopPropagation()}>          
           
           <Title>
             <h3>Add an Employee</h3>
           </Title>
            
        <AddingForm>

            <form method="post">
             <InputDiv>
                <div>
                  <label>Employee Name</label>
                </div>
                <div>
                  <input type="text" placeholder="Name" required/>
                </div>
             </InputDiv>  

            <InputDiv>
                <div>
                  <label>Date of Birth</label>
                </div>
                <div>
                  <input type="Date" placeholder="Name" required/>
                </div>
             </InputDiv>


            <InputDiv>
                <div>
                  <label>Gender</label>
                </div>
                <div>

                
                <select required defaultValue='male'>Gender
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
             </InputDiv>


            <InputDiv>
                <div>
                   <label>Salary</label>
                </div>
                <div>
                   <input type="Number" placeholder="Name" required/>
                </div>
             </InputDiv>

             <ButtonsContainer>
                  <FormButtons type="reset" color="red" >reset</FormButtons>
                  <FormButtons type="submit" color="green">Add</FormButtons>
             </ButtonsContainer>



                
              
            </form>

        </AddingForm>
        </SideBarStyle>
        
    </RightSideBarWrapper>
  );
}
