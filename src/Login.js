import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/100px-Telegram_2019_Logo.svg.png"
          alt="telgram logo"
        />
        <h1>Telegram</h1>
        <Button className="login__button" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
