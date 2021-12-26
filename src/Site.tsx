import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Engineering from "./engineering/Engineering";

const Site = function render() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dev" element={<Engineering />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Site;
