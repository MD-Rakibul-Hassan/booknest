import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import ViewBook from "./pages/ViewBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import { Provider } from "react-redux";
import store from './app/store.js'
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element:<Home/>
    },
     {
        path: '/addbook',
        element:<AddBook />
      },
      {
        path: '/viewbook',
        element:<ViewBook />
      },
      {
        path: 'update',
        element:<UpdateBook />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </Provider>
);
