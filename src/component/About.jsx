import React from "react";
import {
    Box,
    Image,
    Text
  } from '@chakra-ui/react';
  import profile from './media/profile-pic (1).png'
  
  

  export default function About(){
    return(
        <Box>
            <Box>
              <Box   
              shadow={"lg"}
              borderBottom="1px solid gray" 
              width={"50%"} 
              marginLeft={"25%"}
              marginBottom={"3%"}
              marginTop={["-25%","-15%","10%"]}
              flexDir="column"
              align="center"
              justify="flex-end"
              >
                
            <Text fontSize={{ base: '16px', md: '30px', lg: '46px' }} 
             fontFamily={'Georgia, Times, serif'} 
             display={"grid"} 
             justifyContent={"center"}
             marginTop={"-5%"}
             marginBottom={"2%"}
             >
             ABOUT ME</Text>
             </Box>
             <Box backgroundColor={"rgba(128, 128, 128, 0.171)"} padding={"50px"} paddingRight={"30px"} marginBottom={"15%"} display={"flex"} justifyContent={"center"} >
              <Box display={"grid"} width={["40%","20%"]} >
               <Image src={profile} boxShadow={"dark-lg"} borderRadius={"200px"} marginLeft={["-55%", "0%"]} /> 
               </Box>
                <Box backgroundColor={'rgba(159, 138, 172, 0.281)'} width={{base:"120%", md:"80%", lg:"50%"}} 
                padding={"15px"}
                marginLeft={["-13%", "3%"]} 
                display={"grid"}
                borderRadius={"5px"}
                boxShadow={"xl"}>
                  <Text fontSize={{ base: '9.5px', md: '12px', lg: '16px' }}>
I have experience working on FullStack projects developed in the PERN stack with Java Script, Node js, PostgreSQL, Sequelize, Express, React, Redux, HTML, CSS, ChakraUI, working on projects with Scrum methodology. I believe that I can bring a lot of my personality, creativity and knowledge as a developer to companies that are looking for a Full-Stack Web Developer. Something that can complement my skills is having been chosen in a soft skills training program as a Teaching Assistant at Soy Henry for two months, culminating with a Team Work insignia from the students and teammates. For my professional background in gastronomy for 15 years I have good planning skills, problem solving, working under pressure, efficiency to achieve objectives and creativity.</Text>
                </Box>
                <Box display="grid"  marginLeft={'3%'} marginTop={'0%'} width={["0%", "50%", "25%", "10%"]}> 
    <Image src="https://media1.giphy.com/media/BEzNEGpSITg52/giphy.webp?cid=ecf05e4741mrhh8xoztf2zwp2tmnd90ypiz3z8x6i4j8qa3m&rid=giphy.webp&ct=s"
    >
    </Image>
    </Box>
             </Box>
   
            </Box>
        </Box>
    )
  }