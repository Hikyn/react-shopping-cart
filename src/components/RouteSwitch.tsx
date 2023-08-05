import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import React from "react";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
