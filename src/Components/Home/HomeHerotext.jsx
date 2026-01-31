import React from "react";
import Video from "./Video";

const HomeHerotext = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw]">L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center">
        qui
        <div className="h-[10vw] w-[10vw]">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">la créativité</div>
    </div>
  );
};

export default HomeHerotext;
