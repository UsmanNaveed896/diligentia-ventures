import React from "react";
import Img from "../../assets/14.png";

const Section6 = () => {
  return (
    <div className="grid md:grid-cols-6 grid-cols-1 items-center text-white pt-4 md:pt-0 overflow-hidden">
    {/* First Column - Image */}
    <div className="col-span-2  md:mb-0 mb-[-35px] md:order-2 order-2 md:justify-end flex justify-center">
      <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden md:mr-[-22px]">
        <img src={Img} data-aos="flip-left" alt="Mission" className="object-cover rounded-full" />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full border-[25px]"
          style={{
            borderColor: "#3E4095",
            borderStyle: "solid",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full border-[25px]"
          style={{
            borderColor: "#EC3237",
            borderStyle: "solid",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
          }}
        />
        <div data-aos="slide-up" className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold left-[8rem]">
          <span>
            <span className="text-white font-texturina text-6xl font-extrabold align-super block leading-[45px]">
              iss<br />io<br />n
            </span>
          </span>
        </div>
      </div>
    </div>
  
    {/* Middle Column - Text Content */}
    <div className="col-span-3 bg-red p-5 font-texturina bg-primary md:order-3 order-3">
      <div className="flex justify-center px-8 pt-8 pb-16">
        <div className="mt-6 md:text-start text-center">
          <h1 data-aos="fade-right" className="text-white font-semibold text-xl">
            Lorem ipsum dolor sit amet <br /> consectetur. Nullam sed in ut ac{" "}
          </h1>
          <p data-aos="fade-right" className="mt-4">
            Lorem ipsum dolor sit amet consectetur. Mattis nulla tempus dignissim mauris dis. Eget ultrices mauris commodo adipiscing. Dolor amet rhoncus amet arcu. Venenatis interdum bibendum urna lacus odio senectus mattis at.
          </p>
          <p data-aos="fade-right" className="mt-4">
            Lorem ipsum dolor sit amet consectetur. Mattis nulla tempus dignissim mauris dis. Eget ultrices mauris commodo adipiscing. Dolor amet rhoncus amet arcu. Venenatis interdum bibendum urna lacus odio senectus mattis at.
          </p>
          <button data-aos="slide-up" className="mt-6 rounded bg-white text-secondary text-xs py-2 px-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  
    {/* Third Column - Background Color Only */}
    <div className="col-span-1 h-full bg-primary md:order-1 order-1 md:block hidden">
      <div className="h-full w-full" />
    </div>
  </div>
  );
};

export default Section6;
