import { useRef } from "react";
import SliderModule from "react-slick";
import bg from "../assets/background.png";
import Btn from "../component/Btn";
import { FaArrowRightLong } from "react-icons/fa6";
import CardAwwards from "../component/CardAwwards";

const Slider = SliderModule.default;

const Awwards = () => {
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
      className="h-240 w-full text-textPrimary bg-bgPrimary bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(41, 41, 41, 0.65), rgba(41, 41, 41, 0.65)), url("${bg}")`,
      }}
    >
      <div className="w-full h-full flex ">
        <div className="flex h-full w-20 flex-col items-center justify-between border-r-2 border-r-borderPrimary py-10">
          <h1 className="rotate-180 text-4xl [writing-mode:vertical-rl] ">
            3.0
          </h1>

          <h1 className="rotate-180 text-4xl uppercase whitespace-nowrap [writing-mode:vertical-rl] ">
            my awwards
          </h1>
        </div>

        <div className="min-w-0 flex-1 flex ">
          {/* left  */}
          <div className=" w-[27%] border-r-2 self-stretch border-r-borderPrimary pt-6 px-10 text-textPrimary! ">
            <div className=" uppercase text-7xl flex justify-between  ">
              <h1>Explore</h1>
              <h1>my</h1>
            </div>
            <p className=" text-[15px] leading-2 ">
              I love my work and every project is my pride{" "}
            </p>
            <h1 className=" text-7xl text-center pb-12 pl-5 leading-20 uppercase ">
              profile
            </h1>
            <p className=" text-[15px] w-90 ">
              Hello, my name is Pavel Suslov and i am UX/UI designer and
              front-end developer, im working via developer 9 years and i know
              all about design
            </p>
            <div className=" justify-end mt-30 flex gap-3 items-center ">
              <p className=" text-[15px] ">(hire me :)</p>
              <Btn
                ariaLabel="Show next slide"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <FaArrowRightLong className=" text-xl text-textPrimary " />
              </Btn>
            </div>
          </div>
          {/* right  */}
          <div className=" w-[73%]  ">
            <div>
              <h2 className="mt-8.5 ml-6 text-[40px] mb-20 text-textPrimary">
                Professional <span className=" text-btnPrimary ">awards</span>
              </h2>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <CardAwwards />
                </div>
                <div>
                  <CardAwwards />
                </div>
                <div>
                  <CardAwwards />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Awwards;
