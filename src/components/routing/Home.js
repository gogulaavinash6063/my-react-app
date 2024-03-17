
import React from "react";
import NavbarB from "../header/header";
import GreetingComponent from "../sign/greeting";
import Toast from "../header/Toast";
import image from "./iStock-692898468-2.jpg";

const Home = () => {
  return (
    <>
      <NavbarB />
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          height: "100vh", 
           backgroundImage: `url(${image})`, 
           backgroundSize: "100%", 
           backgroundPosition: "center", 
        }}
      >
        <h2 style={{ backgroundColor:"transparent", color:"black" }}>
          <GreetingComponent /> Welcome to Kafene Order Management
        </h2>
      </div>
      <Toast />
    </>
  );
};

export default Home;
