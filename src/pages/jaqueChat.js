import React, { useState } from "react";
import Router from "next/router";

const BalaoJaque = ({ children }) => {
  return (
    <div
      className="px-4 py-2 my-3"
      style={{
        width: "90%",
        backgroundColor: "white",
        borderRadius: "15px",
        borderTopLeftRadius: "0px",
      }}
    >
      {children}
    </div>
  );
};

const BalaoUsuario = ({ children }) => {
  return (
    <div
      className="px-4 py-2 mb-3 mt-8"
      style={{
        width: "90%",
        backgroundColor: "#F57921",
        color: "white",
        borderRadius: "20px",
        borderTopRightRadius: "0px",
        marginLeft: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default () => {
  const [steps, setSteps] = useState(0);

  return (
    <>
      <div
        className="fixed w-full px-4 py-5"
        style={{
          backgroundColor: "#FFF1E9",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <img
          onClick={() => Router.push("/jaqueDicas")}
          src="imgs/arrowBack.svg"
          alt="authentication"
        />
      </div>

      <div
        className="h-screen"
        style={{ padding: "70px 15px", backgroundColor: "#FFF1E9" }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            borderRadius: "50%",
            backgroundColor: "white",
            height: "70px",
            width: "60px",
          }}
        >
          <img
            style={{ height: "50px", width: "auto" }}
            onClick={() => Router.push("/jaqueDicas")}
            src="imgs/icons/jaqueSelected.svg"
            alt="authentication"
          />
        </div>

        {steps >= 0 && (
          <>
            <BalaoJaque>
              Vai ao posto de gasolina? Não esqueça de usar seu cartão Go Smiles
              para acumular milhas!! Não sabe como?
            </BalaoJaque>

            <BalaoJaque>
              Ao utilizar o cartão de crédito Go Smiles em postos credenciados,
              você ganha milhas e elas ajudam você a realizar o seus sonhos
            </BalaoJaque>
          </>
        )}

        {steps >= 1 && <BalaoUsuario>Me fala mais sobre isso</BalaoUsuario>}

        {steps === 2 && <BalaoJaque> . . . </BalaoJaque>}

        {steps >= 3 && (
          <BalaoJaque>
            A cada R$50,00 pagos com o cartão Go Smiles você recebe 7 milhas! 🤓
          </BalaoJaque>
        )}

        {steps >= 4 && <BalaoUsuario>Bom Saber</BalaoUsuario>}

        {steps === 5 && <BalaoJaque> . . . </BalaoJaque>}

        {steps >= 6 && (
          <BalaoJaque>
            Agora que você já sabe fica muito mais fácil alcançar suas metas e
            realizar seus sonhos!
          </BalaoJaque>
        )}
      </div>

      {steps !== 6 && (
        <div
          className="fixed bottom-0 w-full px-4 py-5"
          style={{
            backgroundColor: "#FFF1E9",
            borderTop: "1px solid #e5e5e5",
          }}
        >
          {steps <= 2 && (
            <>
              <button
                className="px-4 py-1 w-full"
                style={{
                  color: "white",
                  background: "#F57921",
                  borderRadius: "28px",
                }}
                onClick={() => {
                  setSteps(1);
                  setTimeout(() => {
                    setSteps(2);
                    setTimeout(() => {
                      setSteps(3);
                    }, 1000);
                  }, 500);
                }}
              >
                Me fala mais sobre isso
              </button>
            </>
          )}

          {steps > 2 && (
            <>
              <button
                className="px-4 py-1 w-full"
                style={{
                  color: "white",
                  background: "#F57921",
                  borderRadius: "28px",
                }}
                onClick={() => {
                  setSteps(4);
                  setTimeout(() => {
                    setSteps(5);
                    setTimeout(() => {
                      setSteps(6);
                    }, 1000);
                  }, 500);
                }}
              >
                Bom Saber!
              </button>
            </>
          )}
        </div>
      )}

      {steps === 6 && (
        <div
          className="fixed bottom-0 w-full"
          style={{
            backgroundColor: "#FFF1E9",
            borderTop: "1px solid #e5e5e5",
          }}
        >
          <img
            onClick={() => Router.push("/jaqueDicas")}
            src="imgs/ajudeAJaque.svg"
            alt="ajudeAJaque"
          />
        </div>
      )}
    </>
  );
};
