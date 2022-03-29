
import React  from "react";
import styled from "styled-components"
import Section from "./Section";
import Header from "./Header";
import MoveImage from "./movingImages";
import Footer from "./Footer";

function Home(){

    return(
        <Container>
            <Section>
           
            </Section>
            <MoveImage>
    
    </MoveImage>
            
            <Header>

            </Header>
            
 
      <Footer>
          
      </Footer>
        </Container>

    )
}

export default Home;

const Container = styled.div`
background-size:cover;
background-position: center;
background-repeat: no-repeat;

height: 100vh;
width: 100vw; 
`