import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const obj = {
  classOne: false,
  classTwo: false,
  classThree: false,
  classFour: false,
  classFive: false,
  classSix: false,
  classSeven: false,
  classEight: false,
  classNine: false,
};

const initialState = {
  textAlign: "center",
  padding: "20px 0",
  fontSize: "30px",
  border: "1px solid black",
  color: "burlywood",
};

const updatedState = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  textAlign: "center",
  padding: "20px 0",
  fontSize: "30px",
  border: "1px solid black",
  color: "burlywood",
};
const Game = () => {
  const [checkedBox, setCheckedBox] = useState(obj);
  const [arrayValues, setArrayValues] = useState([]);
  const [functionStatusCount, setFunctionStatusCount] = useState(0);

  useEffect(() => {
    let time = setTimeout(() => {
      callBackFunction();
    }, 2000);

    return () => clearTimeout(time);
  }, [functionStatusCount]);

  //   Unchecking boxes in reverse order.
  const callBackFunction = () => {
    let timer = setInterval(() => {
      if (arrayValues[0] === "9") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classNine: !previous.classNine,
          };
        });
      } else if (arrayValues[0] === "1") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classOne: !previous.classOne,
          };
        });
      } else if (arrayValues[0] === "2") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classTwo: !previous.classTwo,
          };
        });
      } else if (arrayValues[0] === "3") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classThree: !previous.classThree,
          };
        });
      } else if (arrayValues[0] === "4") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classFour: !previous.classFour,
          };
        });
      } else if (arrayValues[0] === "6") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classSix: !previous.classSix,
          };
        });
      } else if (arrayValues[0] === "7") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classSeven: !previous.classSeven,
          };
        });
      } else if (arrayValues[0] === "8") {
        arrayValues.shift();
        setCheckedBox((previous) => {
          return {
            ...previous,
            classEight: !previous.classEight,
          };
        });
      }

      setArrayValues([...arrayValues]);

      if (arrayValues.length === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  //  Checking boxes same order.
  const handleClickEvent = (argument) => {
    if (argument.target.dataset.action === "1") {
      setCheckedBox({
        ...checkedBox,
        classOne: true,
      });
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
      setFunctionStatusCount((prev) => prev + 1);
    } else if (argument.target.dataset.action === "2") {
      setCheckedBox({
        ...checkedBox,
        classTwo: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    } else if (argument.target.dataset.action === "3") {
      setCheckedBox({
        ...checkedBox,
        classThree: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    } else if (argument.target.dataset.action === "4") {
      setCheckedBox({
        ...checkedBox,
        classFour: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    } else if (argument.target.dataset.action === "6") {
      setCheckedBox({
        ...checkedBox,
        classSix: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    } else if (argument.target.dataset.action === "7") {
      setCheckedBox({
        ...checkedBox,
        classSeven: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    } else if (argument.target.dataset.action === "8") {
      setCheckedBox({
        ...checkedBox,
        classEight: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    } else if (argument.target.dataset.action === "9") {
      setCheckedBox({
        ...checkedBox,
        classNine: true,
      });
      setFunctionStatusCount((prev) => prev + 1);
      setArrayValues([argument.target.dataset.action, ...arrayValues]);
    }
  };

  return (
    <>
      <div className="gameHead">The Game</div>
      <div className="backgroundBlur">
        <div
          className="game-board"
          onClick={(event) => {
            handleClickEvent(event);
          }}
        >
          <div
            data-action="1"
            style={checkedBox.classOne ? updatedState : initialState}
          >
            1
          </div>
          <div
            data-action="2"
            style={checkedBox.classTwo ? updatedState : initialState}
          >
            2
          </div>
          <div
            data-action="3"
            style={checkedBox.classThree ? updatedState : initialState}
          >
            3
          </div>
          <div
            data-action="4"
            style={checkedBox.classFour ? updatedState : initialState}
          >
            4
          </div>
          <div style={{ visibility: "hidden" }}>5</div>
          <div
            data-action="6"
            style={checkedBox.classSix ? updatedState : initialState}
          >
            6
          </div>
          <div
            data-action="7"
            style={checkedBox.classSeven ? updatedState : initialState}
          >
            7
          </div>
          <div
            data-action="8"
            style={checkedBox.classEight ? updatedState : initialState}
          >
            8
          </div>
          <div
            data-action="9"
            style={checkedBox.classNine ? updatedState : initialState}
          >
            9
          </div>
        </div>
        <div className="information">Click on the boxes</div>
      </div>
      <div className="appLink">
        <Link to={`/game/version/${2}`} className="enter-room-button">
          Join Game V2
        </Link>
      </div>
    </>
  );
};

export default Game;
