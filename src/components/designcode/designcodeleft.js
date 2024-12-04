import React from "react";

const DesignCodeLeft = () => {
  return (
    <div className="col-12 col-md-6 p-0">
      <div
        className="row w-100 h-100 mx-auto align-items-center justify-content-center justify-content-md-end"
        style={{
          backgroundColor: "#67c6b5",
        }}
      >
        <div className="col-auto h-100 p-0">
          <div
            className="d-flex flex-column align-items-center align-items-md-start py-5 py-md-0 pt-md-5 px-5"
            style={{
              color: "white",
              maxWidth: "24rem",
            }}
          >
            <div
              className=""
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                minHeight: "4rem",
              }}
            >
              Design & Code
            </div>
            <div
              className="text-center text-md-start"
              style={{
                fontSize: "1rem",
                minHeight: "14rem",
              }}
            >
              Aenean eu leo quam. Pellentesque omare sem lacinia quam venenatis
              vestibulum- Maecenas faucibus mollis interdum. Cum sociis natoque
              penatibus et magnis dis partunent montes, nascetur ridiculus mus.
            </div>
            <button
              className="btn py-2 px-3"
              style={{
                fontWeight: "500",
                fontSize: "0.9rem",
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

export default DesignCodeLeft;
