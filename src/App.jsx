import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import UpdatePaste from './components/UpdatePaste'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar />
        <Home />
      </div> 
    },
    {
      path: "/:id",
      element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    },
    {
      path: "/:id/update",
      element:
      <div>
        <Navbar />
        <UpdatePaste />
      </div>
    },
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
