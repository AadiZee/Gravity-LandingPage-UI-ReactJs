import React from "react";
import Laptop from "../../assets/laptop.png";

const Relation = () => {
  return (
    <div className="row w-100 mx-auto justify-content-center">
      <div className="col-auto p-0">
        <div className="d-flex flex-column align-items-center py-4">
          <div
            className="text-center pt-5"
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            The Relation between Types of Branding
          </div>

          <div
            className="text-center py-5"
            style={{
              fontSize: "0.9rem",
              color: "#828282",
              maxWidth: "45rem",
            }}
          >
            Aenean eu leo quam_ Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Cum sociis natoque
            penatibus.
          </div>

          <div className="py-4 d-flex" style={{}}>
            <img
              className="w-100"
              src={Laptop}
              alt="some laptop"
              style={{
                minHeight: "23.5rem",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relation;
