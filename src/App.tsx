import React from 'react';
import logo from './logo.svg';
import About from './components/About/About';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Home, PastEvents, Feedback, Team } from './pages';

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
    element: <PastEvents />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/team",
    element: <Team />,
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
