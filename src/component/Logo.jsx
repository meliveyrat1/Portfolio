import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import imgLogo from './media/LogoNegro.png'

export default function Logo(props) {
  return (
    <Box {...props}>
    {/*   <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text> */}
      <Image src={imgLogo} width={"300px"}>

      </Image>
    </Box>
  );
} 