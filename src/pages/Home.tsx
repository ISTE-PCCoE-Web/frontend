import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  const navItems = [{name: "Home", link: "/home"}, {name: "Events", link: "#"}, {name: "Teams", link: "#"}, {name: "Feedback", link:"#"}]
  return (
    <Flex flexDir="column" className="home" bg="#000116" height="100vh" w="100%" padding="1.5rem 2.5rem">
        <Navbar navLinks = {navItems} color={"#fff"}/>
        <Flex flexDir="column" flexGrow={1} justifyContent="center">
            <Text fontSize="40px" color="#fff" fontWeight="semibold">PCCoE's</Text>
            <Text fontSize="150px" color="#fff" fontWeight="semibold">ISTE</Text>
            <Text fontSize="24px" color="#fff" fontWeight="medium">Welcome to the official website of PCCOE’S ISTE Student Chapter!</Text>
        </Flex>
    </Flex>
  );
}

export default Home