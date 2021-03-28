import React from "react";
import Router from "next/router";

import { Card, ProgressBar, Progress, ContainerBar } from "./styles";

const HomeComponent = () => {
  return (
    <>
      <div className="container mx-auto px-2">
        <p
          className="py-5"
          style={{
            color: "#F57921",
            fontFamily: "Josefin Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          Salvador - BA
        </p>

        <div className="flex gap-x-4">
          <Card>
            <p>Sonho</p>
            <div>50.000 m</div>
          </Card>
          <Card>
            <p>Mensal</p>
            <div>4.166 m</div>
          </Card>
          <Card>
            <p>Atual</p>
            <div>12.500 m</div>
          </Card>
        </div>

        <ContainerBar className="mt-12">
          <p>5%</p>
          <ProgressBar>
            <Progress />
          </ProgressBar>
        </ContainerBar>

        <ContainerBar className="mt-12">
          <p>Meta de Março</p>

          <div className="flex gap-x-4 mt-4">
            <div
              className="flex flex-col items-center justify-center"
              onClick={() => Router.push("/detailUber")}
            >
              <img src="imgs/progress/uber.svg" alt="authentication" />
              <p className="mt-2">Uber</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="imgs/progress/celular.svg" alt="authentication" />
              <p className="mt-2">Celular</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="imgs/progress/detergente.svg" alt="authentication" />
              <p className="mt-2">Detergente</p>
            </div>
          </div>
        </ContainerBar>

        <ContainerBar className="mt-20">
          <p>Histórico Mensal</p>

          <img src="imgs/graficoDash.svg" alt="authentication" />

          <div style={{ height: "100px" }} />
        </ContainerBar>
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
            style={{ height: "20px", width: "auto" }}
            onClick={() => Router.push("/novoSonho")}
            src="imgs/icons/novo.svg"
            alt="authentication"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            onClick={() => Router.push("/jaqueDicas")}
            src="imgs/icons/shopping.svg"
            alt="authentication"
          />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
