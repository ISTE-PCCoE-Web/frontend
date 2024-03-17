//@ts-nocheck
import React from 'react';
import logo from './logo.svg';
// import About from './components/About/About';
import './App.css';
import {UpEventsDesc} from './data/UpEventsDesc'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import {useEffect} from 'react';
import router from './routes/Routes'

function App() {
  
  // console.log(UpEventsDesc[0]);
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
