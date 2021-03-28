import React from "react";

const HeaderComponent = () => {
  return (
    <div
      style={{ backgroundColor: "#FF4C00", color: "white", height: '96px' }}
      className="absolute w-full top-0 flex items-center px-2 md:px-8"
    >
      <img
        className="cursor-pointer"
        src="imgs/logo/logo-smiles.svg"
        alt="authentication"
        style={{ height: "35px", width: "auto" }}
      />
    </div>
  );
};

export default HeaderComponent;
