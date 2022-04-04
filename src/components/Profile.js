import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigation = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigation("/");
  };
  return (
    <>
      <div className="col main s pt-2 mt-2">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link active"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li></li>
                    <li></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li className="nav-item"></li>
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
      </div>
      <div className="container-lg">
        <div className="page-wrapper">
          <div className="page-content">
            {/*breadcrumb*/}
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
              <div className="breadcrumb-title pe-3"></div>
              <div className="ps-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="javascript:;">
                        <i className="bx bx-home-alt" />
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    />
                  </ol>
                </nav>
              </div>
              <div className="ms-auto">
                <div className="btn-group"></div>
              </div>
            </div>
            {/*end breadcrumb*/}
            <div className="container">
              <div className="main-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img
                            src="data:image/png;base64,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"
                            alt="Admin"
                            className="rounded-circle p-1 bg-primary"
                            width={110}
                          />
                          <div className="mt-3">
                            <h4>{localStorage.getItem("user")}</h4>
                            <p className="text-secondary mb-1">
                              Full Stack Developer
                            </p>
                            <p className="text-muted font-size-sm">
                              Bay Area, San Francisco, CA
                            </p>
                            {/* <button class="btn btn-primary">Follow</button>
												<button class="btn btn-outline-primary">Message</button> */}
                          </div>
                        </div>
                        <hr className="my-4" />
                        <ul className="list-group list-group-flush">
                          {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
												<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
												<span class="text-secondary">https://codervent.com</span>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
												<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
												<span class="text-secondary">codervent</span>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
												<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
												<span class="text-secondary">@codervent</span>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
												<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
												<span class="text-secondary">codervent</span>
											</li>
											<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
												<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
												<span class="text-secondary">codervent</span>
											</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="John Doe"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="john@example.com"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="(239) 816-9029"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="(320) 380-4539"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Bay Area, San Francisco, CA"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3" />
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="button"
                              className="btn btn-primary px-4"
                              defaultValue="Save Changes"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* <div class="col-sm-12">
										<div class="card">
											<div class="card-body">
												<h5 class="d-flex align-items-center mb-3">Project Status</h5>
												<p>Web Design</p>
												<div class="progress mb-3 h-5">
													<div class="progress-bar bg-primary w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<p>Website Markup</p>
												<div class="progress mb-3 h-5">
													<div class="progress-bar bg-danger w-25" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<p>One Page</p>
												<div class="progress mb-3 h-5">
													<div class="progress-bar bg-success w-50" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<p>Mobile Template</p>
												<div class="progress mb-3 h-5">
													<div class="progress-bar bg-warning w-75" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<p>Backend API</p>
												<div class="progress h-5">
													<div class="progress-bar bg-info w-25" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
