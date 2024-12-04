import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NAV = ({ screenWidth }) => {
  return (
    <div
      className="row w-100 align-items-center justify-content-between mx-auto px-5 py-3"
      style={{
        backgroundColor: "rgb(39, 39, 43)",
        color: "rgb(255,255,255)",
      }}
    >
      <div className="col-auto p-0">
        <div
          className=""
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          Gravity
        </div>
      </div>
      <div className="col-auto p-0">
        {screenWidth <= 575 ? (
          <div className="dropdown">
            <GiHamburgerMenu
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "1.2rem", height: "1.2rem" }}
            />
            <ul className="dropdown-menu">
              <button
                className="btn btn-light mx-1"
                style={{
                  border: "none",
                  borderRadius: "0.20rem",
                  fontSize: "0.75rem",
                  backgroundColor: "#ffffff",
                }}
              >
                About
              </button>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <button
                className="btn btn-light mx-1"
                style={{
                  border: "none",
                  borderRadius: "0.20rem",
                  fontSize: "0.75rem",
                  backgroundColor: "#ffffff",
                }}
              >
                Careers
              </button>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <button
                className="btn btn-light mx-1"
                style={{
                  border: "none",
                  borderRadius: "0.20rem",
                  fontSize: "0.75rem",
                  backgroundColor: "#ffffff",
                }}
              >
                Contact
              </button>
            </ul>
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="me-4"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "500",
                }}
              >
                ABOUT
              </div>
              <div
                className="me-4"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "500",
                }}
              >
                CAREERS
              </div>
              <div
                className=""
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "500",
                }}
              >
                CONTACT
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NAV;
