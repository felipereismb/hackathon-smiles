import React, { useState } from "react";
import Router from "next/router";

const HeaderComponent = () => {
  const [openSonhos, setOpenSonhos] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#FF4C00", color: "white", height: "96px" }}
      className="absolute w-full top-0 flex items-center justify-between px-4 md:px-8"
    >
      <div className="flex relative">
        <img
          className="cursor-pointer"
          src="imgs/avatar/perfilFelipe.jpg"
          alt="authentication"
          style={{ height: "58px", width: "auto", borderRadius: "50%" }}
        />
        <p
          className="flex items-center ml-2 mt-2 w-full relative"
          style={{ fontSize: "18px" }}
          onClick={() => setOpenSonhos(!openSonhos)}
        >
          Olá Felipe
          <img
            className="cursor-pointer ml-1"
            src="imgs/icons/seta.svg"
            alt="authentication"
            style={{ height: "12px", width: "auto" }}
          />
          {openSonhos && (
            <div
              className="absolute  py-2"
              style={{
                backgroundColor: "white",
                width: "200px",
                bottom: "-120px",
                boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.25)",
              }}
            >
              <p
                className="px-3 pb-2"
                style={{
                  color: "#ff4c00",
                  borderBottom: "solid 1px #ECECEC",
                }}
              >
                Sonhos
              </p>

              <p
                className="px-5 py-2"
                style={{ color: "black", borderBottom: "solid 1px #ECECEC" }}
              >
                Salvador BA
              </p>
              <p className="px-5 pt-2" style={{ color: "black" }}>
                Sabará MG
              </p>
            </div>
          )}
        </p>
      </div>

      <img
        onClick={() => Router.push("/jaqueDicas")}
        className="cursor-pointer"
        src="imgs/icons/sino.svg"
        alt="authentication"
        style={{ height: "35px", width: "auto" }}
      />
    </div>
  );
};

export default HeaderComponent;
