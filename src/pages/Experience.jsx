import bg from "../assets/Experience.png";
import CardExperience from "../component/CardExperience";
import { BsFacebook } from "react-icons/bs";
import logobe from '../assets/belogo.png'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";


const Experience = () => {
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
            5.0
          </h1>

          <h1 className="rotate-180 text-4xl uppercase whitespace-nowrap [writing-mode:vertical-rl] ">
            working experience
          </h1>
        </div>

        <div className="min-w-0 flex-1 flex ">
          {/* left  */}
          <div className=" w-[27%] border-r-2 self-stretch border-r-borderPrimary pt-6 px-6 text-textPrimary! ">
            <div className=" flex justify-between text-5xl uppercase ">
              <h1>Education</h1> <h1>&</h1>
            </div>
            <p className=" text-sm leading-3 ">
              Professional awards I’ve reached during my working times.
            </p>
            <h1 className=" uppercase leading-12 text-5xl pl-[30%]  ">
              experience
            </h1>
            <p className=" text-sm mt-12 pr-15">
              I have been developing sites for 8 years and I know for sure the
              main trends and directions of modern design, you will get a decent
              result
            </p>
            <div className=" text-end ">
              <button className=" mt-26 text-lg capitalize px-15 py-3.5 rounded-full bg-btnPrimary text-textPrimary ">
                resume
              </button>
            </div>
          </div>
          {/* right  */}
          <div className=" w-[73%]  ">
            <div className=" mt-5 ">
              <CardExperience
                icon={<BsFacebook className=" text-6xl" />}
                date="2019-2021"
                title="facebook"
                description="Assertively exploit wireless initiatives rather than synergistic core
          competencies."
              />
              <CardExperience
                image={logobe}
                date="2017-2019"
                title="behance"
                description=" im working via developer 9 years and i know all about design"
              />
              <CardExperience
                icon={<FaTwitter className=" text-6xl" />}
                date="2014-2017"
                title="twitter"
                description=" Credibly streamline mission-critical value with multifunctional functionalities. Leading team designers."
              />
              <CardExperience
                icon={<FaInstagram className=" text-6xl" />}
                date="2012-2014"
                title="twitinstagrammer"
                description="Proven ability to lead and manage a wide variety of design and development projects in team and independent situations."
              />
              <CardExperience
                icon={<FaLinkedin className=" text-6xl" />}
                date="206-2012"
                title="linkedin"
                description="Assertively exploit wireless initiatives rather than synergistic core competencies."
                classNameLi=" border-none   "
              />
            </div>
          </div>
        </div>
      </div>
      <ul className=" list-disc absolute z-10 top-1/2 -translate-y-1/2 right-5 space-y-3 marker:text-2xl ">
        <li className="marker:text-btnPrimary   " ></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Experience;
