import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "username" && password === "password") {
      window.location.href = "/Home";
    } else {
      alert("Incorrect Username and Password");
    }
  };

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(email);
  //   if (email === "username" && password === "password") {
  //     alert("welcome");
  //   } else {
  //     alert("invalid");
  //   }
  // }

  // function validateForm() {
  //   return email.length > 5 && password.length > 5;
  // }

  return (
    <div>
      <div id="login">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  onSubmit={handleSubmit}
                  id="login-form"
                  className="form"
                  action=""
                  method="post"
                >
                  <h3 className="text-center text-red">Login</h3>
                  <div className="form-group">
                    <label className="text-red">Email:</label>
                    <input
                      type="text"
                      name="email"
                      id="username"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-red">Password:</label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-4 ">
                    <input
                      type="submit"
                      name="Submit"
                      className="btn btn-md"
                      value="Submit"
                      // disabled={!validateForm()}
                    />
                  </div>
                  <div className="form-group mt-4 ">
                    <h6>
                      New user ?
                      <Link to="/Register" className="reg-sign">
                        Sign up
                      </Link>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
