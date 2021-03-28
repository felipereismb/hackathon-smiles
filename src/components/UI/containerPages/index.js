import React from "react";

const ContainerPagesComponent = ({ children }) => {
  return (
    <div className="h-screen" style={{ paddingTop: "96px" }}>
      {children}
    </div>
  );
};

export default ContainerPagesComponent;
