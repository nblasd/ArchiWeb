import React from "react";
import Image from "next/image";
import OurServices from "./ourServices";

function Hero() {
  return (
    <main id="hero">
      <div className="h-auto w-full flex flex-col md:flex-row mt-32 items-center ">
        {/* Left side */}
        <div className="bg-white/50  w-fit md:w-[40%] h-[50%] flex flex-col items-center justify-center">
          <div className="w-[90%] md:w-[50%]">
            <h1 className="heroHeading font-bold">
              Best Solution For Your Home
            </h1>
          </div>
          <div className="w-[90%] md:w-[50%]">
            <p className="heropara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet{" "}
            </p>
          </div>
        </div>

        {/* Right side */}

        <div className="w-fit"> 
          <Image
            src="/assets/home.png"
            width={1150}
            height={739}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* Our services */}
      <div>
        <OurServices />
      </div>
    </main>
  );
}

export default Hero;
