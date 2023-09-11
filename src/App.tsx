//@ts-nocheck
import React from 'react';
import logo from './logo.svg';
// import About from './components/About/About';
import './App.css';
import {UpEventsDesc} from './data/UpEventsDesc'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Home, Events, EventDesc, Feedback, Team, About } from './pages';
import {useEffect} from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/debate",
    element: <EventDesc Desc = {UpEventsDesc[0]} />,
  },
  {
    path: "/events/BGMI",
    element: <EventDesc Desc = {UpEventsDesc[1]} />,
  },
  {
    path: "/events",
    element: <Events Desc = {UpEventsDesc}/>,
  },
  {
    path: "/givetalk",
    element: <EventDesc />,
  },
  {
    path: "/team",
    element: <Team />,
  },  
  {
    path: "/events/eventDesc",
    element: <EventDesc />,
  },
  {
    path: "/about",
    element: <About />,
  },


]);

function App() {
  
  // console.log(UpEventsDesc[0]);
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
