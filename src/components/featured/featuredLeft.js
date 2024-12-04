import React from "react";
import Tablet from "../../assets/tablet.png";

const FeaturedLeft = () => {
  return (
    <div
      className="col-12 col-md-6"
      style={{
        backgroundColor: "#f6f6f6",
      }}
    >
      <div className="row w-100 h-100 mx-auto p-5 justify-content-center justify-content-md-end">
        <div className="col-auto p-0">
          <div className="row w-100 flex-column mx-auto align-items-start">
            <div className="col-auto p-0 custom-height mb-4">
              <div className="d-flex h-100">
                <img
                  className=""
                  src={Tablet}
                  alt="tablet"
                  style={{
                    height: "80%",
                    minHeight: "13rem",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

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
                  Design & Code
                </div>
                <div
                  className="text-start"
                  style={{
                    fontSize: "0.8rem",
                    color: "#828282",
                    minHeight: "11rem",
                  }}
                >
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna. Cum sociis natoque penatibus et magnis dis panurient
                  montes, nascetur ridiculus mus. Maecenas sed diam eget risus
                  varius blandit sit amet non magna Duis mollis, est non commodo
                  luctus, nisi erat pontitor ligula, eget lacinia odio sem nec
                  elit- Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Sed posuere consectetur est at.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLeft;
