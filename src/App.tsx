import React from 'react';
import logo from './logo.svg';
import About from './component/About';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
