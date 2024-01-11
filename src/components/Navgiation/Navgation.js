
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "../routing/order";
import Users from "../routing/users";
import Items from "../routing/Items";
import LoginPage from "../sign/sign";
import NavbarB from "../header/header";
import { DefaultPage } from "../routing/defaultpage";

const Navigation = () => {
  return (
    <>
      {/* <LoginPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/NavbarB" element={<NavbarB />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
