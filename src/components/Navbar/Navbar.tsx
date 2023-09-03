import { Box, Flex, Img, Button } from '@chakra-ui/react';
import React from 'react';
import Logo from "../../img/ISTELogo/ISTELogo.png";
import {useNavigate} from "react-router-dom" 

const Navbar = ({color, navLinks, ...props}:any) => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="space-between" w="100%" {...props}>
        <Img src={Logo} w="80px" alt="logo"/>
        <Flex gap="2rem">
            {navLinks.map((nav : any) => {
                return (
                    <Button variant="link" color={color} onClick={() => {navigate(nav.link)}}>{nav.name}</Button>
                );
            })}
        </Flex>
    </Flex>
  )
}

export default Navbar