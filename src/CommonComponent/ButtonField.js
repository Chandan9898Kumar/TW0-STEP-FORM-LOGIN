import React, { memo } from "react";
import "../App.css";
const ButtonField = ({name,disabled,onClickHandler}) => {
  return (
    <>
      <button 
      disabled={disabled}
      onClick={onClickHandler}>
      {name}
      </button>
    </>
  );
};
export default memo(ButtonField);
