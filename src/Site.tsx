import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Engineering from "./pages/Engineering";

const Site = function render() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Engineering />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Site;
