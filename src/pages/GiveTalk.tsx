import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Box, Button, Heading } from '@chakra-ui/react';

const GiveTalk = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    sname: '',
    sdetail: '',
  };

  const onSubmit = (values : any) => {
    console.log(values);
  };

  return (
    <Box>
      <Heading as="h1" style={{ color: 'black' }}>
        Speaker <span> suggestion </span>
      </Heading>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Box>
            <label htmlFor="name">Enter your name</label>
            <Field type="text" id="name" name="name" placeholder="Enter your name" />
          </Box>

          <Box>
            <label htmlFor="email">Enter your email</label>
            <Field type="email" id="email" name="email" placeholder="Enter your email" />
          </Box>

          <Box>
            <label htmlFor="phone">Enter your phone</label>
            <Field type="tel" id="phone" name="phone" placeholder="Enter your phone" />
          </Box>

          <Box>
            <label htmlFor="sname">Enter speaker name</label>
            <Field type="text" id="sname" name="sname" placeholder="Enter speaker name" />
          </Box>

          <Box>
            <label htmlFor="sdetail">Enter speaker detail</label>
            <Field as="textarea" id="sdetail" name="sdetail" placeholder="Enter speaker detail" />
          </Box>

          <Button type="submit" className="button">Submit</Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default GiveTalk;