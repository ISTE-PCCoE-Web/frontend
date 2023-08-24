import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
