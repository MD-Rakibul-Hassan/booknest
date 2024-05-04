import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import AddBooks from './pages/addbook/AddBooks.jsx'
import Login from './pages/login/Login.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
    <RouterProvider router={route}>
        <App />
    </RouterProvider>
    </Provider>
);
