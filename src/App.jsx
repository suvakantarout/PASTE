import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import UpdatePaste from './components/UpdatePaste'
import Footer from './components/Footer'

// Reusable layout wrapper
const PageLayout = ({ children }) => (
  <div className="page-wrapper">
    <Navbar />
    <div className="main-content">{children}</div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    )
  },
  {
    path: "/:id",
    element: (
      <PageLayout>
        <ViewPaste />
      </PageLayout>
    )
  },
  {
    path: "/:id/update",
    element: (
      <PageLayout>
        <UpdatePaste />
      </PageLayout>
    )
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
