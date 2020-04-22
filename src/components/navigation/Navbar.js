import React from 'react';
import PCnavbar from './PCnavbar'
import MobileNavbar from './MobileNavbar'
import styled from 'styled-components'
 
const Stylenavbar=styled.div `


`
const Navbar = () => {
    return (
        <Stylenavbar>
         <PCnavbar />
<MobileNavbar />
        </Stylenavbar>
    );
};

export default Navbar;