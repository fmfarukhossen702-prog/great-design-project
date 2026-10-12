import React, { useState } from "react";
import bg from "../assets/background.png";
import { GoArrowUpRight } from "react-icons/go";
import Btn from "../component/Btn";
import { FiArrowRight } from "react-icons/fi";



const Contact = () => {


  
  const [active, setActive] = useState(1);  
  const [email ,setEmail] = useState("")
  const [emailText, setEmailText] = useState('')
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClick = (e) => {
    e.preventDefault()
   if (regex.test(email)) {
     setEmailText("successfully");
   }

  }

  const sideVarData = [
    {
      id: 1,
      title: "www.behance.net/Paulggooo",
    },
    {
      id: 2,
      title: "skype: murren8",
    },
    {
      id: 3,
      title: " mail: 000.lunchbox@gmail.com ",
    },
    {
      id: 4,
      title: "telegram: Paul_inc",
    },
  ];

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
            7.0
          </h1>

          <h1 className="rotate-180 text-4xl uppercase whitespace-nowrap [writing-mode:vertical-rl] ">
            contact
          </h1>
        </div>

        <div className="min-w-0 flex-1 flex ">
          {/* left  */}
          <div className=" w-[27%] border-r-2 self-stretch border-r-borderPrimary flex flex-col justify-between ">
            <div>
              <div className="pl-5  mb-35  mt-6 ">
                <div className=" flex uppercase gap-25 text-6xl">
                  <h1>Hire </h1>
                  <h1>me</h1>
                </div>
                <p className="text-sm">Enjoy coffe with me</p>
              </div>
              <div>
                <ul className=" border-t border-t-borderPrimary uppercase ">
                  {sideVarData.map((item) => {
                    return (
                      <li
                        onClick={() => setActive(item.id)}
                        className={` ${active === item.id ? "border-t-2 border-t-[#ffffff9c] bg-[#333333] " : " hover:bg-[#34343471] "} cursor-pointer   px-5 py-2 border-b border-b-borderPrimary flex justify-between pr-5 items-center`}
                      >
                        <span> {item.title} </span>
                        <span>
                          {" "}
                          {active === item.id && <GoArrowUpRight />}{" "}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p className=" mb-10 text-sm pl-6  ">
              © Pattison 2021. All Rights Resevered
            </p>
          </div>
          {/* right  */}
          <div className=" w-[73%] pr-45  pl-5.5 mt-6">
            <h5 className=" w-128.5 text-[40px] font-medium leading-11 ">
              Let's grab a coffee and jump on{" "}
              <span className=" text-btnPrimary ">conversation</span> chat with
              me.
            </h5>
            <div className=" grid grid-cols-2 justify-between items-center mt-20 ">
              <div className=" col-span-1 ">
                <button
                  onClick={handleClick}
                  className=" text-lg underline cursor-pointer uppercase   "
                >
                  send a brief
                </button>
                <p className=" text-[15px] mt-6 w-80  ">
                  I recommend filling out a brief to assess the cost of the
                  project. <span>Brief</span>{" "}
                </p>
              </div>
              <form className=" col-span-1">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="NAME"
                  className=" w-122.5 border-b-2 py-2 text-lg   border-b-[#757575ad] "
                />
                <input
                  onChange={(e) => setEmail(e.target.value.trim())}
                  value={email}
                  type="email"
                  name=""
                  required
                  id=""
                  placeholder="EMAIL *"
                  className=" w-122.5 border-b-2 py-2 text-lg  mt-15 border-b-[#757575ad] "
                />
                <p> {emailText} </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="MESSAGE *"
                  className=" w-122.5 border-b-2 py-2 text-lg  mt-15 border-b-[#757575ad] "
                />

                <button
                  type="submit"
                  className=" bg-btnPrimary px-8 py-5  rounded-4xl  mt-15 "
                >
                  <FiArrowRight className=" text-xl  " />
                </button>
              </form>
            </div>
          </div>
        </div>
          
      </div>
      <ul className=" list-disc absolute z-10 top-[30%] right-5 space-y-3 marker:text-2xl ">
        {sideVarData.map((item) => {
          return (
            <li
              onClick={() => setActive(item.id)}
              className={` ${active === item.id && "marker:text-btnPrimary "} `}
            ></li>
          );
        })}
      </ul>
   
    </div>
  );
};

export default Contact;
