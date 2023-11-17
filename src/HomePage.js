import "./App.css";
import React, { useEffect, useState } from "react";
import InputField from "./CommonComponent/InputField";
import ButtonField from "./CommonComponent/ButtonField";
import validate from "./Validation/Credentials";
function HomePage() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const validateCredentials = (event) => {
    let error = validate({ email: email });
    if (error.email) {
      setEmailError(error.email);
    } else {
      setEmailError("");
      setTrack(1);
    }
  };

  return (
    <>
      {/* <div className="App"> */}
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
            {emailError && (
              <span className="emailError">{`${emailError}.`}</span>
            )}
            <br />
            <br />
            <ButtonField
              disabled={false}
              name="NEXT"
              onClickHandler={validateCredentials}
            />
          </>
        ) : (
          ""
        )}
      </div>
      {/* </div> */}
    </>
  );
}

export default HomePage;

{
  /* <InputField
type="password"
placeholder="password"
name="password"
value={password}
onChangeHandler={setPassword}
/>

<br />

<ButtonField 


/> */
}
