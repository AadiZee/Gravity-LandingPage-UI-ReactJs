import React from "react";
import Minimal from "./minimal";
import Coder from "./coder";

const MinimalCoder = () => {
  return (
    <div className="row w-100 mx-auto justify-content-center py-5">
      <Minimal />
      <Coder />
    </div>
  );
};

export default MinimalCoder;
