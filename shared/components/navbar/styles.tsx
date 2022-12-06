import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Button, ButtonGroup, chakra,  Drawer,  DrawerCloseButton,  DrawerContent,  Flex,  HStack,  IconButton,  Input,  useColorModeValue } from '@chakra-ui/react';
import styled from 'styled-components';
import Logo from 'shared/assets/img/logo.svg';

 const Container = chakra(Box, {
	// attach style props
	  baseStyle: {
	  px: '4',
	  py: '5',
	  rounded: 'sm',
	  shadow: 'lg',
	  //bg:useColorModeValue('red', 'pink'),
	  bg: 'silver'
	},
  })


  const MainHeader = chakra(Flex, {
	// attach style props
	  baseStyle: {
		h: 20,
		alignItems:"center",
		justifyContent: "space-between",
		bg: 'pink'
	},
  })

  const MainLogo = chakra(HStack, {
	// attach style props
	  baseStyle: {
		space: '8',
	    alignItems:"center"
	},
  })

  const BoxLogo = chakra(Box, {
	// attach style props
	  baseStyle: {
		fontWeight:700,
		fontSize:25
	},
  })
  

  const SvgLogo = chakra(Logo, {
	// attach style props
	  baseStyle: {
		fontSize:'70',
		background:'silver'
	},
  })

  const MainMenu = chakra(Flex, {
	// attach style props
	  baseStyle: {
		alignItems:'center',
		background:'orange'
	},
  })

  const NavMenu = chakra(HStack, {
	// attach style props
	  baseStyle: {
		mr: 4,
		alignItems: 'center',
		bg: 'red'
	},
  })

  const LinkMenu = chakra(HStack, {
	// attach style props
	  baseStyle: {
		spacing:'4',
		bg: 'purple', 
		display:{ 
			base: "none", 
			md: "flex" 
		}},
  })

  const BoxButton = chakra(HStack, {
	// attach style props
	  baseStyle: {
		mr: 4,
		alignItems:'center',
		bg: 'black'
	},
  })


  const LoginButton = chakra(Button, {
	// attach style props
	  baseStyle: {
		size: 'md',
        borderRadius: '27px',
        h:'50px',
        w: '93px',
        color:'#fff',
        bg: '#007BFF',
		_hover:{
			bg: 'green',
			color: '#fff',
		  },
	},
  })

  const IconHamburger = chakra(IconButton, {
	// attach style props
	  baseStyle: {
		size:"md",
        bg:'blue',
		arialabel: 'Open Menu',
		display:{ 
			md: "none"
		},
	
	},
  })


  const HamburgerComponents = chakra(HamburgerIcon, {
	// attach style props
	  baseStyle: {
		fontSize:'30px'
		
	},
  })


  const NavMobile = chakra(Drawer, {
	// attach style props
	  baseStyle: {
		placement:'right'
		
	},
  })

  const NavMobContent = chakra(DrawerContent, {
	// attach style props
	  baseStyle: {
		background:'#103F68',
		maxWidth: '277px'
		
	},
  })

  const NavCloseButton = chakra(DrawerCloseButton, {
	// attach style props
	  baseStyle: {
		color:'#fff',
		fontSize: '20px',
		top:'25px',
		left:'20px',
		right:'21px' 	
	},
  })

  const BoxContentNav = chakra(Box, {
	// attach style props
	  baseStyle: {
		bg:'yellow',
		ml:'45px'
		
	},
  })

  const ButtonGroupNav = chakra(ButtonGroup, {
	// attach style props
	  baseStyle: {
		top:'13px'
		
	},
  })

  const ButtonLoginNav = chakra(Button, {
	// attach style props
	  baseStyle: {
		size:'md',
        borderRadius:'27px',
        fontSize:'18px',
        h:'50px',
        w:'174px',
        //border='2px'
        //borderColor='green.500'
        color:'#fff',
        background:'#007BFF'
		
	},
  })


  const BoxButtonGroup = chakra(Box, {
	// attach style props
	  baseStyle: {
		pt:4
		
	},
  })

  const InputGroup = chakra(Input, {
	// attach style props
	  baseStyle: {
		w:'178px',
		bg:'#fff',
		placeholder:'Pesquisar'
		
	},
  })

  const BoxDrawerBody = chakra(Box, {
	// attach style props
	  baseStyle: {
		display:{ 
			md: "none"
		},
		
	},
  })

  const StackNav = chakra(Box, {
	// attach style props
	  baseStyle: {
		as:'nav',
		spacing:'8',
		color:'#007BFF',
		fontSize:20,
		fontWeight:'600'
		
	},
  })

  //as={'nav'} spacing={4} color={'#007BFF'} fontSize={'20px'} fontWeight={'600'} 
 



// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Container,
	MainHeader,
	MainLogo,
	BoxLogo,
	SvgLogo,
	MainMenu,
	NavMenu,
	LinkMenu,
	BoxButton,
	LoginButton,
	IconButton,
	IconHamburger,
	HamburgerComponents,
	NavMobile,
	NavMobContent,
	NavCloseButton,
	BoxContentNav,
	ButtonGroupNav,
	ButtonLoginNav,
	BoxButtonGroup,
	InputGroup,
	BoxDrawerBody,
	StackNav
	 
};