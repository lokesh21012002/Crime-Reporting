import React from "react";
import "./App.css";
import LoginUi from "./components/LoginUi";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Final from "./components/Final";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Complaints from "./components/Complaints";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Home /> */}
        {/* <Switch> */}
        <Routes>
          <Route exact path="/" element={<LoginUi />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/analytics" element={<Products />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/complaints" element={<Complaints />} />
          <Route exact path="/login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
