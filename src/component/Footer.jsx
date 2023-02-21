import React, { useState } from "react"

import {
  Box,
  Flex,
  Text,
  IconButton,
  Image
  
} from "@chakra-ui/react";
import {
 
FaTwitter,
FaLinkedinIn,
FaGithub,
FaEnvelope
} from "react-icons/fa";
import imgLogoNegro from "./media/LogoNegro.png"



export default function Footer() {
  
  return (
    <Box className="footer-main-super">
        
      <Box className="footer-container" display="flex" justifyContent="center" mt="10px" backgroundColor={"gray"} >
        <Box display={"flex"} justifyContent={"center"} width={"75px"} >
      <Image src={imgLogoNegro} width={["60px","100px"]} marginRight={"60%"}/>
        </Box>
        <Box className="enriquilo1111"  >
          <Flex
          display={'flex'}
          justifyContent="center"
          alignItems={"center"}
          marginRight={"20%"}
          marginTop={"9%"}
          
        >
            <a
              href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" color="#0077B5"  icon={<FaLinkedinIn />} />
            </a>
            <a
              href="https://github.com/meliveyrat1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" color="#000000" icon={<FaGithub />} />
            </a>
            <a
              href="https://twitter.com/meliveyrat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" color="twitter" icon={<FaTwitter />} />
            </a>
            <a href="mailto: meliveyrat@gmail.com"
               target="_blank"
               rel="noopener noreferrer">
             <IconButton m="5px" color="#DB4437" icon={<FaEnvelope/>} />
            </a>
        </Flex>
        </Box>
      </Box>
      <Box className="copy-container" backgroundColor="gray" h="22px" textAlign="center" fontSize={"13px"}>
        <Text color="white">© All Rights Reserved 2023</Text>
      </Box>
    </Box>
  );
}