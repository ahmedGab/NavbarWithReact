import React from 'react';
import styled from 'styled-components'
import imgSimplon from './images/s.png'
import Listes from './Listes'



const StylePcnavbar = styled.nav `
display:flex;
flex-flow: nowrap;
justify-content:space-between;
align-items:center;
background-color:rgba(0,0,0,0.8);
color:white;
*{
	margin: 0;
	padding: 0;
  box-sizing:border-box;
}
.listes{
    margin-right:20px;
    display:flex;
    flex-flow: nowrap;
    justify-content:space-between;
    list-style-type:none;  
width:600px     
}
.liste{
    font-size:25px;
    font-family:'Fredericka the Great', cursive;
    cursor: pointer;
    padding: 7% 3.5%;

}
.liste:hover{
	background-color: rgba(0,0,0,0.2);
    border-top: 3px solid red;
    height:auto;
}
.img-simplon{
    margin:10px 0 10px 25px; 
    border-radius:50%;
    width:100px;
    box-shadow: 2px 2px  rgba(221, 194, 194, 0.452);

}
@media screen and (min-width: 770px) and (max-width: 900px) {
    .listes{
        width:500px;
 }
 .liste{
     font-size:20px;
 }

}
@media screen and (min-width: 300px) and (max-width: 769px) {
  .listes{
      display:none;
  }
}


`

const Navbar = () => {
    return (
        <StylePcnavbar>
    <img src ={imgSimplon} className="img-simplon"/> 

   <Listes />


        </StylePcnavbar>
    
    );
};

export default Navbar;