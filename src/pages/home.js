import React from "react";

import HeaderComponent from "app/components/UI/header";
import ContainerPagesComponent from "app/components/UI/containerPages";

import HomeScreen from "app/screens/home";

export default () => {
  return (
    <>
      <HeaderComponent />

      <ContainerPagesComponent>
        <HomeScreen />
      </ContainerPagesComponent>
    </>
  );
};
