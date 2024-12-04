import React from "react";
import Joystick from "../../assets/joystick.png";
import Trophy from "../../assets/trophy.png";
import Button from "../../assets/button.png";

const Features = () => {
  return (
    <div className="py-4">
      <div className="row w-100 h-100 mx-auto align-items-center justify-content-center py-md-5">
        <div className="col-12 col-sm-6 col-md-auto p-0 px-3 py-3 py-md-0">
          <div
            className="d-flex flex-column align-items-center justify-content-between mx-auto"
            style={{
              maxWidth: "11rem",
            }}
          >
            <img
              src={Joystick}
              alt="some icon"
              style={{
                height: "1.6rem",
              }}
            />
            <div
              className="text-center mt-4 mb-3"
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              Fair Play
            </div>
            <div
              className="text-center"
              style={{
                fontSize: "0.8rem",
                color: "#828282",
                minHeight: "7rem",
              }}
            >
              lorem ipsum de lour sit ames, per secti fuor de este qui le parfo
              me la si etrougha jel
            </div>
            <button
              className="btn py-2 px-3"
              style={{
                fontWeight: "500",
                fontSize: "0.8rem",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "1.2rem",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-auto p-0 px-3 py-3 py-md-0">
          <div
            className="d-flex flex-column align-items-center justify-content-between mx-auto"
            style={{
              maxWidth: "11rem",
            }}
          >
            <img
              src={Trophy}
              alt="some icon"
              style={{
                height: "1.6rem",
              }}
            />
            <div
              className="text-center mt-4 mb-3"
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              Creative Art
            </div>
            <div
              className="text-center"
              style={{
                fontSize: "0.8rem",
                color: "#828282",
                minHeight: "7rem",
              }}
            >
              lorem ipsum de lour sit ames, per secti fuor de este qui le parfo
              me la si etrougha jel
            </div>
            <button
              className="btn py-2 px-3"
              style={{
                fontWeight: "500",
                fontSize: "0.8rem",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "1.2rem",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-auto p-0 px-3 py-3 py-md-0">
          <div
            className="d-flex flex-column align-items-center justify-content-between mx-auto"
            style={{
              maxWidth: "11rem",
            }}
          >
            <img
              src={Button}
              alt="some icon"
              style={{
                height: "1.6rem",
              }}
            />
            <div
              className="text-center mt-4 mb-3"
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              Slick Features
            </div>
            <div
              className="text-center"
              style={{
                fontSize: "0.8rem",
                color: "#828282",
                minHeight: "7rem",
              }}
            >
              lorem ipsum de lour sit ames, per secti fuor de este qui le parfo
              me la si etrougha jel
            </div>
            <button
              className="btn py-2 px-3"
              style={{
                fontWeight: "500",
                fontSize: "0.8rem",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "1.2rem",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
