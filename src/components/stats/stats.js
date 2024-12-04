import React from "react";
import Separator1 from "../../assets/seperator1.jpg";
import { FiHeart } from "react-icons/fi";
import { LuCamera } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const Stats = () => {
  return (
    <div
      className="row w-100 mx-auto justify-content-center py-5"
      style={{
        backgroundImage: `url(${Separator1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="col-12 col-sm-5 col-lg-auto p-0 my-3 my-lg-0">
        <div className="d-flex justify-content-center justify-content-sm-end">
          <div
            className="d-flex flex-column align-items-center justify-content-between"
            style={{
              color: "white",
              minWidth: "10rem",
            }}
          >
            <FiHeart
              style={{
                fontSize: "1.8rem",
              }}
            />
            <div
              className="pt-2 pb-1"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              45K+
            </div>
            <div
              className=""
              style={{
                fontSize: "1rem",
              }}
            >
              Likes
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-5 col-lg-auto p-0 my-3 my-lg-0">
        <div className="d-flex justify-content-center justify-content-sm-start">
          <div
            className="d-flex flex-column align-items-center justify-content-between"
            style={{
              color: "white",
              minWidth: "10rem",
            }}
          >
            <FaRegUser
              style={{
                fontSize: "1.8rem",
              }}
            />
            <div
              className="pt-2 pb-1"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              359
            </div>
            <div
              className=""
              style={{
                fontSize: "1rem",
              }}
            >
              Likes
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-5 col-lg-auto p-0 my-3 my-lg-0">
        <div className="d-flex justify-content-center justify-content-sm-end">
          <div
            className="d-flex flex-column align-items-center justify-content-between"
            style={{
              color: "white",
              minWidth: "10rem",
            }}
          >
            <LuCamera
              style={{
                fontSize: "1.8rem",
              }}
            />
            <div
              className="pt-2 pb-1"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              5447
            </div>
            <div
              className=""
              style={{
                fontSize: "1rem",
              }}
            >
              Shots
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-5 col-lg-auto p-0 my-3 my-lg-0">
        <div className="d-flex justify-content-center justify-content-sm-start">
          <div
            className="d-flex flex-column align-items-center justify-content-between"
            style={{
              color: "white",
              minWidth: "10rem",
            }}
          >
            <BsChat
              style={{
                fontSize: "1.8rem",
              }}
            />
            <div
              className="pt-2 pb-1"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              654K
            </div>
            <div
              className=""
              style={{
                fontSize: "1rem",
              }}
            >
              Shares
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
