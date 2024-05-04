import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import AddBooks from './pages/addbook/AddBooks.jsx'
import Login from './pages/login/Login.jsx'
const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element:<Home />
      },
      {
        path: '/addbook',
        element:<AddBooks />
      },
      {
        path: '/login',
        element:<Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>,
)
