import {
  Box,
  Flex,
  Img,
  Button,
  Show,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../img/ISTELogo/ISTELogo.png";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = ({ color, ...props }: any) => {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", link: "/home" },
    { name: "Teams", link: "/team" },
    { name: "Feedback", link: "/feedback" },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      {...props}
      alignItems="center"
    >
      <Img src={Logo} w="80px" alt="logo" />
      <Show above="md">
        <Flex gap="2rem">
          {navLinks.map((nav: any) => {
            return (
              <Button
                variant="link"
                color={color}
                onClick={() => {
                  navigate(nav.link);
                }}
              >
                {nav.name}
              </Button>
            );
          })}
        </Flex>
        <Button
          size="md"
          padding="0.5rem 1rem"
          mt="1rem"
          bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
          _hover={{
            bg: "linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)",
          }}
          borderRadius="1rem"
          onClick={() => navigate("/events")}
        >
          View Events
        </Button>
      </Show>
      <Show below="md">
        <Button variant="unstyled" onClick={onOpen}>
          <HamburgerIcon color="whiteAlpha.900" boxSize="1.5rem" />
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="50%"
            backdropBlur="2px"
          />
          <DrawerContent
            background={"hsla(237,100%,4%,1)"}
            backdropBlur="50px"
            h="100dvh"
          >
            <DrawerCloseButton
              color="#fff"
              size="1.5rem"
              right="2rem"
              top="2rem"
            />
            <DrawerHeader
              color="#fff"
              textAlign="center"
              fontSize="28px"
              fontWeight="semibold"
              my="3rem"
            >
              ISTE PCCoE
            </DrawerHeader>

            <DrawerBody>
              <Stack>
                {navLinks.map((nav: any) => {
                  return (
                    <Button
                      variant="link"
                      color={color}
                      onClick={() => {
                        navigate(nav.link);
                      }}
                      mb="2rem"
                    >
                      {nav.name}
                    </Button>
                  );
                })}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};

export default Navbar;
