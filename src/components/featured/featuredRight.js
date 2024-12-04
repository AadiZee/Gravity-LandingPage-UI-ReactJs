import React from "react";
import Devices from "../../assets/devices.png";

const FeaturedRight = () => {
  return (
    <div
      className="col-12 col-md-6"
      style={{
        backgroundColor: "#ededed",
      }}
    >
      <div className="row w-100 h-100 mx-auto p-5 justify-content-center justify-content-md-start">
        <div className="col-auto p-0">
          <div className="row w-100 flex-column mx-auto align-items-start">
            <div className="col-auto p-0 custom-height">
              <div
                className="d-flex flex-column align-items-start justify-content-start"
                style={{
                  maxWidth: "18rem",
                }}
              >
                <div
                  className="text-start"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    minHeight: "3rem",
                  }}
                >
                  The Perfect Toolkit
                </div>
                <div
                  className="text-start"
                  style={{
                    fontSize: "0.8rem",
                    color: "#828282",
                    minHeight: "11rem",
                  }}
                >
                  Aenean eu leo quam- Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Maecenas faucibus mollis interdum- Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus- Sed posuere consectetur est at
                  lobortis. Fusce dapibus, tellus ac cursus.
                </div>
              </div>
            </div>

            <div className="col-auto p-0 custom-height mt-4">
              <div className="d-flex h-100">
                <img
                  className=""
                  src={Devices}
                  alt="tablet"
                  style={{
                    minWidth: "15.6rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRight;
