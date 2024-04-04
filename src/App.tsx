import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const routes =[
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
      element: <Home />
      }
    ]
  },
  {
    path: 'signup',
    element: <SignUp />
  }
]

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;