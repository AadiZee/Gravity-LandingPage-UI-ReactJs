import React from "react";
import Separator2 from "../../assets/seperator2.jpg";

import { BiEdit } from "react-icons/bi";
import { BiTachometer } from "react-icons/bi";

const DesignCodeRight = () => {
  return (
    <div className="col-12 col-md-6 p-0">
      <div
        className="row w-100 h-100 mx-auto align-items-center justify-content-center justify-content-md-start"
        style={{
          backgroundImage: `url(${Separator2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="col-auto h-100 p-0">
          <div
            className="d-flex flex-column align-items-center align-items-md-start pt-5 px-5"
            style={{
              color: "white",
              maxWidth: "24rem",
            }}
          >
            <div
              className="d-flex flex-column align-items-start"
              style={{
                minHeight: "4rem",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-start"
                style={{}}
              >
                <BiEdit
                  className="me-3"
                  style={{
                    fontSize: "2rem",
                  }}
                />
                <div
                  className=""
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  Design & Code
                </div>
              </div>
            </div>
            <div
              className="text-center text-md-start"
              style={{
                fontSize: "1rem",
                minHeight: "9rem",
              }}
            >
              Duis mollis, est non commodo luctus, nisi erat portütor ligula,
              eget lacinia odio sem nec elit Nullam id dobr ide.
            </div>

            <div
              className="d-flex flex-column align-items-start"
              style={{
                minHeight: "5rem",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-start"
                style={{}}
              >
                <BiTachometer
                  className="me-3"
                  style={{
                    fontSize: "2rem",
                  }}
                />
                <div
                  className=""
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                >
                  User Dashboard
                </div>
              </div>
            </div>

            <div
              className="text-center text-md-start"
              style={{
                fontSize: "1rem",
                minHeight: "9rem",
              }}
            >
              Duis mollis, est non commodo luctus, nisi erat portütor ligula,
              eget lacinia odio sem nec elit Nullam id dobr ide.
            </div>
            <button className="btn py-2 px-3" style={{}}>
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCodeRight;
