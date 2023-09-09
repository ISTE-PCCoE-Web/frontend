//@ts-nocheck
import React from 'react';
import logo from './logo.svg';
// import About from './components/About/About';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Home, Events, EventDesc, Feedback, Team, About } from './pages';

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
    path: "/feedback",
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
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
