
import React from "react";
import styled from "styled-components";
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';


function Section(){

    return(
   
    <Container>
         <Flip top>
         <WrapText1>
             <h2>MEET YOUR PROFIT MAKERS</h2>
         </WrapText1>
         </Flip>

         
         <WrapText2>
            <h1> Your Smart, factory direct
             Vending Machine Supplier.</h1>
         </WrapText2>
         
         <Flip bottom>
         <Wraptext3>
              <p>
                Vending.com is the "factory direct supplier" of different types
                 of best quality vending machines to meet the needs of all bussinesses.
              </p>
         </Wraptext3>
         </Flip>
         <Jump>
           
         <Button id="orderbtn">
          <p id="ptag">View Order</p>
        </Button>
        </Jump>
        
    </Container>
  
    );
}

export default Section;


const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-size:cover;
   background-position: center;
   background-repeat: no-repeat;
   background: transparent;
   display:flex;
   flex-direction: column;
   position:fixed;

`

const WrapText1 = styled.div`
  
  color: rgba(255,247,247, .8);
  padding-top: 25vh;
  padding-left: 10vw;
  
 
`

const WrapText2 = styled.div`
   width: 40vw;
   height: 15vh;
   margin-top: 20px;
   padding-left: 10vw;  
   color: darkorange;
`
const Wraptext3 = styled.div`
  width:55vw;
  padding-top: 8vh;
  padding-left:10vw;
  font-size: 3vh;
  font-weight:600;
  color: green;
`

const Button = styled.div`
background-color:rgb(189, 213, 49);
height: 40px;
width: 256px;
color:black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin-top: 5vh;
margin-left: 15vw;
overflow-x: hidden;

font-weight: 600;
box-shadow: 0px 3px 2px black;
`

