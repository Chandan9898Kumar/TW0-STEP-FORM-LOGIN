import "./App.css";
import React, { useEffect, useState } from "react";
function HomePage() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="App">
        <div class="body"></div>
        <div id="formDiv"></div>

        <div class="header">
          <div>
            Camp<span>Out</span>
          </div>
        </div>

        <br />

        <div class="login">
          <input type="email" placeholder="Email" name="email" value={email} />
          <br />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
          />
          <br />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
