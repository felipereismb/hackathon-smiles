import React from "react";

import { Card, ProgressBar, Progress, ContainerBar } from "./styles";

const HomeComponent = () => {
  return (
    <>
      <div className="container mx-auto px-2 pt-12">
        <div className="flex gap-x-4">
          <Card>
            <p>Sonho</p>
            <div>50.000 m</div>
          </Card>
          <Card>
            <p>Mensal</p>
            <div>4.166 m</div>
          </Card>
          <Card>
            <p>Anual</p>
            <div>12.500 m</div>
          </Card>
        </div>

        <ContainerBar className="mt-12">
          <p>5%</p>
          <ProgressBar>
            <Progress />
          </ProgressBar>
        </ContainerBar>

        <ContainerBar className="mt-12">
          <p>Meta de Março</p>
        </ContainerBar>
      </div>
    </>
  );
};

export default HomeComponent;
