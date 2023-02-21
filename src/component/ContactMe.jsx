import React, { useState } from "react";
import {
    Box,
  Image,
  Text,
  Button,
  Divider,
  IconButton,
  Input,
  Textarea,
  } from '@chakra-ui/react';
  import emailJs from "@emailjs/browser";
  import swal from "sweetalert";
  
  function validate(input) {
    let errors = {};
  
    if (!input.user_name) errors.user_name = "Name is required";
    if (!input.user_email) {
      errors.user_email = "Email is required";
    }
    if (!input.user_message) {
      errors.user_message = "Comment  is required";
    }
  
    return errors;
  }

  export default function ContactMe(){
    const [disableBtns, setDisableBtns] = useState(false);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
      user_name: "",
      user_email: "",
      user_message: "",
    });
    const sendMail = (e) => {
      e.preventDefault();
      emailJs
        .sendForm(
          "service_eznkra2",
          "template_xbzwsx6",
          e.target,
          "2QNPdSWjJiri7bdyW"
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      /*  alert("comment sent successfully"); */
      swal("Comment sent successfully!", {
        buttons: false,
        timer: 2000,
      });
      setInput({
        user_name: "",
        user_email: "",
        user_message: "",
      });
      
    };
    function handleInputChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
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
             CONTACT ME</Text>
             </Box>
             <Box backgroundColor={"rgba(128, 128, 128, 0.171)"} padding={"50px"} paddingRight={"30px"} marginBottom={"15%"} display={"flex"} justifyContent={"center"} >
             <Box width={{base:"100%", md:"80%", lg:"40%"}} display={"grid"}/*  marginLeft={"15%"} */>
            <form onSubmit={sendMail}>
                <Text fontSize={{ base: '9px', md: '12px', lg: '16px' }}>Name</Text>
              <Input
                backgroundColor="white"
                borderColor={"gray"}
                mb="15px"
                placeholder="Name"
                fontSize={{ base: '9px', md: '12px', lg: '13px' }}
                type="text"
                value={input.user_name}
                name="user_name"
                onChange={(e) => handleInputChange(e)}
                width={"100%"}
                
              /> 
              {errors.user_name && (
                <Text fontSize="11px" color="red">
                  {errors.user_name}
                </Text>
              )}
              <Text fontSize={{ base: '9px', md: '12px', lg: '16px' }}>E-mail</Text>
              <Input
                backgroundColor="white"
                borderColor={"gray"}
                mb="15px"
                placeholder="E-Mail"
                fontSize={{ base: '9px', md: '12px', lg: '13px' }}
                type="email"
                value={input.user_email}
                name="user_email"
                onChange={(e) => handleInputChange(e)}
                width={"100%"}
              />
              {errors.user_email && (
                <Text fontSize="11px" color="red">
                  {errors.user_email}
                </Text>
              )}
                <Text fontSize={{ base: '9px', md: '12px', lg: '16px' }}>Comment</Text>
              <Textarea
                backgroundColor="white"
                borderColor={"gray"}
                
                placeholder="Comment... "
                fontSize={{ base: '9px', md: '12px', lg: '13px' }}
                type="text"
                value={input.user_message}
                name="user_message"
                onChange={(e) => handleInputChange(e)}
                
              />
              {errors.user_message && (
                <Text fontSize="11px" color="red">
                  {errors.user_message}
                </Text>
              )}
              {errors.user_name ||
                errors.user_email ||
                errors.user_message ||
                input.user_name === "" ? (
                <Button
                  mt={"10px"}
                  size={{base:"xs", lg:"sm"}}
                  select="true"
                  type="submit"
                  colorScheme='twitter'
                  justifyContent={"center"}
                  marginLeft={"1%"}
                  isDisabled={!disableBtns? true : false}
                >
                  Submit
                </Button>
              ) : (
                <Button mt={"10px"}   size={{base:"xs", lg:"sm"}} type="submit"  colorScheme='twitter' >
                  Submit
                </Button>
              )}
            </form>
          </Box>
          <Box display="grid"  marginLeft={'3%'} marginTop={'10%'} width={["0%", "50%", "25%", "10%"]}> 
    <Image src="https://media1.giphy.com/media/Wbuu62FNXvEm2LeD1h/200.webp?cid=ecf05e47xs5sfvid60798zt3pm6a2d2yhyyhi2f77dm7k86o&rid=200.webp&ct=s"
    >
    </Image>
    </Box>
             </Box>
   
            </Box>
        </Box>
    )
  }