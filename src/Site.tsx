import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const Site = function render() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Site;
