import "./Race.css";
import React from "react";
import RaceConditionIssue from "./RaceConditionIssue";
import RaceConditionSolution from "./RaceConditionSolution";
import { Link } from "react-router-dom";
const MainComponent = () => {
  return (
    <>
      <div className="raceHead">
        <div className="raceIssue">
          <div style={{ color: "black" }} className="raceIssueText">
            Race Condition Issue{" "}
          </div>
          <RaceConditionIssue />
        </div>
        <div className="raceSolution">
          <div style={{ color: "black" }} className="raceSolutionText">
            Race Condition Solution
          </div>
          <RaceConditionSolution />
        </div>
      </div>
      <div className="raceLinkHead">
        <a
          href="https://miro.medium.com/v2/resize:fit:700/1*oTOIIk22d_053dIhZTHkBw.png"
          className="raceLink"
        >
          Click to See Race Condition Image
        </a>
      </div>
      <div style={{ position: "relative", top: "40px" }}>
        <Link to="/" className="redirectLink">
          Go To MainPage
        </Link>
      </div>
    </>
  );
};
export default MainComponent;

/**                                                         Race Condition
 * 
 * A race condition is a phenomenon in which if you are making multiple API calls or performing asynchronous operations, 
 * then there are chances that the UI can update/render in glitch as the later call may resolve first and the first API call may resolve later.

   This result in a bug as the data is rendered inconsistently.
 */
