import React from "react";
import Separator3 from "../../assets/seperator3.jpg";

const Creative = () => {
  return (
    <div
      className="row w-100 mx-auto justify-content-center py-5"
      style={{
        backgroundImage: `url(${Separator3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div className="col-auto p-0">
        <div className="d-flex flex-column align-items-center">
          <div
            className="text-center pb-1"
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            We Are a Creative Agency
          </div>
          <div
            className="text-center py-4 pb-5"
            style={{
              maxWidth: "35rem",
              fontSize: "0.7rem",
            }}
          >
            Aenean eu ko quarn. Pellentesque omare sem lacinia quam venenatis
            vestbulurn Maecenas taucibus rnollis interdum. Cum socis natoque
            penatibus.
          </div>
          <button
            className="btn py-2 px-3"
            style={{
              fontWeight: "500",
              fontSize: "0.8rem",
              backgroundColor: "#67c6b5",
              color: "#ffffff",
              borderRadius: "1.2rem",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Creative;
