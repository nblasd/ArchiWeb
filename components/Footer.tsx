import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
function Footer() {
  return (
    <main id="footer">
      <div className="bg-[#2E2F32] mt-20 content-center">
        <div className="grid grid-cols-1 md:grid-cols-4 content-center mx-10">
          <div className="mt-10">
            <h1 className="footerLogo">ArchiWeb</h1>
            <p className="footerPara mt-5">
              Archiweb is an architectural <br /> consultant based in Berlin,{" "}
              <br /> Germany. We provide solutions for <br /> your architecture
              and residential <br /> design
            </p>
            <div className="flex gap-5 mt-7">
              <BsFacebook color="white" size={25} />
              <AiOutlineTwitter color="white" size={25} />
              <AiOutlineInstagram color="white" size={25} />
            </div>
          </div>

          <div className="mt-12">
            <h1 className="footerHeading ">Articles</h1>
            <p className="footerPara mt-5">
              7 Tips for Kids Friendly <br /> Interior Design <br /> Smart Tips for Changing  <br /> a
              Room <br /> Eco-friendly design
            </p>
          </div>

          <div className="mt-12">
            <h1 className="footerHeading ">Links</h1>
            <p className="footerPara mt-5">
              Link 1 <br /> Link 2 <br /> Link 3
            </p>
          </div>

          <div className="mt-12">
            <h1 className="footerHeading ">Location</h1>
            <div>
              <Image
                src="/assets/Location.png"
                width={295}
                height={221}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
