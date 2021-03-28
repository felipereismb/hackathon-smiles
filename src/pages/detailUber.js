import React from "react";
import Router from "next/router";

import HeaderComponent from "app/components/UI/header";
import ContainerPagesComponent from "app/components/UI/containerPages";

export default () => {
  return (
    <>
      <HeaderComponent />

      <ContainerPagesComponent>
        <div className="container mx-auto px-6 pt-5">
          <div>
            <img
              onClick={() => Router.push("/home")}
              src="imgs/arrowBack.svg"
              alt="authentication"
            />
          </div>
          <div
            className="mt-5 flex flex-col items-center justify-center gap-y-4"
            style={{
              fontFamily: "Josefin Sans",
              fontSstyle: "normal",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "24px",
            }}
          >
            <p>Extrato Uber de Março</p>
            <img src="imgs/progress/uberDetails.svg" alt="authentication" />
            <p>Uber</p>
          </div>

          <img src="imgs/timelineUber.svg" alt="authentication" />
        </div>
        
        <div
          className="fixed py-12 flex items-center justify-center w-full"
          style={{ bottom: "0px" }}
        >
          <div
            className="px-8 flex items-center justify-center gap-x-5"
            style={{
              height: "34px",
              background: "#FFFFFF",
              boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.25)",
              borderRadius: "31px",
            }}
          >
            <img
              style={{ height: "25px", width: "auto" }}
              onClick={() => Router.push("/jaqueDicas")}
              src="imgs/icons/jaque.svg"
              alt="authentication"
            />
            <img
              style={{ height: "25px", width: "auto" }}
              onClick={() => Router.push("/home")}
              src="imgs/icons/dash-selected.svg"
              alt="authentication"
              />
            <img
              onClick={() => Router.push("/novoSonho")}
              style={{ height: "20px", width: "auto" }}
              src="imgs/icons/novo.svg"
              alt="authentication"
            />
            <img
              style={{ height: "20px", width: "auto" }}
              src="imgs/icons/shopping.svg"
              alt="authentication"
            />
          </div>
        </div>
      </ContainerPagesComponent>
    </>
  );
};
