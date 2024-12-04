import React from "react";

const Coder = () => {
  return (
    <div className="col-12 col-md-auto offset-md-1 p-0 mt-5 mt-md-0">
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <div
          className="text-center text-md-start"
          style={{
            fontSize: "1.3rem",
            fontWeight: "600",
            minHeight: "3.5rem",
          }}
        >
          Creative Coders
        </div>
        <div
          className="text-center text-md-start"
          style={{
            maxWidth: "16rem",
            fontSize: "0.85rem",
            color: "#828282",
          }}
        >
          Aenean eu q uam. ornare sem lacinia quam venenatis vestibulum.
          Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Sed posuere
          consectetur est at lobortis, Fusce dapibus, tellus ac cursus commodo,
          tortor mauris
        </div>
      </div>
    </div>
  );
};

export default Coder;
