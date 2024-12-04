import React from "react";
import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";
import Person4 from "../../assets/person4.png";
import Person5 from "../../assets/person5.png";
import Person6 from "../../assets/person6.png";
import Person7 from "../../assets/person7.png";
import Person8 from "../../assets/person8.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="col-12 p-0 py-3">
      <div className="row w-100 mx-auto pb-5">
        <div className="col-12 p-0 py-3">
          <div
            className="text-center w-100"
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              lineHeight: "4",
            }}
          >
            Our Team
          </div>
        </div>
        <div className="col-12 p-0">
          <div className="row w-100 mx-auto justify-content-center align-items-center">
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-end">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person1}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    Casey Morton
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    Lead Designer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-start">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person2}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    James Oliver
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-end">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person3}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    Robert Gate
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    Business Analyst
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-start">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person4}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    Daniel Stevenson
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    Software Architect
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row w-100 mx-auto justify-content-center align-items-center">
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-end">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person5}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    Sam Stuart
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    Team Lead
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-start">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person6}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    Mark Anthony
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    QA Specialist
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-end">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person7}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    John Christopher
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    Software Developer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-auto p-2">
              <div className="d-flex justify-content-center justify-content-sm-start">
                <div
                  className="d-flex flex-column align-items-center"
                  style={{
                    minWidth: "11.5rem",
                  }}
                >
                  <div className="position-relative image-container">
                    <img
                      className=""
                      src={Person8}
                      alt="person"
                      style={{
                        borderRadius: "5rem",
                        minHeight: "9.2rem",
                        border: "6px solid #dfe0e1",
                      }}
                    />
                    <div className="position-absolute d-flex align-items-center justify-content-center">
                      <FaFacebookSquare
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaSquareTwitter
                        className="mx-1"
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                      <FaLinkedin
                        style={{
                          height: "1.8rem",
                          width: "1.8rem",
                          color: "white",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    Susan Jacob
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#30576d",
                    }}
                  >
                    HR Manager
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

export default Team;
