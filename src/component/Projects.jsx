import React from "react";
import {
    Box,
    Image,
    Text,
    Link
  } from '@chakra-ui/react';
  import mcburger from './media/MCBURGER.png';
  import food from './media/FOODAPP.png';
  import dogs from './media/DOGSAPP.png'


  export default function Projects(){

    return(
        <Box>
            <Box>
              <Box   
              shadow={"lg"}
              borderBottom="1px solid gray" 
              width={"50%"} 
              marginLeft={"25%"}
              marginBottom={"3%"}
              marginTop={"10%"}
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
             PROJECTS</Text>
             </Box>
             <Box /* backgroundColor={"rgba(128, 128, 128, 0.171)"} */
               padding={"10px"}
               marginBottom={"13%"}
               display={"flex"}
               justifyContent={"space-between"}
               width={"100%"}
               >
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'} width={[ "50%", "30%"]} padding={["3%","2%"]} boxShadow={"xl"}>
                  <Image src={mcburger} width={"100%"} height={"90%"} display={"flex"} justifyContent={"center"}/>
                  <Link fontSize={{ base: '12px', md: '16px', lg: '24px' }}  justifyContent={"center"} textAlign={"center"} href="https://test-deploy-topaz-nine.vercel.app/" target="_blank"
              rel="noopener noreferrer" >
                    Link
                  </Link>
                </Box>
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'} width={[ "50%", "30%"]} padding={["3%","2%"]} boxShadow={"xl"}>
                  <Image src={food} width={"100%"} height={"90%"} display={"flex"} justifyContent={"center"}/>
                  <Link fontSize={{ base: '12px', md: '16px', lg: '23px' }}  justifyContent={"center"} textAlign={"center"} href="https://github.com/meliveyrat1/Pi-food" target="_blank"
              rel="noopener noreferrer">
                    Repo
                  </Link>
                </Box>
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'} width={[ "50%", "30%"]} padding={["3%","2%"]} boxShadow={"xl"}>
                  <Image src={dogs} width={"100%"} height={"90%"} display={"flex"} justifyContent={"center"}/>
                  <Link fontSize={{ base: '12px', md: '16px', lg: '23px' }}  justifyContent={"center"} textAlign={"center"} href="https://github.com/meliveyrat1/Dogs-App" target="_blank"
              rel="noopener noreferrer">
                    Repo
                  </Link>
                </Box>
               </Box>
             </Box>
        </Box>
    )

  }