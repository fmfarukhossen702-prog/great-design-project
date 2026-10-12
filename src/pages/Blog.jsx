import { useState } from "react";
import bg from "../assets/background.png";
import { MdArrowOutward } from "react-icons/md";
import agence from "../assets/agenceProject.png";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

import Btn from "../component/Btn";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  const [active, setActive] = useState(1);
  const projects = [
    { id: 1, image: agence, name: "How to design well?" },
    { id: 2, image: image1, name: "Lemon Illustration design" },
    { id: 3, image: image2, name: "Paul theme Branding" },
    { id: 4, image: image3, name: "Best typography 2020" },
    { id: 5, image: image4, name: "my name is pattison" },
  
  ];
  const project = projects.find((item) => item.id === active);


  return (
    <div
      className="h-240 w-full text-textPrimary bg-bgPrimary bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(41, 41, 41, 0.65), rgba(41, 41, 41, 0.65)), url("${bg}")`,
      }}
    >
      <div className="w-full h-full flex ">
        <div className="flex h-full w-20 flex-col items-center justify-between border-r-2 border-r-borderPrimary py-10">
          <h1 className="rotate-180 text-4xl [writing-mode:vertical-rl] ">
            6.0
          </h1>

          <h1 className="rotate-180 text-4xl uppercase whitespace-nowrap [writing-mode:vertical-rl] ">
            from the blog
          </h1>
        </div>

        <div className="min-w-0 flex-1 flex ">
          {/* left  */}
          <div className=" w-[27%] border-r-2 self-stretch border-r-borderPrimary ">
            <div className=" mt-.7.5 px-6 ">
              <h1 className=" text-6xl  uppercase ">latest</h1>
              <p className=" text-sm leading-3 ">
                I love my work and every project is my pride{" "}
              </p>
              <h1 className=" text-6xl uppercase text-end leading-12  ">
                news
              </h1>
            </div>

            <ul className="mt-30 *:border-b-2 uppercase text-xl *:border-b-borderPrimary border-t-2 border-t-borderPrimary *:px-3 *:py-2 *:cursor-pointer text-[#efe3e364]  ">
              {projects.map((project) => (
                <li
                  key={project.id}
                  onClick={() => setActive(project.id)}
                  className={` ${
                    active === project.id
                      ? " border-t-2 border-t-[#ffffff8a] flex justify-between items-center text-textPrimary bg-[#a39f9f24] "
                      : ""
                  } hover:bg-[#a39f9f11] `}
                >
                  {project.name}
                  {active === project.id && <MdArrowOutward />}
                </li>
              ))}
            </ul>
            <div className=" justify-end mt-25 flex gap-3 pr-10 items-center ">
              <p className=" text-[15px] ">View all works</p>
              <Btn
                onClick={() =>
                  setActive((current) =>
                    current >= projects.length ? 1 : current + 1,
                  )
                }
              >
                <FaArrowRightLong className=" text-xl text-textPrimary " />
              </Btn>
            </div>
          </div>
          {/* right  */}
          <div className=" w-[73%]   pl-5.5">
            <div className=" flex mt-10 mb-15 ">
              <p className=" text-sm text-[#9e9e9e6c] pr-65 ">3th January, 2020</p>
              <p className=" text-sm w-94.25   ">
                Berling ® — minimalism photography agency website. with the help
                of a minimalistic design, the site turned out to be very
                user-friendly and responsive, and the brand became more.
              </p>
      
     
                <span className=" text-4xl font-medium  pl-40 ">
                   ( {project?.id} )
               
              </span> 
           
          
            </div>
            <div className=" w-full  py-7  pr-23">
              {projects.map((item) => {
                return (
                  active == item.id && (
                    <img src={item.image} alt="" className=" w-full h-157.5 " />
                  )
                );
              })}

              {/* {active === 2 && <AmericanProject />} */}
            </div>
          </div>
        </div>
      </div>
      <ul className=" absolute top-1/2 -translate-y-1/2 right-5 rounded-full   *:cursor-pointer flex flex-col justify-center items-center gap-5 ">
        {projects.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative rounded-full ${active === item.id ? "border-5 border-[#16fde6] shadow-xl" : " border-5 border-transparent"}`}
            >
              <img
                className=" rounded-full w-10 h-10 "
                src={item.image}
                alt={item.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
