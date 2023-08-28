import React from 'react';
import logo from './logo.svg';
import About from './component/About/About';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Chart from "./component/Chart/Chart"
import Team from "./component/Team/Team"
import Events from "./component/Events/Events"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function App() {
  return (
    <Box>
      <Events/>
    </Box>
  );
}

export default App;
