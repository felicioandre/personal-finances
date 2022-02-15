import React from "react";
import { Routes as Router, Route } from "react-router-dom";

import { Login, SignUp } from "../pages/";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* <Route path="about" element={<About />} /> */}
    </Router>
  );
};

export default Routes;
