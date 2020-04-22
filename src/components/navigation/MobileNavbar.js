import React from 'react';
import styled from 'styled-components'
import Listes from './Listes'
import imgSimplon from './images/s.png'



const StyleMobilenavbar = styled.nav `
.listes{
    display:none;
}


@media screen and (min-width: 300px) and (max-width: 769px) {
    margin:-25px;
width:200px;
background-color:rgba(0,0,0,0.8);

    .listes{
        font-size:25px;
    font-family:'Fredericka the Great', cursive;
    margin-left:20px;
    display:flex;
    flex-flow: column nowrap;
    justify-content:space-around;
    list-style-type:none;  
    height:320px; 
    color:white 
}

}
`


const MobileNavbar = () => {
    return (
        <StyleMobilenavbar>
        
            <Listes />
            
        </StyleMobilenavbar>
    );
    
};


export default MobileNavbar;