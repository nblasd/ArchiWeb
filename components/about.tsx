import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <main id="about">
      <div className="flex w-full flex-col md:flex-row justify-between items-center px-20 h-auto mt-20">
        {/* left side */}
        <div className="w-[360px] md:w-[750px]" >
          <Image
            src="/assets/map.png"
            width={735}
            height={571}
            alt="Picture of the author"
          />
        </div>

        {/* Right side */}
        <div className="w-[360px] md:w-fit md:ml-20 ">
          <h1 className="heroHeading font-bold">About Us</h1>
          <p className="heropara py-5">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam,
            purus sit amet luctus <br /> venenatis, lectus magna fringilla <br /> urna,
            porttitor
          </p>
          <Link href="/" className="font-bold hover:underline">Read more</Link>
        </div>
      </div>
    </main>
  );
}

export default About;
