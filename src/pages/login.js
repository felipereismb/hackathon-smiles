import React, { useEffect } from "react";
import SignIn from "app/screens/login/sign-in";

export default () => {
  useEffect(() => {
    window.onbeforeunload = null;
  }, []);
  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage: "url(imgs/backgrounds/intro.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen py-6 md:pt-32 flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </>
  );
};
