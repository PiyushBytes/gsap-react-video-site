import React from "react";
import Video from "./Video";

const HomeHerotext = () => {
  return (
    <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                msit
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                Art
                <div className='h-[7vw]  rounded-full mt-3 overflow-hidden '>
                    <Video />
                </div>
                creative
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                club
            </div>
        </div>
  );
};

export default HomeHerotext;
