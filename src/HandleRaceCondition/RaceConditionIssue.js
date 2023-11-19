import "./Race.css";
import React, { Fragment, useState, useEffect } from "react";
const fakeFetch = (person) => {
  if (person === "") {
    return Promise.resolve("");
  }
  return new Promise((res) => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
  });
};
const RaceConditionIssue = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState("");

  useEffect(() => {
    setLoading(true);

    fakeFetch(person).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [person]);

  return (
    <Fragment>
      <div className="buttonIssue">
        <button onClick={() => setPerson("Nick")}>Nick's Profile</button>
        <button onClick={() => setPerson("Deb")}>Deb's Profile</button>
        <button onClick={() => setPerson("Joe")}>Joe's Profile</button>
      </div>
      <div className="resultIssue">
        {person && (
          <Fragment>
            <h1>{person}</h1>
            <p>{loading ? "Loading..." : data}</p>
          </Fragment>
        )}
      </div>
      {Boolean(data) && (
        <div className="raceIssueStatement">
          <div style={{ color: "red" }}>Issue with above code.</div> If we run
          our app and click one of the buttons, our fake fetch loads data as
          expected.The trouble comes when we start switching between people in
          quick succession( clicking button very fast). Given the fact that our
          fake fetch has a random delay, we soon find that our fetch results may
          be returned out of order. Additionally, our selected profile and
          loaded data can be out of sync. That’s a bad look! What’s happening
          here is relatively intuitive: setData(data) within the useEffect hook
          is only called after the fakeFetch promise is resolved. Whichever
          promise resolves last will call setData last, regardless of which
          button was actually called last.
        </div>
      )}
    </Fragment>
  );
};
export default RaceConditionIssue;

/**                                                                         Issue with above code. 
 * If we run our app and click one of the buttons, our fake fetch loads data as expected.
   Hitting the race condition

  The trouble comes when we start switching between people in quick succession( clicking button very fast). 
  Given the fact that our fake fetch has a random delay, we soon find that our fetch results may be returned out of order. 
  Additionally, our selected profile and loaded data can be out of sync. That’s a bad look!
 */

/**
 *  What’s happening here is relatively intuitive: setData(data) within the useEffect hook is only called after the fakeFetch promise is resolved.
 *  Whichever promise resolves last will call setData last, regardless of which button was actually called last.
 */
