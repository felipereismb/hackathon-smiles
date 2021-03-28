import React, { useState } from "react";
import Router from "next/router";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

import {
  Value,
  Input,
  ArrowTextContinue,
  ArrowContinue,
  Objetivo,
  Balao,
} from "app/screens/intro/styles";

export default () => {
  const [steps, setSteps] = useState(0);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const formatInputValue = () => {
    if (!selectedDayRange.from ||!selectedDayRange.to) return "";
    console.log(selectedDayRange.from);
    return `${selectedDayRange.from.day}/${selectedDayRange.from.month}/${selectedDayRange.from.year}  - ${selectedDayRange.to.day}/${selectedDayRange.to.month}/${selectedDayRange.to.year} `;
  };

  return (
    <>
      <div
        className="h-screen w-screen relative overflow-hidden	"
        style={{
          background: "linear-gradient(180deg, #FF4C00 0%, #F57921 100%)",
        }}
      >
        {steps !== 6 && (
          <>
            <Value step={0}>S</Value>
            <div
              className="relative flex flex-col justify-center items-center"
              style={{ zIndex: "999" }}
            >
              <img
                src="imgs/logo/logo-smiles-branco.svg"
                alt="logo Smiles"
                style={{ height: "81px", marginTop: "24px" }}
              />

              <p
                className="py-5"
                style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}
              >
                Cadastrar um sonho!
              </p>

              <div className="flex flex-col py-4 ">
                <span style={{ fontSize: "20px", color: "white" }}>
                  Para onde deseja viajar?
                </span>
                <Input />
              </div>

              <div className="flex flex-col py-4">
                <span style={{ fontSize: "20px", color: "white" }}>
                  Escolha o período:
                </span>
                {/* <Input type="date" /> */}

                <DatePicker
                  value={selectedDayRange}
                  onChange={setSelectedDayRange}
                  inputClassName="calendar"
                  inputPlaceholder=" "
                  formatInputText={formatInputValue}
                />
              </div>

              <button
                className="px-4 py-3 w-4/5 mt-12"
                style={{
                  color: "white",
                  background: "#FF4C00",
                  borderRadius: "28px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
                onClick={() => setSteps(6)}
              >
                Confirmar e continuar
              </button>
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
                  style={{ height: "30px", width: "auto" }}
                  onClick={() => Router.push("/jaqueDicas")}
                  src="imgs/icons/jaque.svg"
                  alt="authentication"
                />
                <img
                  style={{ height: "25px", width: "auto" }}
                  onClick={() => Router.push("/home")}
                  src="imgs/icons/dash.svg"
                  alt="authentication"
                />
                <img
                  onClick={() => Router.push("/novoSonho")}
                  style={{ height: "20px", width: "auto" }}
                  src="imgs/icons/novoSelected.svg"
                  alt="authentication"
                />
                <img
                  style={{ height: "20px", width: "auto" }}
                  src="imgs/icons/shopping.svg"
                  alt="authentication"
                />
              </div>
            </div>
          </>
        )}

        {steps === 6 && (
          <>
            <div
              className="relative flex flex-col justify-center items-center"
              style={{ zIndex: "999" }}
            >
              <img
                src="imgs/logo/logo-smiles-branco.svg"
                alt="logo Smiles"
                style={{ height: "81px", marginTop: "24px" }}
              />

              <Balao step={steps}>
                Aqui está o resumo do seu planejamento anual !!!
              </Balao>
            </div>

            <ArrowTextContinue step={6} onClick={() => Router.push("/home")}>
              Confirmar e continuar
            </ArrowTextContinue>
            <ArrowContinue step={6} onClick={() => Router.push("/home")} />

            <img
              className="absolute"
              src="imgs/avatar/jaquelineCorpo.svg"
              alt="authentication"
              style={{
                width: "330px",
                left: "-50px",
                bottom: "-95px",
              }}
            />

            <div
              className="absolute flex flex-col right-0 gap-y-2"
              style={{ bottom: "230px" }}
            >
              <Objetivo>Objetivo: Sabará MG</Objetivo>
              <Objetivo>Quando: em 1 ano</Objetivo>
              <Objetivo>Milhas: 50.000 </Objetivo>
              <Objetivo>Mensal: 4166 milhas</Objetivo>
            </div>
          </>
        )}
      </div>
    </>
  );
};
