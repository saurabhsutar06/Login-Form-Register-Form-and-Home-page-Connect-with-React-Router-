import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login_Form from './Components/Login_Form.jsx'
import Register_Form from './Components/Register_Form.jsx'
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Login", element: <Login_Form /> },
  { path: "/Registration", element: <Register_Form></Register_Form> },
  { path: "home", element: <Home /> },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
