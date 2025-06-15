import React from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
//import Home from "./Component/Home/HOme";
import Login from "./Component/Login/login";
import Signup from "./Component/Signup/Signup";
import { Outlet } from "react-router-dom";
import Houses from "./Component/Houses/Houses";
import Listing from "./Component/Listing/Listing";
import Contact from "./Component/Contactus/Contact";
import Footer from "./Component/Footer/Footer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Combined from "./pages/Combined";
function App() {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />

      <Combined />
    </>
  );
}

export default App;
