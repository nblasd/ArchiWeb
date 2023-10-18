"use client";
import React, { useState } from "react";
import Image from "next/image";

function Testimonial() {
  const profile = [
    {
      img: "/assets/profile/img1.png",
      heading: "James Passaquindici Arcand",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
    {
      img: "/assets/profile/img2.png",
      heading: "Abram Schleifer",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
  ];

  const [activeProfile, setActiveProfile] = useState(0);

  const handleDotClick = (index: number ) => {
    setActiveProfile(index);
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-20">
        {/* Heading */}
        <div>
          <h1 className="heroHeading font-semibold">Testimonial</h1>
        </div>
        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center mt-14 justify-between gap-20 md:gap-40">
          {profile.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${
                index === activeProfile ? "visible" : "invisible"
              }`}
            >
              <Image
                src={item.img}
                width={151}
                height={151}
                alt="Picture of the author"
              />
              <div className="pl-5 md:pl-10">
                <h1 className="lastpartHeading font-semibold">
                  {item.heading}
                </h1>
                <p className="w-[150px] md:w-[300px]">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots */}
        <div className="flex gap-5 mt-8">
          {profile.map((_, index) => (
            <div
              key={index}
              className={`circle hover:bg-slate-500 hover:scale-125 duration-300 ${
                index === activeProfile ? "bg-slate-500 scale-125" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Testimonial;
