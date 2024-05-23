import React from "react";
import { createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx"
import Home from "./pages/Home.jsx"
import Notif from "./pages/Notif.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
import Add from "./pages/Add.jsx"
import Edit from "./pages/Edit.jsx"
import "./App.css";

const Layout = () => {
  return (
    <>
      <Sidebar/>
      <Outlet/>  
    </>
      
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path:"/",
        element : <Home/>
      },
      // {
      //   path:"/Notifications",
      //   element : <Notif/>
      // },
      {
        path:"/Add",
        element : <Add/>
      },
      {
        path:"/Edit/:id",
        element : <Edit/>
      }
    ]
  },
  {
    path: "/signin",
    element: <Signin/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);
function App() {
  return (
   <div>
      <RouterProvider router={router}/>
   </div>
  );
}

export default App;
