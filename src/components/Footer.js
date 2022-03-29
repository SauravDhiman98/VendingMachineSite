import React from "react";
import styled from "styled-components";


function Footer()
{
  return(
    <Container>
      <Contact>
        Contact Us: 
      </Contact>
      <Adress>
        Email123@gmail.com
      </Adress>
    </Container>
  )
}

const Container = styled.div`
   top: 94%;
   left:0;
   right:0;
   background: rgb(189, 213, 49);
   position:fixed;
   height:50px;
   display:flex;
   flex-direction: row;
   align-items:center;
   justify-content: center;
`

const Contact = styled.div`
   color: black;
   font-weight: 550;
   animation: animateDown 1.5s infinte; 
`
const Adress = styled.div`
 color: black;
 font-weight:800;
`
export default Footer;