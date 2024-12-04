import React from "react";
import Tools from "../../assets/tools.png";

const Train = () => {
  return (
    <div
      className="row w-100 mx-auto justify-content-center py-5"
      style={{
        backgroundColor: "#f6f6f6",
      }}
    >
      <div className="col-md-4 p-0 pe-sm-4 mb-4 mb-md-0">
        <div className="d-flex justify-content-center justify-content-md-end">
          <img
            className=""
            src={Tools}
            alt="some tools"
            style={{
              minHeight: "16.5rem",
            }}
          />
        </div>
      </div>
      <div className="col-md-5 p-0 ps-2">
        <div className="d-flex flex-column align-items-center align-items-md-start w-100">
          <div
            className=""
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              minHeight: "3rem",
            }}
          >
            How to Train your Creativity
          </div>
          <div
            className="text-center text-md-start pe-0 pe-md-2"
            style={{
              fontSize: "0.9rem",
              color: "#828282",
              minHeight: "15rem",
              maxWidth: "20rem",
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
            className="btn py-2 px-3"
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
    </div>
  );
};

export default Train;
