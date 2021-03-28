import React, { useState } from "react";
import Router from "next/router";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

import {
  Balao,
  Value,
  Arrow,
  ArrowBack,
  ArrowText,
  Input,
  ArrowContinue,
  ArrowTextContinue,
  Objetivo,
  Loading,
} from "./styles";

const Intro = () => {
  const [steps, setSteps] = useState(0);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const formatInputValue = () => {
    if (!selectedDayRange.from || !selectedDayRange.to) return "";
    console.log(selectedDayRange.from);
    return `${selectedDayRange.from.day}/${selectedDayRange.from.month}/${selectedDayRange.from.year}  - ${selectedDayRange.to.day}/${selectedDayRange.to.month}/${selectedDayRange.to.year} `;
  };

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

        {steps < 8 && (
          <Balao step={steps}>
            {steps === 0 && (
              <>
                Olá, eu sou a Jaque e vou te ajudar a{" "}
                <span style={{ color: "#FF4C00" }}>
                  realizar os seus sonhos!
                </span>
              </>
            )}
            {steps === 1 && (
              <>
                Para começarmos, preciso te conhecer melhor!
                <br />
                <span style={{ color: "#FF4C00" }}>Qual é o seu sonho?</span>
                <br />
                Se for viajar, digite abaixo o seu destino:
              </>
            )}
            {steps === 2 && (
              <>
                Quando você pretende viajar? <br /> Escolha um período de ida e
                retorno.
              </>
            )}
            {steps === 3 && (
              <>
                De acordo com suas informações, seu{" "}
                <span style={{ color: "#FF4C00" }}> sonho </span> necessita de
                50.000 milhas, parece muito, mas calma.... <br />
                Eu tenho a solução...
              </>
            )}
            {steps === 4 && (
              <>
                Com seus gastos do dia-a-dia é possível ganhar milhas e acumular
                em seu planejamento
              </>
            )}
            {steps === 5 && (
              <>
                Você também
                <span style={{ color: "#FF4C00" }}> pode aculumar milhas </span>
                usando seu em nossos parceiros!
              </>
            )}
            {steps === 6 && (
              <>Aqui está o resumo do seu planejamento anual !!!</>
            )}
            {steps === 7 && (
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
          <ArrowBack onClick={() => setSteps(0)} />

          <ArrowTextContinue step={steps} onClick={() => setSteps(2)}>
            Próximo
          </ArrowTextContinue>
          <ArrowContinue step={steps} onClick={() => setSteps(2)} />

          <div
            style={{ width: "230px", marginLeft: "auto", marginTop: "-100px" }}
          >
            <Balao>
              Vovê também pode digitar o nome de outro sonho por exemplo :
              “Liquidificador”{" "}
            </Balao>
          </div>

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
              Digite aqui
            </p>
            <Input />
          </div>
        </>
      )}
      {steps === 2 && (
        <>
          <ArrowBack onClick={() => setSteps(1)} />

          <ArrowTextContinue step={steps} onClick={() => setSteps(3)}>
            Próximo
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
            <DatePicker
              value={selectedDayRange}
              onChange={setSelectedDayRange}
              inputClassName="calendar"
              inputPlaceholder=" "
              formatInputText={formatInputValue}
            />
          </div>
        </>
      )}
      {steps === 3 && (
        <>
          <ArrowBack onClick={() => setSteps(2)} />

          <ArrowTextContinue step={steps} onClick={() => setSteps(4)}>
            Próximo
          </ArrowTextContinue>
          <ArrowContinue step={steps} onClick={() => setSteps(4)} />

          <div style={{ width: "230px", marginLeft: "auto" }}>
            <Balao>Fica comigo que eu vou te mostrar!!</Balao>
          </div>
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
        </>
      )}
      {steps === 4 && (
        <>
          <ArrowBack onClick={() => setSteps(3)} />

          <ArrowTextContinue step={steps} onClick={() => setSteps(5)}>
            Próximo
          </ArrowTextContinue>
          <ArrowContinue step={steps} onClick={() => setSteps(5)} />

          <div
            className="absolute"
            style={{
              width: "290px",
              marginTop: "-90px",
              zIndex: "999",
              right: "0px",
            }}
          >
            <Balao>
              Comprando em no
              <span style={{ color: "#FF4C00" }}> shopping Smiles </span>a mesma
              coisa que você compraria em outras lojas
            </Balao>
          </div>
          <div
            className="absolute"
            style={{
              width: "230px",
              right: "0px",
              marginTop: "40px",
              zIndex: "9999",
            }}
          >
            <Balao>
              Você pode comprar aqui e ainda{" "}
              <span style={{ color: "#FF4C00" }}> acumular milhas!!! </span>
            </Balao>
          </div>

          <img
            className="absolute"
            src="imgs/avatar/jaquelineCorpo.svg"
            alt="authentication"
            style={{
              width: "330px",
              left: "-50px",
              bottom: "-95px",
              zIndex: "1",
            }}
          />
        </>
      )}
      {steps === 5 && (
        <>
          <ArrowBack onClick={() => setSteps(4)} />

          <ArrowText shopping onClick={() => setSteps(5)}>
            Ir para o <br />
            Shopping Smiles
          </ArrowText>
          <Arrow shopping onClick={() => setSteps(5)} />

          <ArrowTextContinue
            cor="roxo"
            step={steps}
            onClick={() => setSteps(6)}
          >
            Continuar para o plano
          </ArrowTextContinue>
          <ArrowContinue cor="roxo" step={steps} onClick={() => setSteps(6)} />

          <div
            className="absolute"
            style={{
              width: "290px",
              marginTop: "-90px",
              zIndex: "999",
              right: "0px",
            }}
          >
            <Balao>
              Indo de Uber, com
              <span style={{ color: "#FF4C00" }}> Uber </span>
              <span style={{ color: "#FF4C00" }}> aluguel </span> inclusive
              <span style={{ color: "#FF4C00" }}> reservas de hotel </span>
              que possívelmente você coisa que você compraria em outras lojas
            </Balao>
          </div>
          <div
            className="absolute"
            style={{
              width: "230px",
              right: "0px",
              marginTop: "70px",
              zIndex: "9999",
            }}
          >
            <Balao>
              irá precisar.
              <div className="mt-5">
                temos
                <span style={{ color: "#FF4C00" }}> TUDO </span>
                aqui!
              </div>
            </Balao>
          </div>

          <img
            className="absolute"
            src="imgs/avatar/jaquelineCorpo.svg"
            alt="authentication"
            style={{
              width: "330px",
              left: "-50px",
              bottom: "-95px",
              zIndex: "1",
            }}
          />
        </>
      )}
      {steps === 6 && (
        <>
          <ArrowBack onClick={() => setSteps(5)} />

          <ArrowTextContinue
            step={steps}
            onClick={() => {
              setSteps(7);
              setTimeout(() => {
                setSteps(8);
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
              setSteps(7);
              setTimeout(() => {
                setSteps(8);
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
      {steps === 7 && (
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
      {steps === 8 && (
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
