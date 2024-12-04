import React from "react";

const Skills = () => {
  return (
    <div
      className="row w-100 mx-auto pb-5 pt-4 justify-content-center"
      style={{
        backgroundColor: "rgb(35, 40, 43)",
        color: "white",
      }}
    >
      <div className="col-12 p-0">
        <div
          className="text-center w-100"
          style={{
            fontSize: "1.3rem",
            fontWeight: "600",
            lineHeight: "4",
          }}
        >
          Skillset
        </div>
      </div>
      <div className="col-auto p-0 py-3 px-3">
        <div
          className="d-flex flex-column align-items-center align-items-lg-end"
          style={{
            fontSize: "0.9rem",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-2 w-100">
            <div className="">HTML / CSS</div>
            <div className="">80%</div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              height: "0.4rem",
              minWidth: "18.5rem",
              maxWidth: "22rem",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: "80%", backgroundColor: "#67c6b5" }}
            ></div>
          </div>

          <div
            className="d-flex justify-content-between align-items-cente mb-2 w-100"
            style={{
              marginTop: "2.5rem",
            }}
          >
            <div className="">PHP / JQuery</div>
            <div className="">90%</div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              height: "0.4rem",
              minWidth: "18.5rem",
              maxWidth: "22rem",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: "90%", backgroundColor: "#67c6b5" }}
            ></div>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mb-2 w-100"
            style={{
              marginTop: "2.5rem",
            }}
          >
            <div className="">Webdesign</div>
            <div className="">100%</div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              height: "0.4rem",
              minWidth: "18.5rem",
              maxWidth: "22rem",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#67c6b5" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="col-auto p-0 py-3 px-3">
        <div
          className="d-flex flex-column align-items-center align-items-lg-start"
          style={{
            fontSize: "0.9rem",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-2 w-100">
            <div className="">Photography</div>
            <div className="">85%</div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              height: "0.4rem",
              minWidth: "18.5rem",
              maxWidth: "22rem",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: "85%", backgroundColor: "#67c6b5" }}
            ></div>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mb-2 w-100"
            style={{
              marginTop: "2.5rem",
            }}
          >
            <div className="">Wordpress</div>
            <div className="">70%</div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              height: "0.4rem",
              minWidth: "18.5rem",
              maxWidth: "22rem",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: "70%", backgroundColor: "#67c6b5" }}
            ></div>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mb-2 w-100"
            style={{
              marginTop: "2.5rem",
            }}
          >
            <div className="">Communication</div>
            <div className="">95%</div>
          </div>
          <div
            className="progress mb-5"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              height: "0.4rem",
              minWidth: "18.5rem",
              maxWidth: "22rem",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: "95%", backgroundColor: "#67c6b5" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
