import Styled from "styled-components";

export const NavStyles = Styled.div`
min-height:15vh;
display:flex;
justify-content:space-between;
align-items:center;
font-size:1rem;
background: #282c34;
padding: 10px;

a{
    font-size:1.2rem;
    
}

h3{
    color: white;
}
`;

export const NavItems = Styled.div`
display: flex;
align-items:center;
justify-content:space-around;
cursor:pointer;
div {
    margin-left:3rem;
    display: flex;
    flex-direction:column;
    position:relative;
    align-items:center;

}

h3 {
    font-size:1rem;
    padding:0.25rem;

}

svg {
    font-size:1.5rem;
}

span {
    background:#ff2626;
    color:white;
    width:1.3rem;
    height:1.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    font-size:0.7rem;
    position:absolute;
    right:-20%;
    top:-20%;
    pointer-events:none;
}

a{
    font-size:1.2rem;
    color: white;
    text-decoration:none;
    margin: 0px 5px;
}
`; 