import React from "react";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";

const Testimonials = () => {
  return (
    <div className="col-12 p-0 py-3">
      <div className="row w-100 mx-auto pb-3">
        <div className="col-12 p-0 py-3">
          <div
            className="text-center w-100"
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              lineHeight: "4",
            }}
          >
            Testimonials
          </div>
          <div className="col-12 p-0 py-4">
            <div className="row w-100 mx-auto justify-content-center">
              <div className="col-12 col-sm-auto p-0 me-0 me-sm-4 mb-4 mb-sm-0">
                <div className="d-flex justify-content-center">
                  <img
                    className=""
                    src={Avatar1}
                    alt="tst-1"
                    style={{
                      minHeight: "4.6rem",
                    }}
                  />
                </div>
              </div>
              <div className="col-11 col-sm-auto p-0">
                <div
                  className="d-flex flex-column align-items-start justify-content-start py-4 px-4 mx-auto mx-sm-0"
                  style={{
                    backgroundColor: "#f6f6f6",
                    borderRadius: "0.5rem",
                    maxWidth: "30rem",
                  }}
                >
                  <div
                    className=""
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      minHeight: "2.5rem",
                    }}
                  >
                    Rebecca Young
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      minHeight: "2.2rem",
                      color: "#828282",
                    }}
                  >
                    Happy customer at{" "}
                    <span style={{ color: "#67c6b5" }}>The AppStore</span>
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      color: "#828282",
                      minHeight: "8rem",
                    }}
                  >
                    Aenean eu leo quam_ Pellentesque ornare sem lacima quam
                    venenaüs vestibulum_ Maecenas faucibus mollis interdum. Cum
                    sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Sed posuere consectetur est at
                    lobortis_ Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 pt-3">
            <div className="row w-100 mx-auto justify-content-center">
              <div className="col-12 col-sm-auto p-0 ms-0 ms-sm-4 mb-4 mb-sm-0 order-1 order-sm-2">
                <div className="d-flex justify-content-center">
                  <img
                    className=""
                    src={Avatar2}
                    alt="tst-1"
                    style={{
                      minHeight: "4.6rem",
                    }}
                  />
                </div>
              </div>
              <div className="col-11 col-sm-auto p-0 order-2 order-sm-1">
                <div
                  className="d-flex flex-column align-items-start justify-content-start py-4 px-4 mx-auto mx-sm-0"
                  style={{
                    backgroundColor: "#f6f6f6",
                    borderRadius: "0.5rem",
                    maxWidth: "30rem",
                  }}
                >
                  <div
                    className=""
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      minHeight: "2.5rem",
                    }}
                  >
                    Nick James
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      minHeight: "2.2rem",
                      color: "#828282",
                    }}
                  >
                    Happy customer at{" "}
                    <span style={{ color: "#67c6b5" }}>The AppStore</span>
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      color: "#828282",
                      minHeight: "8rem",
                    }}
                  >
                    Aenean eu leo quam_ Pellentesque ornare sem lacima quam
                    venenaüs vestibulum_ Maecenas faucibus mollis interdum. Cum
                    sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Sed posuere consectetur est at
                    lobortis_ Fusce dapibus, tellus ac cursus commodo, tortor
                    mauris.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
