import React from "react";
import Mobile from "../../assets/mobile.png";

const Think = () => {
  return (
    <div
      className="row w-100 mx-auto justify-content-center pt-5"
      style={{
        backgroundColor: "#f6f6f6",
      }}
    >
      <div className="col-md-auto order-2 order-md-1 p-0 px-3">
        <div
          className="d-flex flex-column align-items-start w-100 mx-auto"
          style={{
            maxWidth: "19rem",
          }}
        >
          <div
            className="mx-auto mx-md-0"
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              minHeight: "4rem",
            }}
          >
            Think out of the box
          </div>
          <div
            className="text-center text-md-start pe-0 pe-md-2"
            style={{
              fontSize: "0.9rem",
              color: "#828282",
              minHeight: "15rem",
            }}
          >
            Aenean eu leo quam- Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus-
            Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac
            cursus commodo, tonor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus.
          </div>
          <button
            className="btn py-2 px-3 mx-auto mx-md-0 my-md-0 mt-3 mb-5"
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
      <div className="col-md-auto order-1 order-md-2 ms-0 ms-md-3 p-0 mb-4 mb-md-0">
        <div className="d-flex align-items-center justify-content-center">
          <img
            className=""
            src={Mobile}
            alt="mobile device"
            style={{
              minHeight: "25rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Think;
