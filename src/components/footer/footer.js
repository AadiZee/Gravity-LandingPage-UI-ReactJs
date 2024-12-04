import React from "react";

const Footer = () => {
  return (
    <div
      className="row w-100 mx-auto justify-content-center py-5"
      style={{
        backgroundColor: "#67c6b5",
        color: "white",
      }}
    >
      <div className="col-auto p-0">
        <div className="d-flex flex-column align-items-center justify-content-between">
          <div
            className=""
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            Gravity
          </div>

          <div
            className="pt-4 pb-1"
            style={{
              fontSize: "0.8rem",
            }}
          >
            DynamicXX • 2801 WalnutAvenue • Los Angeles, USA
          </div>

          <div
            className="pt-1"
            style={{
              fontSize: "0.8rem",
            }}
          >
            name@website.com
          </div>

          <div
            className="py-4"
            style={{
              fontSize: "0.85rem",
              fontWeight: "400",
            }}
          >
            Unsubscribe
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
