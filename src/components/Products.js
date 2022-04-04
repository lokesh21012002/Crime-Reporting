import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import PieChart from "./PieChart";
import Lines from "./Lines";
import Charts from "./Charts";
import "./Profucts.css";

function Products() {
  const navigation = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigation("/login");
  };
  return (
    <div className="col main s pt-2 mt-2">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
              </li>
              <li className="nav-item">
                <Link
                  to="/analytics"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Analytics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/complaints"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Complaints
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={logout}
                style={{ color: "white" }}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container px-2 mt-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <Charts />
          </div>
        </div>
      </div>

      {/* <div className="mt-5">
        <Charts />
      </div> */}
      {/* <Lines /> */}

      <div className="pt-5 mt-3">
        <Home className="pt-2 mt-3" />
      </div>
    </div>
  );
}

export default Products;
