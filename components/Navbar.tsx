"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main>
      <div className="fixed top-0 left-0 bg-white flex justify-between items-center w-full  h-24 px-5 shadow-md">
        <div>
          <Link href="/">
            <h1 className="logo cursor-pointer">ArchiWeb</h1>
          </Link>
        </div>

        <div className="hidden  sm:flex ">
          <a href="/#hero">
            <p className="navBarLinks px-5 hover:underline">Home</p>
          </a>
          <a href="/#projects">
            <p className="navBarLinks px-5 hover:underline">Projects</p>
          </a>
          <a href="/#about">
            <p className="navBarLinks px-5 hover:underline">About</p>
          </a>
          <a href="/#footer">
            <p className="navBarLinks px-5 hover:underline">Contact</p>
          </a>
          <span className="hover:scale-150 duration-500">
            <AiOutlineSearch size={25} />
          </span>
        </div>
        <div onClick={navHandler} className="sm:hidden">
          <GiHamburgerMenu size={30} />
        </div>
      </div>

      {/* Mobile menu */}

      <div
        className={
          menuOpen
            ? "absolute top-[0] left-[0] w-[75%] bg-slate-200 h-screen ease-in duration-700"
            : "hidden"
        }
      >
        {/* Logo */}
        <div className=" flex items-center justify-between my-2 mx-2">
          <a href="/">
            <h1 className="logo">ArchiWeb</h1>
          </a>
          <div onClick={navHandler}>
            {" "}
            <ImCross size={25} />
          </div>
        </div>
        {/* Links section */}

        <div className="flex flex-col ">
          <a
           href="/#hero">
            <p className="navBarLinks py-10 px-5 hover:underline">Home</p>
          </a>
          <a href="/#projects">
            <p className="navBarLinks py-10 px-5 hover:underline">Projects</p>
          </a>
          <a
           href="/#about">
            <p className="navBarLinks py-10 px-5 hover:underline">About</p>
          </a>
          <a
           href="/#footer">
            <p className="navBarLinks py-10 px-5 hover:underline">Contact</p>
          </a>
        </div>
        {/* Social icons */}

        <div className="flex justify-between items-center px-5 mt-24">
          <div className="hover:scale-150 duration-700">
            <FaInstagram size={30} color="black" />
          </div>
          <div className="hover:scale-150 duration-700">
            <FaFacebook size={30} color="black" />
          </div>
          <div className="hover:scale-150 duration-700">
            {" "}
            <FaTwitter size={30} color="black" />
          </div>
          <div className="hover:scale-150 duration-700">
            {" "}
            <FaLinkedin size={30} color="black" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
