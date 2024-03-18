import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();

  const Newh = () => {
    history("/Home");
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!user.trim() || !pass.trim()) {
      alert("Please enter both username and password");
      return;
    }
    if (user === pass) {
      Newh();
    } else {
      alert("Username and password must be equal");
    }
  };

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleClick}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0" style={{marginLeft:"-8px"}}>Kafene</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 ,marginLeft:"9px" }}
                      >
                        Login into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          placeholder="Enter Username..."
                          value={user}
                          onChange={handleUser}
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          placeholder="Enter Password..."
                          value={pass}
                          onChange={handlePass}
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="pt-1 mb-">
                        <button variant="primary" className="btn btn-dark btn-lg btn-block">Login</button>
                        <Link to="/Home" className="d-block text-center mt-2">
                        <button type="button" className="btn btn-secondary btn-lg btn-block mt-3">Guest Login</button>
                        </Link>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        <a href="#!" className="small text-muted">
                          Forgot password?
                        </a>
                      </p>
                      <div className="d-flex justify-content-between">
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
