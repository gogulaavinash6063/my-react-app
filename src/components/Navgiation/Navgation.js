import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../sign/sign";
import NavbarB from "../header/header";
import { DefaultPage } from "../routing/defaultpage";

const Order = lazy(() => import("../routing/order"));
const Users = lazy(() => import("../routing/users"));
const Items = lazy(() => import("../routing/Items"));

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback="loading.......">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/NavbarB" element={<NavbarB />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/Items" element={<Items />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/*" element={<DefaultPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
