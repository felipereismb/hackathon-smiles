import React, { useState } from "react";
import Router from "next/router";

import {
  Balao,
  Value,
  Arrow,
  ArrowText,
  Input,
  ArrowContinue,
  ArrowTextContinue,
  Objetivo,
  Loading,
} from "./styles";

const Intro = () => {
  const [steps, setSteps] = useState(0);

  return (
    <div
      className="h-screen w-screen relative overflow-hidden	"
      style={{
        background: "linear-gradient(180deg, #FF4C00 0%, #F57921 100%)",
      }}
    >
      {steps < 3 && (
        <>
          <Value step={steps}>
            {steps === 0 && <>S</>}
            {steps !== 0 && <>{steps}</>}
          </Value>
        </>
      )}

      <div className="flex flex-col">
        <img
          src="imgs/logo/logo-smiles-branco.svg"
          alt="logo Smiles"
          style={{ height: "81px", marginTop: "24px" }}
        />

        {steps < 4 && (
          <Balao step={steps}>
            {steps === 0 && (
              <>Olá, eu sou a Jaque e vou te ajudar a alcançar o seus sonhos!</>
            )}
            {steps === 1 && (
              <>
                Para começarmos, preciso te conhecer melhor!
                <br />
                <br />
                Para onde você deseja ir?
              </>
            )}
            {steps === 2 && <>Em quanto tempo você pretende sair de viagem?</>}
            {steps === 3 && (
              <>Aqui está o resumo do seu planejamento anual !!!</>
            )}
            {steps === 4 && (
              <>
                Aguarde um momento para que eu possa memorizar seu planejamento!
                É coisa rápida.
              </>
            )}
          </Balao>
        )}

      </div>

      {steps === 0 && (
        <>
          <ArrowText onClick={() => setSteps(1)}>Vamos lá!</ArrowText>
          <Arrow onClick={() => setSteps(1)} />
          <img
            className="absolute bottom-0"
            src="imgs/avatar/jaquelineCorpo.svg"
            alt="authentication"
            style={{
              height: "555px",
              width: "auto",
              left: "-20px",
              bottom: "-28px",
            }}
          />
        </>
      )}

      {steps === 1 && (
        <>
          <ArrowTextContinue step={steps} onClick={() => setSteps(2)}>
            Continuar
          </ArrowTextContinue>
          <ArrowContinue step={steps} onClick={() => setSteps(2)} />

          <img
            className="absolute bottom-0"
            src="imgs/avatar/jaquelineCorpo.svg"
            alt="authentication"
            style={{
              left: "2.67%",
              right: "50.13%",
              top: "41.26%",
              bottom: "19.58%",
              width: "177px",
              height: "318px",
            }}
          />

          <div
            className="absolute flex flex-col items-center justify-center w-full"
            style={{ top: "620px" }}
          >
            <p
              style={{
                fontstyle: "normal",
                fontweight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#161616",
                marginLeft: "15px",
              }}
            >
              Digite a localização
            </p>
            <Input />
          </div>
        </>
      )}

      {steps === 2 && (
        <>
          <ArrowTextContinue step={steps} onClick={() => setSteps(3)}>
            Continuar
          </ArrowTextContinue>
          <ArrowContinue step={steps} onClick={() => setSteps(3)} />

          <img
            className="absolute bottom-0"
            src="imgs/avatar/jaquelineCorpo.svg"
            alt="authentication"
            style={{
              left: "2.67%",
              right: "50.13%",
              top: "32%",
              bottom: "22.54%",
              width: "192px",
              height: "395px",
            }}
          />

          <div
            className="absolute flex flex-col items-center justify-center w-full"
            style={{ top: "620px" }}
          >
            <p
              style={{
                fontstyle: "normal",
                fontweight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#161616",
                marginLeft: "20px",
              }}
            >
              Escolha o período
            </p>
            <Input type="date" />
          </div>
        </>
      )}

      {steps === 3 && (
        <>
          <ArrowTextContinue
            step={steps}
            onClick={() => {
              setSteps(4);
              setTimeout(() => {
                setSteps(5);
                setTimeout(() => {
                  Router.push("/home");
                }, 2000);
              }, 2000);
            }}
          >
            Confirmar e continuar
          </ArrowTextContinue>
          <ArrowContinue
            step={steps}
            onClick={() => {
              setSteps(4);
              setTimeout(() => {
                setSteps(5);
                setTimeout(() => {
                  Router.push("/home");
                }, 2000);
              }, 2000);
            }}
          />

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
            <Objetivo>Objetivo: Salvador BA</Objetivo>
            <Objetivo>Quando: em 1 ano</Objetivo>
            <Objetivo>Milhas: 50.000 </Objetivo>
            <Objetivo>Mensal: 4166 milhas</Objetivo>
          </div>
        </>
      )}

      {steps === 4 && (
        <>
          <img
            className="absolute"
            src="imgs/avatar/jaquelineCorpo.svg"
            alt="authentication"
            style={{
              minWidth: "530px",
              left: "-15px",
            }}
          />
        </>
      )}

      {steps === 5 && (
        <Loading>
          Aguarde...
          <div></div>
          <div></div>
          <div></div>
        </Loading>
      )}
    </div>
  );
};

export default Intro;
