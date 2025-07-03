import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import UpdatePaste from './components/UpdatePaste'
import Footer from './components/Footer'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div> 
    },
    {
      path: "/:id",
      element:
      <div>
        <Navbar />
        <ViewPaste />
        <Footer />
      </div>
    },
    {
      path: "/:id/update",
      element:
      <div>
        <Navbar />
        <UpdatePaste />
        <Footer />
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
