import React from "react";

const Intro = () => {
  return (
    <div className="">
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{
          color: "#3B3B3B",
          backgroundImage: "url(imgs/backgrounds/aviao.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
          height: "491px",
          fontSize: "36px",
        }}
      >
        <p>
          Torne seus colaboradores{" "}
          <span style={{ fontWeight: "bold" }}>mais felizes</span>
          <br />
          através do benefício de viagens
        </p>
        <button className="px-8 mt-4 rounded-full text-white">
          Saiba mais
        </button>
      </div>

      <div className="container p-24 grid grid-flow-col grid-cols-2">
        <div>
          <h1 style={{ color: "#7C7C7C", fontSize: "36px" }}>
            Promova um{" "}
            <span style={{ color: "#70009B", fontWeight: "bold" }}>
              ambiente feliz e produtivo{" "}
            </span>
            para seus colaboradores
          </h1>
          <p className="mt-6" style={{ color: "#3B3B3B" }}>
            Ofereça aos seus colaboradores acesso à milhares de produtos, como
            passagens, eletrodomésticos, combustível e muito mais. Tudo isso com
            uma única assinatura mensal.
          </p>
        </div>
        <div className="ml-5">
          <img
            src="imgs/backgrounds/ambienteProdutivo.png"
            alt="authentication"
            style={{ height: "303px", width: "auto" }}
          />
        </div>
      </div>

      <div className="py-12 flex flex-col items-center justify-center">
        <p style={{ color: "#7C7C7C", fontSize: "36px" }}>
          Planos para empresas de todos os tamanhos
        </p>

        <div className="flex mt-12 gap-x-10">
          <div
            className="flex p-8 px-16 flex-col items-center justify-center"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
              borderRadius: "23px",
            }}
          >
            <img src="imgs/icons/building1.svg" alt="" />

            <p className="py-8 text-center">
              Pequena <br />
              11 colaboradores
            </p>

            <p className="py-6">R$ 500,00/ mensal</p>

            <button className="px-8 py-1 mt-4 rounded-full text-white">
              Eu quero
            </button>
          </div>

          <div
            className="flex p-8 px-16 flex-col items-center justify-center"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
              borderRadius: "23px",
            }}
          >
            <img src="imgs/icons/building2.svg" alt="" />

            <p className="py-8 text-center">
              Média <br />
              +11 colaboradores
            </p>

            <p className="py-6">Simule</p>

            <button className="px-8 py-1 mt-4 rounded-full text-white">
              Eu quero
            </button>
          </div>

          <div
            className="flex p-8 px-16 flex-col items-center justify-center"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
              borderRadius: "23px",
            }}
          >
            <img src="imgs/icons/building3.svg" alt="" />

            <p className="py-8 text-center">
              Grandes <br />
              +500 colaboradores
            </p>

            <p className="py-6">Simule</p>

            <button className="px-8 py-1 mt-4 rounded-full text-white">
              Eu quero
            </button>
          </div>
        </div>

        <img className="mt-32" src="imgs/backgrounds/pqValeMilhas.png" alt="" />
      </div>

      <img className="mt-12" src="imgs/backgrounds/footer.png" alt="" />
    </div>
  );
};

export default Intro;
