import React from "react";
import SignInCard from "../sign-in-card/sign-in-card";

const Intro = () => {
  return (
    <div
      className={`bg-brown flex items-center justify-center mx-auto w-2/3 my-16 lg:p-16 flex-col  sm:p-8 rounded rounded-[10px]`}
    >
      <p className="font-roboto sm:text-1xl lg:text-2xl text-center">
        Treba ti termin za šminkanje za posebnu priliku ili jednostavno želiš da
        uljepšaš nekom dan i pokloniš poklon bon za neki odabrani look? Na
        pravom si mjestu onda.
      </p>
      <SignInCard />
    </div>
  );
};

export default Intro;
