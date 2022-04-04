import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";

function Complaints() {
  const navigation = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigation("/");
  };
  const mystyle = {
    height: 200,
    borderRadius: "20px",
  };
  const mystyle2 = {
    height: 50,
    borderRadius: "20px",
  };
  const View = () => {
    setPopup(true);
    // setName(name);
    // alert(props.name);
    // alert("Hello");
  };
  const [record, setRecord] = useState([]);
  const [popup, setPopup] = useState(false);
  // const [name, setName] = useState("");

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });
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
      <div className="mt-4 pt-4">
        <div class="col-lg-7 col-lg-7 col-lg-12">
          {/* <Popup trigger={popup} setTrigger={setPopup}>
           
            <div>
              <div>
             
                
                <h3>Username</h3>
                <div
                  className="form-floating form-control mb-3"
                  style={mystyle2}
                ></div>
              </div>

              <div>
                <h3>Username</h3>
                <div
                  className="form-floating form-control mb-3"
                  style={mystyle2}
                ></div>
              </div>
              <div>
                <h3>Username</h3>
                <div
                  className="form-floating form-control mb-3"
                  style={mystyle2}
                ></div>
              </div>
              <div>
                <h3>Username</h3>
                <div
                  className="form-floating form-control"
                  style={mystyle}
                ></div>
              </div>
            </div>
          </Popup> */}
          {/* <h5 class="mt-3 mb-3 text-secondary">Recent complaints</h5> */}
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
              <tbody className="mt-4 pt-4">
                {record.map((output) => (
                  <>
                    <tr>
                      <Popup trigger={popup} setTrigger={setPopup}>
                        <div>
                          <div>
                            <h3>Name</h3>
                            <div
                              className="form-floating form-control mb-3"
                              style={mystyle2}
                            >
                              {output.name}
                            </div>
                          </div>

                          <div>
                            <h3>Mail</h3>
                            <div
                              className="form-floating form-control mb-3"
                              style={mystyle2}
                            >
                              {output.email}
                            </div>
                          </div>
                          <div>
                            <h3>Complaint ID</h3>
                            <div
                              className="form-floating form-control mb-3"
                              style={mystyle2}
                            >
                              {output.username}
                            </div>
                          </div>
                          <div>
                            <h3>Description</h3>
                            <div
                              className="form-floating form-control"
                              style={mystyle}
                            >
                              {" "}
                              This Complaint is registered by {output.name} by
                              mail address {output.email} and complaint id of
                              this complaint is {output.username}
                            </div>
                          </div>
                        </div>
                      </Popup>

                      <td>{output.id}</td>
                      <td>{output.name}</td>
                      <td>{output.email}</td>
                      <td>{output.username}</td>
                      <td>
                        <button
                          onClick={View}
                          // props={output.name}
                          className="btn btn-primary"
                        >
                          View
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaints;
