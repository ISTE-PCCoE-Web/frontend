'use client'

import "./footer.css"

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('#00001870', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('#000001840', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {

  const footerText = {
    fontSize: '15px',
    color: 'white'
  }

  return (
    <div className = 'footerContainer'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <p style={footerText}>© 2023 ISTE-PCCoE Student Chapter. All rights reserved</p>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/iste_pccoe'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/iste-pccoe-student-chapter'} >
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/iste_pccoe/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </div>
  )
}