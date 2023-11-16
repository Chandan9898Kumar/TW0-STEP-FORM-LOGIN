import "./spinner.css";
import React, { memo } from "react";
const Spinner = () => {
  return (
    <>
      <div className="loader">
        <div className="loaderChild"></div>
      </div>
    </>
  );
};
export default memo(Spinner);
