import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee'
import UpdateCoffee from './components/UpdateCoffee'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  }, 
  {
    path: '/updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
