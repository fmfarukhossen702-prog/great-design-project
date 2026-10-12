import { useRef } from "react";
import SliderModule from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import bg from '../assets/Testimonials.jpg'

const Slider = SliderModule.default;


const Testimonials = () => {
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
    customPaging: () => <button type="button" aria-label="Go to testimonial" />,
  };
  const testimonials = [
    {
      quote:
        "If you are seeking an Interior designer that will understand exactly your needs, and someone who will utilise their creative and technical skills in parity with your taste, then Suzanne at The Bauhaus Studio is perfect.",
      name: "DAVID & ELISA",
      project: "Apartment view lake at Brooklyn",
    },
    {
      quote:
        "The studio understood our vision from the start and brought every detail together with care.",
      name: "MILLER FAMILY",
      project: "Private residence",
    },
    {
      quote:
        "Thoughtful design, clear communication, and a result that feels completely our own.",
      name: "JAMES & ANNA",
      project: "Residential project",
    },
    {
      quote:
        "The whole process felt effortless, and the finished space is both beautiful and practical.",
      name: "OLIVIA R.",
      project: "Interior design project",
    },
    {
      quote:
        "A talented team who listened closely and turned our ideas into a space we love.",
      name: "SOPHIA & MARK",
      project: "Home renovation",
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
            4.0
          </h1>

          <h1 className="rotate-180 text-4xl uppercase whitespace-nowrap [writing-mode:vertical-rl] ">
            testimonials
          </h1>
        </div>

        <div className="min-w-0 flex-1 flex ">
          {/* left  */}
          <div className="w-[27%] border-r-2 self-stretch border-r-borderPrimary px-10 pt-6 text-textPrimary!">
            <div className="flex h-full flex-col">
              <div>
                <h1 className="text-7xl font-medium">+250</h1>
                <p className="text-[15px]">
                  I love my work and every project is my pride
                </p>
                <div className="mt-1 uppercase text-7xl font-medium leading-none">
                  <h2 className="pl-[40%]">Happy</h2>
                  <h2 className="pl-[8%]">clients</h2>
                </div>
              </div>

              <div className="mt-auto mb-10  grid grid-cols-2 items-center gap-x-7 gap-y-20">
                <div className="leading-none">
                  <p className="text-2xl font-bold tracking-tight">ARCHIVE</p>
                  <p className="text-xs font-bold tracking-[0.12em]">
                    CRAFTS GALLERY
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center border border-textPrimary text-2xl">
                    ◇
                  </span>
                  <p className="text-[9px] font-bold leading-tight">
                    CREATIVE
                    <br />
                    DESIGN TECHNICAL
                    <br />
                    INNOVATIONS
                  </p>
                </div>
                <div className="leading-none">
                  <p className="text-3xl font-medium tracking-tight">
                    ◫behance
                  </p>
                  <p className="text-[9px] font-bold tracking-wider">
                    HANDELSAGENTUR
                  </p>
                </div>
                <div className="text-center leading-none pb-10">
                  <p className="text-5xl font-bold tracking-tighter">C U</p>
                  <p className="mt-1 text-xs font-bold">christopher wilk</p>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="w-[73%]">
            <div className="flex h-full flex-col">
              <h2 className="mt-7 ml-5 text-3xl font-medium leading-tight">
                <span className="text-btnPrimary">Creative</span> &amp;
                dedicated is
                <br />
                things that my studio
                <br />
                brings for your business
              </h2>

              <div className="flex flex-1 items-center">
                <Slider ref={sliderRef} {...settings} className="w-full">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.name}>
                      <div className="grid grid-cols-[100px_minmax(0,320px)] items-start justify-center gap-12 px-8">
                        <FaQuoteLeft className="mt-1 text-7xl text-btnPrimary" />
                        <div>
                          <p className="text-[14px] leading-5">
                            “{testimonial.quote}”
                          </p>
                          <h3 className="mt-9 text-lg">{testimonial.name}</h3>
                          <p className="mt-1 text-sm text-textPrimary/75">
                            {testimonial.project}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="mb-10 flex justify-center gap-6">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="flex h-13 w-20 cursor-pointer items-center justify-center rounded-full border border-textPrimary hover:bg-btnPrimary bg-transparent text-textPrimary"
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="flex h-13 w-20 cursor-pointer items-center justify-center rounded-full border border-textPrimary hover:bg-btnPrimary bg-transparent text-textPrimary"
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default Testimonials
