import React, { useState } from "react";
const HeaderComponent = () => {

  return (
    <div
      style={{ backgroundColor: "#70009B", color: "white", height: "60px" }}
      className="flex items-center px-4 md:px-8"
    >
      <img
        className="cursor-pointer"
        src="imgs/logo/logo-smiles-branco.svg"
        alt="authentication"
        style={{ height: "40px", width: "auto" }}
      />
    </div>
  );
};

export default HeaderComponent;
