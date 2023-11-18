import React from "react";
import RaceConditionIssue from "./RaceConditionIssue";
import RaceConditionSolution from "./RaceConditionSolution";

const MainComponent = () => {
    
  return (
    <>
      <div>
        <div>
          <RaceConditionIssue />
        </div>
        <div>
          <RaceConditionSolution />
        </div>
      </div>
    </>
  );
};
export default MainComponent;
