 import React from "react";
import NavBar from "./NavBar";
import Tech from './Tech';
import Carousel1 from './Carousel1'
import About from "./About";
import {
   useColorMode,
   Switch,
   Flex,
   Button,
   IconButton, 
   Link,
   Image,
   Box
 } from '@chakra-ui/react'
import Projects from "./Projects";
import Footer from "./Footer";
import ContactMe from "./ContactMe";


export default function Home (){
 return (
    
    <Box>
    <NavBar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Box display="grid"  justifyContent={"center"} marginTop={'2%'} marginLeft={["42%", "17%", "2%"]} width={["25%", "75%", "15%", "15%"]}> 
    <Image src="https://media4.giphy.com/media/StF8grqNK8fOPstPLo/200w.webp?cid=ecf05e47m3xk6ahsyr6tps0yhvaw29uvyyuxjlir3y1fwgp7&rid=200w.webp&ct=s"
    >
    </Image>
    </Box>
    <Carousel1/>
    <About/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </Box>

 )
} 