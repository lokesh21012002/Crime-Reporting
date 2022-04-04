import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigation = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigation("/");
  };
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="col mains pt-2 mt-2">
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

      <p class="lead d-none d-sm-block">Welcome to admin dashboard</p>

      <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>
      <div class="row mb-3">
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card bg-success text-white h-100">
            <div
              class="card-body bg-success"
              style={{ backgroundColor: "#57b960" }}
            >
              <div class="rotate">
                <i class="fa fa-user fa-4x"></i>
              </div>
              <h6 class="text-uppercase">Total Complaints</h6>
              <h1 class="display-4">134</h1>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-danger h-100">
            <div class="card-body bg-danger">
              <div class="rotate">
                <i class="fa fa-list fa-4x"></i>
              </div>
              <h6 class="text-uppercase">Resolved</h6>
              <h1 class="display-4">87</h1>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-info h-100">
            <div class="card-body bg-info">
              <div class="rotate">
                <i class="fab fa-twitter fa-4x"></i>
              </div>
              <h6 class="text-uppercase">In Progress</h6>
              <h1 class="display-4">12s</h1>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-warning h-100">
            <div class="card-body">
              <div class="rotate">
                <i class="fa fa-share fa-4x"></i>
              </div>
              <h6 class="text-uppercase">Shares</h6>
              <h1 class="display-4">36</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="row ">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">Recent complaints</h5>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Mail</th>
                  <th>Complaint Id</th>
                  <th>Record Data</th>
                </tr>
              </thead>
              <tbody>
                {record.slice(0, 7).map((output, index) => (
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
          <h4 className="title mt-3 mb-3 text-center text-secondary">Crimes</h4>
          <div className="mb-5" style={{ height: "300px", width: "400px" }}>
            <PieChart />
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
