import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from './Logo'
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  
} from "react-icons/fa";
import imgLogo from './media/LogoBlanco.png';
//import imgLogo from './media/LogoNegro.png'


export default function NavBar(){
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
       position="fixed"
       align="center" 
       zIndex={1}
       w={"100%"}
       borderTop="1px solid gray" shadow={"lg"}
       borderBottom="1px solid gray"
       padding="0px"
       /* backgroundColor={'rgb(139, 38, 197)'} */
       backgroundColor={'rgb(159, 138, 172)'}
      >
        {/* Desktop */}
        <Image src={imgLogo} width={["60px","100px"]} marginLeft={"2%"}></Image>
        <Flex
          display={['none', 'none', 'flex','flex']}
          marginLeft={["34%","34%", "34%","65%", "75%"]}
          
        >
            <a
              href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaLinkedinIn />} />
            </a>
            <a
              href="https://github.com/meliveyrat1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaGithub />} />
            </a>
            <a
              href="https://twitter.com/meliveyrat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaTwitter />} />
            </a>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          marginLeft={["12px","35px","280px"]}
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"

        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end" backgroundColor={"black"}>
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            justifyContent={"center"}
            marginRight={"10%"}
            
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
          backgroundColor={"black"}
        >
          <a
              href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaLinkedinIn />} />
            </a>
            <a
              href="https://github.com/meliveyrat1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaGithub />} />
            </a>
            <a
              href="https://twitter.com/meliveyrat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton m="5px" colorScheme="twitter" icon={<FaTwitter />} />
            </a>
        </Flex>
      </Flex>
    </Flex>
  )
}