"use client";
import React, { useState } from "react";
import Image from "next/image";
function Projects() {
  const [btncontrole, setbtncontrole] = useState("All");

 

  const images = [
    {
      key: "All Furniture",
      img: "/assets/projects/project1.png",
      name: "Our Services Line one",
      name2: "Servive line two",
    },
    {
      key: "All Furniture",
      img: "/assets/projects/project2.png",
      name: "Our Services Line one",
      name2: "Servive line two",
    },
    {
      key: "All Design",
      img: "/assets/projects/project3.png",
      name: "Our Services Line one",
      name2: "Servive line two",
    },
    {
      key: "All Design",
      img: "/assets/projects/project4.png",
      name: "Our Services Line one",
      name2: "Servive line two",
    },
    {
      key: "All House",
      img: "/assets/projects/project5.png",
      name: "Our Services Line one",
      name2: "Servive line two",
    },
    {
      key: "All House",
      img: "/assets/projects/project6.png",
      name: "Our Services Line one",
      name2: "Servive line two",
    },
  ];

  const controler = (a : string) => {
    setbtncontrole(a);
  };

  return (
    <main id="projects">
      {/* Top section same as navbar */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-10 px-10 mt-16">
        <h1 className="heroHeading font-semibold">Our Projects</h1>
        <div className="flex-row">
          <button
            onClick={() => controler("All")}
            className="navBarLinks px-10 hover:underline"
          >
            All
          </button>
          <button
            onClick={() => controler("Furniture")}
            className="navBarLinks px-10 hover:underline"
          >
            Furniture
          </button>

          <button
            onClick={() => controler("Design")}
            className="navBarLinks px-10 hover:underline"
          >
            Design
          </button>
          <button
            onClick={() => controler("House")}
            className="navBarLinks px-10 hover:underline"
          >
            House
          </button>
        </div>
      </div>
      {/* Images section */}
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 mt-16">
        {images.filter(data2 => data2.key.includes(btncontrole)).map((data) => (
          <div className="flex flex-col items-center">
            <Image
              src={data.img}
              width={344}
              height={193}
              alt="Picture of the author"
            />
            <div className="flex flex-col items-center mt-2">
              <div>
                {" "}
                <p>{data.name}</p>
              </div>
              <div>
                <p>{data.name2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
