import React from "react";
import FeaturedLeft from "./featuredLeft";
import FeaturedRight from "./featuredRight";

const Featured = () => {
  return (
    <div className="row w-100 h-100 mx-auto">
      <FeaturedLeft />
      <FeaturedRight />
    </div>
  );
};

export default Featured;
