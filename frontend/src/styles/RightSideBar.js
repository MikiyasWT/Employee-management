import Styled from "styled-components"
//background:rgba(0,0,0,0.4);
export const RightSideBarWrapper = Styled.div`
position:fixed;
right:0;
top:0;
height:100%;
width:100%;
background:rgba(0,0,0,0.4);
z-index:100;
display:flex;
overflow-y: hidden;
justify-content:flex-end;


`;   

export const SideBarStyle = Styled.div`
width: 30%;
background:#f1f1f1;
overflow-y: auto;
overflow-x: hidden;
position:relative;
margin:0rem 0rem;
padding:0rem 1rem;
`;

export const AddingForm = Styled.div`
display:flex;
justify-content:space-between;
border-radius:1rem;
overflow: hidden;
background:white;
padding:1rem;
margin:1rem 0rem;
height:auto;


img {
    width: 8rem;
    padding-right: 1rem;
}


`;


export const FormDiv = Styled.div`
width:100%;
div {
    display:flex;
    flex-direction:space-between;
}
margin:1rem;
`;



export const Checkout = Styled.div`

button {
    
    background:var(--primary);
    color:white;
    padding:1rem 2rem;
    margin-top:2rem;
    margin-bottom:2rem;
    width: 100%;
    cursor:pointer;
    border:none;
    
}

h3{
    font-size:1rem;
}
`;


export const AddButton = Styled.div`

button {
    background:green;
    color:white;
    padding:1rem 2rem;
    margin-top:2rem;
    margin-bottom:2rem;
    width: 100%;
    cursor:pointer;
    border:none;
}
`;



