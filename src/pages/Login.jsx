import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "../axios/axios";
import { useState } from "react";
import { UNSAFE_DataStaticRouterContext, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSyncExternalStore } from "react";
const Login = () => {
  const [show, setShow] = useState(false);
  const { login, setLogin, token, setToken } = useContext(AppContext);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(null);

  const hadleLogin = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (!(data.email == "") && !(data.password == "")) {
      const user = await axios.post("/login", data).catch((error) => {
        // setError('Email or Password does not match');
        setLoader(false);
        swal("Login Failed !", "Email or Password Wrong", "error");
      });
      console.log(user.data);
      if (user.data) {
        localStorage.setItem("token", user?.data?.data?.token);
        setLoader(false);
        // localStorage.setItem('login',true);
        console.log(token);

        // swal("Login Successful", "", "success");
        navigate("dashboard");
      } else {
        console.log(user);
      }
    }
  };
  return (
    <>
      <div
        className="background_image"
        style={{
          position: "relative",
        }}
      >
        {/* {
          error?(<>
           <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          Failed ! You entered wrong credentials, Please Try Again. fields
          below.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
          </>):(<></>)
        } */}

        <div className="row m-0 h-100">
          <div className="col-12 d-flex  justify-content-center justify-content-xl-end align-items-center ">
            <div className="login_wrapper ">
              <h3>Sign In </h3>
              <span>Enter your email & password to login</span>
              <form>
                <div className="input_box">
                  <label htmlFor="email" className="input_label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  ></input>
                </div>
                <div className="pass_input_box mt-3">
                  <label htmlFor="password" className="input_label">
                    Password
                  </label>
                  <div className="pass_input_wrapper ">
                    <input
                      type={show ? "text" : "password"}
                      class="form-control pass_input"
                      id="password"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    ></input>
                    <span
                      className="hide_show"
                      onClick={() => setShow(!show)}
                      style={{
                        cursor: "pointer",
                        userSelect: "false",
                      }}
                    >
                      {show?'Hide':'Show'}
                    </span>
                  </div>
                </div>
                <div className="password_query d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-sm-between">
                  <div className="remember_box">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember password</label>
                  </div>
                  <button className="mt-2 mt-sm-0">Forgot password?</button>
                </div>
                <button className="action_btn" onClick={hadleLogin}>
                  {loader ? (
                    <>
                      {" "}
                      <div class="spinner-border me-2" role="status"></div>
                    </>
                  ) : (
                    <>Sign In</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
