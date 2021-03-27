import React from "react";

import HeaderComponent from "app/components/UI/header";
import ContainerPagesComponent from "app/components/UI/containerPages";

import ScreenHome from "app/screens/home/home";

export default () => {
  return (
    <>
      <HeaderComponent />

      <ContainerPagesComponent>
        <ScreenHome />
      </ContainerPagesComponent>
    </>
  );
};
