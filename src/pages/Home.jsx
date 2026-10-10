import { FaArrowRightLong } from 'react-icons/fa6';
import { useRef } from 'react';
import SliderModule from "react-slick";
import bg from '../assets/background.png';
import Btn from '../component/Btn';
import grid from '../assets/Grid.png'
import image from '../assets/homeImage.png'


const Slider = SliderModule.default;

const Home = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots slick-dots-right",
    customPaging: () => <button type="button" aria-label="Go to slide" />,
  };
  return (
    <div
      className="h-240 w-full text-textPrimary bg-bgPrimary bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(41, 41, 41, 0.65), rgba(41, 41, 41, 0.65)), url("${bg}")`,
      }}
    >
      <div className="w-full h-full flex ">
        <div className="flex h-full w-20 flex-col items-center justify-between border-r-2 border-r-borderPrimary py-10">
          <h1 className="rotate-180 text-4xl [writing-mode:vertical-rl] ">
            1.0
          </h1>
          <h1 className="rotate-180 text-4xl uppercase whitespace-nowrap [writing-mode:vertical-rl] ">
            my name is robert
          </h1>
        </div>
        <div className="min-w-0 flex-1 flex ">
          <div className=" w-[27%] border-r-2 self-stretch border-r-borderPrimary px-6 flex flex-col justify-between ">
            <div>
              <div className="flex justify-between pt-7  text-6xl text-textPrimary  font-medium ">
                <h1>GET</h1>
                <h1>YOUR</h1>
              </div>
              <p className=" text-[11px] ">
                Always available for freelance work, contact me and get your
                greate design ;{" "}
              </p>
              <div className=" relative ">
                <h1 className=" text-6xl ">GREAT </h1>
                <h1 className=" text-6xl absolute top-13 left-20 ">Design</h1>
              </div>
              <p className=" mt-31 text-[14px]  ">
                Hello, my name is Pattison and i am UX/UI designer and front-end
                developer, im working via developer 9 years and i know all about
                design
              </p>
              <div className=" justify-end mt-25 flex gap-3 items-center ">
                <p className=" text-[15px] ">(hire me :)</p>
                <Btn
                  ariaLabel="Show next slide"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <FaArrowRightLong className=" text-xl text-textPrimary " />
                </Btn>
              </div>
            </div>
            <div className=" mb-10 flex justify-between items-center">
              <div className=" flex gap-4 items-center font-medium ">
                <h1 className=" text-5xl">8</h1>
                <div className=" text-[13px] flex flex-col justify-center font-normal! -space-y-2 ">
                  <p>Years</p>
                  <p>experience</p>
                </div>
              </div>
              <div className=" flex gap-4 items-center font-medium ">
                <h1 className=" text-5xl">5</h1>
                <div className=" text-[13px] flex flex-col justify-center font-normal! -space-y-2 ">
                  <p>Themeforest </p>
                  <p>awwards</p>
                </div>
              </div>
              <div className=" flex gap-4 items-center font-medium ">
                <h1 className=" text-5xl">60</h1>
                <div className=" text-[13px] flex flex-col justify-center font-normal! -space-y-2 ">
                  <p>Projects </p>
                  <p>Done</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[73%]  ">
            <div
              className=" w-full h-full bg-center bg-cover bg-no-repeat flex items-center justify-center "
              style={{ backgroundImage: `url("${grid}")` }}
            >
              <div className=" w-270 relative ">
                <Slider ref={sliderRef} {...settings}>
                  <div>
                   <img  src={image} alt="" />
                  </div>
                  <div>
                   slider2 
                  </div>
                 
                </Slider>
                <div className=" ">
             
               
                </div>
                <div className=" absolute top-0 -right-10 w-152 h-152 rounded-full bg-[#00000028] flex items-center justify-center ">
                  <div className=" *:underline space-y-2 text-[22px] ">
                    <p>Fill out the </p>
                    <p>brief to find </p>
                    <p>out the cost </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
