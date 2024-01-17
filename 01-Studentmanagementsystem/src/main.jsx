import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Dashboard from "../src/page/Dashboard";
import TecherIndexPage from "../src/components/Teachers/Teacherindex.jsx";
import Login2 from "./components/Login/Login2.jsx";
import Signup2 from "./components/Signup/Signup2.jsx";
import { Provider } from "react-redux";
import { store } from "../Store/Store.js";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path ="/" element={<Layout /> }>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="student" element={<Dashboard />} />
      <Route path="teacher" element={<TecherIndexPage />} />
      <Route path="signup" element={<Signup2 />} />
      <Route path="login" element={<Login2 />} />
      </Route>
     </>
      
  )
);

// providing access of store to all Routes 
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider  store={store}>       
      <RouterProvider router={router} />
      </Provider>
);
