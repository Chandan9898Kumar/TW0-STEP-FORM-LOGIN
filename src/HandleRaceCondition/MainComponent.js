import "./Race.css";
import React from "react";
import RaceConditionIssue from "./RaceConditionIssue";
import RaceConditionSolution from "./RaceConditionSolution";

const MainComponent = () => {
  return (
    <>
      <div className="raceHead">
        <div className="raceIssue">
          <div style={{color:'black'}} >Race Condition Issue </div>
          <RaceConditionIssue />
        </div>
        <div className="raceSolution">
          <div style={{color:'black'}}>Race Condition Solution</div>
          <RaceConditionSolution />
        </div>
      </div>
    </>
  );
};
export default MainComponent;
