import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent, DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Input, Stack, useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from 'shared/assets/img/logo.svg';
import navStyles from "./navbar.module.css";
import styled from 'styled-components'
import Styles from "./styles";

const Links = [
  {
    name: "Drives",
    path: "/",
  },
  {
    name: "SDK",
    path: "/sdk",
  },
  {
    name: "Univ. Gertec",
    path: "/univ/",
  },
  {
    name: "Suporte",
    path: "/suport",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <div className={navStyles.mobileNav}>
      <Styles.Container>
        <Styles.MainHeader>

          <Styles.MainLogo>
            
               <Styles.BoxLogo>

                       <Styles.SvgLogo/>

               </Styles.BoxLogo>
            
          </Styles.MainLogo>

          {/* <HStack spacing={8} alignItems={"center"}>
            <Box
              fontWeight={700}
            >
                 <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
                  <Input
                    type={'text'}
                    placeholder={''}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    bg={useColorModeValue('gray.100', 'gray.600')}
                    rounded={'full'}
                    border={0}
                    _focus={{
                      bg: useColorModeValue('gray.200', 'gray.800'),
                      outline: 'none',
                    }}
                  />
                  <Button
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    flex={'1 0 auto'}
                    _hover={{ bg: 'blue.500' }}
                    _focus={{ bg: 'blue.500' }}>
                    Subscribe
                  </Button>
                </Stack>
            </Box>     
          </HStack> */}

          <Styles.MainMenu>
              <Styles.NavMenu>
                <Styles.LinkMenu>
                  {Links.map(({ name, path }) => (
                    <NavLink key={path} path={path}>
                      {name}
                    </NavLink>
                  ))}
                </Styles.LinkMenu>
              </Styles.NavMenu>

              <Styles.BoxButton >
              <Styles.LoginButton>
                  Entrar
              </Styles.LoginButton>

             <Styles.IconHamburger
                // size={"md"}
                // background={'blue'}
                //fontSize={'30'}
                icon={isOpen ? <CloseIcon/> : <Styles.HamburgerComponents  />}
                //aria-label={"Open Menu"}
                // display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              </Styles.BoxButton>
          </Styles.MainMenu>
        </Styles.MainHeader>  

      <Styles.NavMobile
        isOpen={isOpen}
        // placement='right'
        onClose={onClose}
        //finalFocusRef={btnRef}      
      >
        <DrawerOverlay />
        <Styles.NavMobContent>
          
          <Styles.NavCloseButton />
          <Styles.BoxContentNav > 
          
          <DrawerHeader>
            
          <Box>
              <Styles.ButtonGroupNav>
                <Styles.ButtonLoginNav
                  // size='md'
                  // borderRadius={'27px'}
                  // fontSize={'18px'}
                  // height='50px'
                  // width='174px'
                  // //border='2px'
                  // //borderColor='green.500'
                  // color={'#fff'}
                  // background={'#007BFF'}
                >
                  Entrar
                </Styles.ButtonLoginNav>
              </Styles.ButtonGroupNav>

                <Styles.BoxButtonGroup>
                    <ButtonGroup>
                           <Styles.InputGroup/>
                    </ButtonGroup>
                </Styles.BoxButtonGroup>
        </Box>

          </DrawerHeader>
          
          <DrawerBody>  
            <Styles.BoxDrawerBody >
              <Styles.StackNav>
              {Links.map(({ name, path }) => (
                    <NavLink key={path} path={path}>
                      {name}
                    </NavLink>
                  ))}
              </Styles.StackNav >
            </Styles.BoxDrawerBody >
          </DrawerBody>
          </Styles.BoxContentNav>
        </Styles.NavMobContent>
      </Styles.NavMobile>  
      </Styles.Container>
    </div>
  );
}