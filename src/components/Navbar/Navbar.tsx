import { Box, Flex, Img, Button, Show } from '@chakra-ui/react';
import React from 'react';
import Logo from "../../img/ISTELogo.png";
import {useNavigate} from "react-router-dom" 

const Navbar = ({color, navLinks, ...props}:any) => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="space-between" w="100%" {...props}>
        <Img src={Logo} w="80px" alt="logo"/>
        <Show above="md">
          <Flex gap="2rem">
              {navLinks.map((nav : any) => {
                  return (
                      <Button variant="link" color={color} onClick={() => {navigate(nav.link)}}>{nav.name}</Button>
                  );
              })}
          </Flex>
          <Button size="md" padding="0.5rem 1rem" mt="1rem" bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)" _hover={{bg: "linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"}} borderRadius="1rem" onClick={() => navigate("/events")}>
            View Events
          </Button>
        </Show>
    </Flex>
  )
}

export default Navbar