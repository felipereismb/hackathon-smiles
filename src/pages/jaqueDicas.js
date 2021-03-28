import React from "react";
import Router from "next/router";

import HeaderComponent from "app/components/UI/header";
import ContainerPagesComponent from "app/components/UI/containerPages";

export default () => {
  return (
    <>
      <HeaderComponent />

      <ContainerPagesComponent>
        <div className="container mx-auto pt-5">
          <div
            className="my-5 flex flex-col items-center justify-center gap-y-4"
            style={{
              fontFamily: "Josefin Sans",
              fontSstyle: "normal",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "24px",
            }}
          >
            <p>Dicas da Jaque!</p>
          </div>

          <div
            className="px-8 py-4 mb-5"
            style={{ backgroundColor: "#FFF1E9" }}
          >
            <div className="flex">
              <img src="imgs/icons/jaqueSelected.svg" alt="authentication" />
              <div className="px-3 mt-2">
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "18px",
                  }}
                >
                  Jaqueline
                </p>
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  3h
                </p>
              </div>
            </div>
            <p
              className="mt-3 mb-1"
              style={{
                fontFamily: "Josefin Sans",
                fontSstyle: "normal",
                fontSize: "14px",
                lineHeight: "125.1%",
              }}
            >
              Vai ao posto de gasolina? Não esqueça de usar seu cartão de
              crédito para acumular milhas!!
              <br />
              Não sabe como?
            </p>

            <div style={{ textAlign: "right" }}>
              <button
                className="px-4 py-1"
                style={{
                  color: "white",
                  background: "#F57921",
                  borderRadius: "28px",
                }}
                onClick={() => Router.push("/jaqueChat")}
              >
                Vamos conversar
              </button>
            </div>
          </div>

          <div
            className="px-8 py-4 mb-5"
            style={{ backgroundColor: "#FFF1E9" }}
          >
            <div className="flex">
              <img src="imgs/icons/jaqueSelected.svg" alt="authentication" />
              <div className="px-3 mt-2">
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "18px",
                  }}
                >
                  Jaqueline
                </p>
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  3h
                </p>
              </div>
            </div>
            <p
              className="mt-3 mb-1"
              style={{
                fontFamily: "Josefin Sans",
                fontSstyle: "normal",
                fontSize: "14px",
                lineHeight: "125.1%",
              }}
            >
              Vai de uber? Sabia que dá para acumular milhas com suas viagens?
              Eu te mostro como...
            </p>

            <div style={{ textAlign: "right" }}>
              <button
                className="px-4 py-1"
                style={{
                  color: "white",
                  background: "#F57921",
                  borderRadius: "28px",
                }}
                onClick={() => Router.push("/jaqueChat")}
              >
                Vamos conversar
              </button>
            </div>
          </div>

          <div
            className="px-8 py-4 mb-5"
            style={{ backgroundColor: "#FFF1E9" }}
          >
            <div className="flex">
              <img src="imgs/icons/jaqueSelected.svg" alt="authentication" />
              <div className="px-3 mt-2">
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "18px",
                  }}
                >
                  Jaqueline
                </p>
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  3h
                </p>
              </div>
            </div>
            <p
              className="mt-3 mb-1"
              style={{
                fontFamily: "Josefin Sans",
                fontSstyle: "normal",
                fontSize: "14px",
                lineHeight: "125.1%",
              }}
            >
              Essa compra que você acabou de fazer poderia te render 1000
              milhas!!
              <br />
              Não sabe como?
            </p>

            <div style={{ textAlign: "right" }}>
              <button
                className="px-4 py-1"
                style={{
                  color: "white",
                  background: "#F57921",
                  borderRadius: "28px",
                }}
                onClick={() => Router.push("/jaqueChat")}
              >
                Vamos conversar
              </button>
            </div>
          </div>

          <div
            className="px-8 py-4 mb-5"
            style={{ backgroundColor: "#FFF1E9" }}
          >
            <div className="flex">
              <img src="imgs/icons/jaqueSelected.svg" alt="authentication" />
              <div className="px-3 mt-2">
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "18px",
                  }}
                >
                  Jaqueline
                </p>
                <p
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSstyle: "normal",
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  3h
                </p>
              </div>
            </div>
            <p
              className="mt-3 mb-1"
              style={{
                fontFamily: "Josefin Sans",
                fontSstyle: "normal",
                fontSize: "14px",
                lineHeight: "125.1%",
              }}
            >
              Vai ao posto de gasolina? Não esqueça de usar seu cartão de
              crédito para acumular milhas!!
              <br />
              Não sabe como?
            </p>

            <div style={{ textAlign: "right" }}>
              <button
                className="px-4 py-1"
                style={{
                  color: "white",
                  background: "#F57921",
                  borderRadius: "28px",
                }}
                onClick={() => Router.push("/jaqueChat")}
              >
                Vamos conversar
              </button>
            </div>
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
                src="imgs/icons/jaqueSelected.svg"
                alt="authentication"
              />
              <img
                style={{ height: "25px", width: "auto" }}
                onClick={() => Router.push("/home")}
                src="imgs/icons/dash.svg"
                alt="authentication"
              />
              <img
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
        </div>
      </ContainerPagesComponent>
    </>
  );
};
