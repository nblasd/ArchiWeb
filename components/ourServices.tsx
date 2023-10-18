import React from "react";
import Image from "next/image";

function OurServices() {
  return (
    <main>
      <div className="ourServiceBg w-full h-auto flex flex-col items-center">
        <h1 className="heroHeading font-bold mt-5">Our Services</h1>
        <div className="flex justify-between items-center mb-10 flex-col sm:flex-row px-40 mt-20 w-full">
          <div className="w-fit flex flex-col items-center justify-center">
            <Image
              src="/assets/file.png"
              width={103}
              height={103}
              alt="Picture of the author"
            />
            <h1 className="planning font-bold">Planning</h1>
            <p className="pl-2 text-[13px]">Our Services Line one </p>
            <p className="pl-2 text-[13px]"> Servive line two</p>
          </div>

          <div className="w-fit flex flex-col items-center justify-center">
            <Image
              src="/assets/home-icon.png"
              width={103}
              height={103}
              alt="Picture of the author"
            />
            <h1 className="planning font-bold">Interior</h1>
            <p className="pl-2 text-[13px]">Our Services Line one </p>
            <p className="pl-2 text-[13px]"> Servive line two</p>
          </div>

          <div className="w-fit flex flex-col items-center justify-center">
            <Image
              src="/assets/pen-icon.png"
              width={103}
              height={103}
              alt="Picture of the author"
            />
            <h1 className="planning font-bold">Exterior</h1>
            <p className="pl-2 text-[13px]">Our Services Line one </p>
            <p className="pl-2 text-[13px]"> Servive line two</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OurServices;
