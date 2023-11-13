import "./App.css";
import React, { useEffect, useState } from "react";
function HomePage() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* <div className="App"> */}
      <div className="body"></div>
      <div id="formDiv"></div>

      <div className="header">
        <div>
          TwoStep<span>Login</span>
        </div>
      </div>

      <br />

      <div className="login">
        <input type="email" placeholder="Email" name="email" value={email} />
        <br />

        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
        />

        <br />

        <button onClick={""}>Submit</button>
      </div>
      {/* </div> */}
    </>
  );
}

export default HomePage;
