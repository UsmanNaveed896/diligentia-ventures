import React from "react";
import Img from "../../assets/6.png";
import Img1 from "../../assets/12.jpg";

const Section4 = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center px-8 py-16">
        <div className="container max-w-[900px]">
          <div className="flex gap-6 justify-center flex-col md:flex-row relative items-center">
            <div data-aos="flip-left" className="relative h-[400px]">
              <img
                className="w-full h-full object-cover "
                src={Img1}
                alt="image"
              />
              <p className="block md:hidden text-[5rem] font-texturina font-extrabold text-white  md:relative z-[10] tracking-wider leading-[90px] mt-[-110px]">
                <span className="text-[8rem]">
                  A <br></br>
                </span>
                bout Us
              </p>
            </div>
            <div
              data-aos="slide-up"
              className="second-div font-texturina mt-24 md:mt-0"
            >
              <h1 className="text-white font-semibold text-xl md:text-start text-center">
                It all starts with a surge{" "}
              </h1>
              <p className="pt-2 text-[#EC3237] text-xl font-semibold md:text-start text-center">
                make your company surge shift!{" "}
              </p>

              <p className="hidden md:block text-[5rem] font-extrabold text-white  relative z-[10] tracking-wider ml-[-106px]">
                <span className="text-[7rem]">A</span>bout Us
              </p>
              <p className="pt-1 text-[white] text-xl font-semibold md:text-start text-center">
                Diligentia Ventures Inc. is a global{" "}
                <br className="hidden md:block"></br> management consulting firm
                based in New York,<br className="hidden md:block"></br>{" "}
                specializing in strategic insights and innovative solutions for
                <br className="hidden md:block"></br> business growth. We offer
                expert financial consulting,
                <br className="hidden md:block"></br> business planning, startup
                support,<br className="hidden md:block"></br> capital raising, and IPO execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
