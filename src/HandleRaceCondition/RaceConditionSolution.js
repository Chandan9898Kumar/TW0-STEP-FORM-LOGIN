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
const RaceConditionSolution = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState("");

  useEffect(() => {
    let canceled = false;
    setLoading(true);

    fakeFetch(person).then((data) => {
      if (!canceled) {
        setData(data);
        setLoading(false);
      }
    });

    return () => (canceled = true);
  }, [person]);

  return (
    <Fragment>
      <div className="solutionButton">
        <button onClick={() => setPerson("Nick")}>Nick's Profile</button>
        <button onClick={() => setPerson("Deb")}>Deb's Profile</button>
        <button onClick={() => setPerson("Joe")}>Joe's Profile</button>
      </div>
      <div className="solutionResult">
        {person && (
          <Fragment>
            <h1>{person}</h1>
            <p>{loading ? "Loading..." : data}</p>
          </Fragment>
        )}
      </div>
      {Boolean(data) && (
        <div
          className="raceSolutionStatement"
          style={{ left: "0px", right: "5px" }}
        >
          <div style={{ color: "red" }}>Solution For Race Condition.</div>
          We can fix this race condition by “canceling” the setData call for any
          clicks that aren’t most recent.We do this by creating a boolean
          variable scoped within the useEffect hook and returning a clean-up
          function from the useEffect hook that sets this boolean “canceled”
          variable to true. When the promise resolves, setData will only be
          called if the “canceled” variable is false.Even if a previous button
          click’s fakeFetch promise resolves later, its canceled variable will
          be set to true and setData(data) will not be executed!.
          <p>
            Perfect — No matter how many times we click different buttons, we
            will always only see data associated with the last button click.
          </p>
        </div>
      )}
    </Fragment>
  );
};
export default RaceConditionSolution;

/**                                                                        Solution
 * We can fix this race condition by “canceling” the setData call for any clicks that aren’t most recent. 
 * We do this by creating a boolean variable scoped within the useEffect hook and returning a clean-up function from the useEffect hook 
 * that sets this boolean “canceled” variable to true. When the promise resolves, setData will only be called if the “canceled” variable is false.
 * 
 * 
 * 
 * Even if a previous button click’s fakeFetch promise resolves later, its canceled variable will be set to true and setData(data) will not be executed!
 * Perfect — No matter how many times we click different buttons, we will always only see data associated with the last button click.

 */
