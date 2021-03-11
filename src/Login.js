import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase.js";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider.js";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIN = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt=""
        />

        <div className="login__text">
          <h1>SignIn in to Whatsapp</h1>
        </div>

        <Button type="submit" onClick={signIN}>
          Sign In With Google{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
