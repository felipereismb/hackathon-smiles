import React from "react";

import Header from "app/components/UI/header";
import ContainerPages from "app/components/UI/containerPages";

import ScreenIntro from "app/screens/intro";

export default () => {
  return (
    <>
      <Header />
      <ContainerPages>
        <ScreenIntro />
      </ContainerPages>
    </>
  );
};
