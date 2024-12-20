import React from "react";
import Img from "../../assets/13.png";
const Section5 = () => {
  return (
    <div className="grid md:grid-cols-6 grid-cols-1 items-center text-white pt-4 md:pt-0 overflow-hidden">
    {/* First Column - Text Content */}
    <div className="col-span-3 bg-secondary p-5 font-texturina md:order-1 order-2">
      <div className="flex justify-center px-8 pt-8 pb-16">
        <div className="mt-6 md:text-start text-center">
          <h1 data-aos="fade-left" className="text-white font-semibold text-xl">
          Empowering Success Through Strategic Innovation
          </h1>
          <p data-aos="fade-right" className="mt-4">
          At Diligentia Ventures Inc., our mission is to empower businesses with innovative solutions and strategic insights that drive growth, financial stability, and long-term success.
          </p>
          <p data-aos="fade-left" className="mt-4">
          We are dedicated to providing personalized guidance to help organizations navigate complex challenges and achieve their full potential in a rapidly evolving global market.
          </p>
          <button data-aos="zoom-out" className="mt-6 rounded bg-white text-secondary text-xs py-2 px-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  
    {/* Middle Column - Circular Image */}
    <div className="col-span-2 md:ml-[-30px] md:mb-0 mb-[-35px] md:order-2 order-1 md:block flex justify-center">
      <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
        <img src={Img} alt="Mission" data-aos="flip-left" className="object-cover rounded-full" />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full border-[25px]"
          style={{
            borderColor: "#EC3237",
            borderStyle: "solid",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full border-[25px]"
          style={{
            borderColor: "#3E4095",
            borderStyle: "solid",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
          }}
        />
        <div data-aos="fade-right" className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold left-[11rem]">
          <span>
            <span className="text-white font-texturina text-6xl font-extrabold align-super block leading-[45px]">
              iss<br />io<br />n
            </span>
          </span>
        </div>
      </div>
    </div>
  
    {/* Third Column */}
    <div className="third-div h-full w-full bg-secondary md:block hidden md:order-3 order-3">
      <div className="h-full w-full" />
    </div>
  </div>
  );
};

export default Section5;
