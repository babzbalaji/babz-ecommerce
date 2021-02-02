import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().required("Please Enter Email"),
  password: yup
    .string()
    .required("Please Enter Password")
    .min(6, "Min 5 Length..."),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = () => {
    if (email && password && name === "") {
      alert("false");
    } else {
      alert("true");
    }
    return false;
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="register">
        <div id="login">
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="form"
                    action=""
                    method="post"
                  >
                    <h3 className="text-center text-red">Register Here</h3>
                    <div className="form-group">
                      <label className="text-red">Name:</label>
                      <input
                        type="text"
                        name="name"
                        id="username"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={register}
                      />
                    </div>
                    <h6 className="messages">{errors.name?.message}</h6>
                    <div className="form-group">
                      <label className="text-red">Email:</label>
                      <input
                        type="text"
                        name="email"
                        id="useremail"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={register}
                      />
                    </div>
                    <h6 className="messages">{errors.email?.message}</h6>
                    <div className="form-group">
                      <label className="text-red">Password:</label>
                      <input
                        type="password"
                        name="password"
                        id="userpassword"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={register}
                      />
                    </div>
                    <h6 className="messages">{errors.password?.message}</h6>
                    <div className="form-group mt-4 ">
                      <input
                        type="submit"
                        name="Register"
                        className="btn btn-md"
                        value="Register"
                        // data-toggle="modal"
                        // data-target="#staticBackdrop"
                      />
                    </div>
                    <div className="form-group mt-4 ">
                      <h6>
                        Already register ?{" "}
                        <Link to="/Login" className="reg-sign">
                          Login
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
    </div>
  );
}
