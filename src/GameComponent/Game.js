import "../App.css";
import React from "react";

const Game = () => {
  return (
    <>
      <div className="gameHead">The Game</div>
      <div className="backgroundBlur">
        <div className="game-board"
        onClick={(event)=>{
          console.log(event)
        }}
        >
          <div data-action='1'>1</div>
          <div data-action='2'>2</div>
          <div>3</div>
          <div>4</div>
          <div style={{visibility:'hidden'}}>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    </>
  );
};

export default Game;
