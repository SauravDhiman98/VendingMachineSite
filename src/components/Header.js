
import React, {useState} from "react";
import styled from "styled-components";
import bootstrap from "bootstrap";



function Header(){
  const [show,  setshow] = useState(false)
  const [show1,  setshow1] = useState(false)
  const [show2,  setshow2] = useState(false)
  const [show3,  setshow3] = useState(false)
  const arr = ["/Images/hm1.jpg", "/Images/hm2.jpg", "/Images/hm3.jpg"];
  
    return(
      <Container>
              <WrapImage>
              <Logo src="/Images/vending-machine-svgrepo-com.svg" />
              </WrapImage>
              <MenuItem>
                 <VM onMouseLeave={() => setshow(false)}>
                     <button id="btn" onClick={() => setshow(true)}> Our Products</button>

                     {
                        show ? <ul>
                          <li><a  href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a  href="#">Vending Machine</a></li>
                        </ul> : null


                     }
                 </VM>
                
                 <VM1 onMouseLeave={() => setshow1(false)}>
                 <button id="btn" onClick={() => setshow1(true)}>About</button>

{
   show1 ? <ul>
    <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
   </ul> : null


}
                 </VM1>
                 <VM2 onMouseLeave={() => setshow2(false)}>
                 <button id="btn" onClick={() => setshow2(true)}> Financing</button>

{
   show2 ? <ul>
     <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
   </ul> : null


}
                 </VM2>
                 <VM3 onMouseLeave={() => setshow3(false)}>
                 <button id="btn" onClick={() => setshow3(true)}> Promotions</button>

{
   show3 ? <ul>
     <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
                          <li><a href="#">Vending Machine</a></li>
   </ul> : null


}
                 </VM3>
                

                
              </MenuItem>
      </Container>
    );
}


export default Header;

const Container = styled.div`
top: 0;
left: 0;
right: 0;
height: 70px;
position:fixed;
background: rgba(0,0,0, .5);
display:flex;
flex-direction: row;
align-items:center;


`

const WrapImage = styled.div`
  margin-left: 250px;
`
const Logo = styled.img`
 height: 40px;
 margin-top: 10px;
 margin-left:20px;
`

const MenuItem = styled.div`
  
`

const VM = styled.div`
  
  margin-left: 10vw;
  position:fixed;
  
`




const VM1 = styled.div`
color:white;
margin-left: 25vw;
position:fixed;
`
const VM2 = styled.div`
color:white;
margin-left: 35vw;
position:fixed;
`
const VM3 = styled.div`
color: white;
margin-left: 48vw;
position:fixed;
`


