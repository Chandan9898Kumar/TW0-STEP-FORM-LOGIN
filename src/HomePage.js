import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./CommonComponent/InputField";
import ButtonField from "./CommonComponent/ButtonField";
import { emailValidate, PasswordValidate } from "./Validation/Credentials";
function HomePage() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (event) => {
    let error = emailValidate(email);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
      setTrack(1);
    }
  };

  const changeEmail = () => {
    setTrack(0);
  };

  const validatePassword = () => {
    let error = PasswordValidate({ password: password });
    if (error.password) {
      setPasswordError(error.password);
    } else {
      setPasswordError("");
      navigate("/game");
    }
  };

  return (
    <>
      <div className="body"></div>
      <div id="formDiv"></div>

      <div className="header">
        <div>
          TwoStep{"  "}
          <span>Login</span>
        </div>
      </div>

      <br />

      <div className="login">
        {!Boolean(track) ? (
          <>
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChangeHandler={setEmail}
            />
            <br />
            <br />
            <ButtonField
              disabled={false}
              name="NEXT"
              onClickHandler={validateEmail}
            />
          </>
        ) : (
          <>
            <InputField
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChangeHandler={setPassword}
            />

            <br />

            <div>
              <ButtonField
                disabled={false}
                name="Change Email"
                onClickHandler={changeEmail}
              />
              <ButtonField
                disabled={false}
                name="Submit"
                onClickHandler={validatePassword}
              />
            </div>
          </>
        )}
      </div>
      {Boolean(emailError) && (
        <div className="emailError">{`${emailError}.`}</div>
      )}

      {Boolean(passwordError) && (
        <div className="emailError">{`${passwordError}.`}</div>
      )}
    </>
  );
}

export default HomePage;
