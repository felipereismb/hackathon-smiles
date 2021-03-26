import React from "react";
import ScreenHome from "app/screens/home/home";

export default () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(imgs/backgrounds/intro.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "contain",
        }}
      >
        <ScreenHome />
      </div>
    </>
  );
};
