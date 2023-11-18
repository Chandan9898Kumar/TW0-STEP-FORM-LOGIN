import React, { memo } from "react";
import "../App.css";
const InputField = ({ type, placeholder, name, value, onChangeHandler }) => {
  return (
    <>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(event) => onChangeHandler(event.target.value)}
        autoFocus
      />
    </>
  );
};
export default memo(InputField);
