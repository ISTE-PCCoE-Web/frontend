import React from "react";
import { Formik, Field, Form } from "formik";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Navbar } from "../components";
import "./styles/givetalks.css";

const GiveTalk = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    sname: "",
    sdetail: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box minHeight={"100vh"} pb="1.5rem">
      <Navbar color="#fff" p="1.5rem 2rem" />
      <Flex justifyContent="center" alignItems="center" mx="auto" flexDir="column" width="70%" padding="1.5rem" bg="#ffffff50" backdropFilter="blur(5px)" borderRadius={'3rem'}>
        <Heading as="h1" style={{ color: "white" }}>
          Speaker <span> suggestion </span>
        </Heading>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="talk-form">
            <Box>
              <label className="label" htmlFor="name">Enter your name</label>
              <Field
                type="text"
                className="input"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </Box>

            <Box>
              <label className="label" htmlFor="email">Enter your email</label>
              <Field
                type="email"
                className="input"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </Box>

            <Box>
              <label className="label" htmlFor="phone">Enter your phone</label>
              <Field
                type="tel"
                className="input"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
              />
            </Box>

            <Box>
              <label className="label" htmlFor="sname">Enter speaker name</label>
              <Field
                type="text"
                className="input"
                id="sname"
                name="sname"
                placeholder="Enter speaker name"
              />
            </Box>

            <Box>
              <label className="label" htmlFor="sdetail">Enter speaker detail</label>
              <Field
                as="textarea"
                className="textarea"
                id="sdetail"
                name="sdetail"
                placeholder="Enter speaker detail"
              />
            </Box>

            <Button type="submit" className="button">
              Submit
            </Button>
          </Form>
        </Formik>
      </Flex>
    </Box>
  );
};

export default GiveTalk;