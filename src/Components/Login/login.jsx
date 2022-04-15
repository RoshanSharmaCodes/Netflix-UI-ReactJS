import "./login.css";
import netlogo from "./netflix-logo-circle-png-5.png";
import { useRef, useState } from "react";
import Homepage from "../Homepage/homepage";
import { useNavigate } from "react-router-dom";
import style from "./login.module.less";

export default function Login() {
  console.log(style);

  let navigate = useNavigate();

  const logininfo = [
    {
      username: "roshan.rks28",
      password: "12345",
    },
    {
      username: "vikas.vm",
      password: "123",
    },
  ];

  let username = useRef("");
  let password = useRef("");

  function loginCheck() {
    let user = username.current.value;
    let pass = password.current.value;
    let val = logininfo.filter((e) => e["username"] == user);
    if (val.length) {
      navigate("/Home");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className={style.main}>
      <div className={style.loginContainer}>
        <div className={style.imageBox}>
          <img className={style.logo} src={netlogo} alt="logo" />
        </div>
        <div className={style.loginDetails}>
          <input
            ref={username}
            value={username.current.value}
            className={style.inpLogin}
            type="text"
            placeholder="Username"
          />
          <input
            ref={password}
            value={password.current.value}
            className={style.inpLogin}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={style.submitBox}>
          <input
            type="button"
            className={style.btnLogin}
            onClick={loginCheck}
            name="Submit"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
}
