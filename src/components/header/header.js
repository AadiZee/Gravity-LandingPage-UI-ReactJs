import React from "react";
import Background from "../../assets/header_bg.jpg";
import Bulb from "../../assets/bulb.png";

const Header = () => {
  return (
    <div className="row w-100 h-100 mx-auto">
      <div
        className="col-12 p-0 position-relative py-5"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "30rem",
        }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center h-100 w-100"
          style={{
            inset: 0,
          }}
        >
          <div className="d-flex align-items-center justfy-content-center">
            <img
              src={Bulb}
              alt="header icon"
              style={{
                height: "3.3rem",
              }}
            />
          </div>
          <div
            className="text-center mt-4"
            style={{
              fontWeight: "500",
              fontSize: "2rem",
              lineHeight: "1.2",
              color: "#fff",
            }}
          >
            We are Designers
          </div>
          <div
            className="text-center mb-5"
            style={{
              fontSize: "1.8rem",
              color: "#fff",
              lineHeight: "1.2",
            }}
          >
            and Great Coders
          </div>
          <button
            className="btn"
            style={{
              fontSize: "0.75rem",
              borderRadius: "1rem",
              color: "#fff",
              backgroundColor: "#67c6b5",
              padding: "0.45rem 1.1rem",
            }}
          >
            Install our App For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
