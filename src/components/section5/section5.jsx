import React from "react";
import Img from "../../assets/13.png";
const Section5 = () => {
  return (
    <div className="flex items-center text-white md:flex-row flex-col-reverse pt-4 md:pt-0">
      <div className="first-div bg-red p-5 font-texturina bg-secondary md:w-1/2 w-full">
        <div className="flex justify-center px-8 pt-8 pb-16">
          <div className="mt-6 md:text-start text-center">
            <h1 data-aos="fade-left" className="text-white font-semibold text-xl ">
              Lorem ipsum dolor sit amet <br></br> consectetur. Nullam sed in ut
              ac{" "}
            </h1>
            <p data-aos="fade-right" className="mt-4">
              Lorem ipsum dolor sit amet consectetur. Mattis nulla tempus
              dignissim mauris dis. Eget ultrices mauris commodo adipiscing.
              Dolor amet rhoncus amet arcu. Venenatis interdum bibendum urna
              lacus odio senectus mattis at.
            </p>
            <p data-aos="fade-left" className="mt-4">
              Lorem ipsum dolor sit amet consectetur. Mattis nulla tempus
              dignissim mauris dis. Eget ultrices mauris commodo adipiscing.
              Dolor amet rhoncus amet arcu. Venenatis interdum bibendum urna
              lacus odio senectus mattis at.
            </p>
            <button data-aos="zoom-out" className="mt-6 rounded bg-white text-secondary text-xs py-2 px-4">Read More</button>
          </div>
        </div>
      </div>

      <div className="second-div md:ml-[-30px] md:mb-0 mb-[-35px]">
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
          {/* The Image */}
          <img  src={Img} alt="Mission" data-aos="flip-left" className=" object-cover rounded-full" />

          {/* Half Top Red Border */}
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-[25px]"
            style={{
              borderColor: "#EC3237",
              borderStyle: "solid",
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            }}
          ></div>

          {/* Half Bottom Blue Border */}
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-[25px]"
            style={{
              borderColor: "#3E4095",
              borderStyle: "solid",
              clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            }}
          ></div>

          {/* Text Positioned on Top */}
          <div data-aos="fade-right" className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold left-[11rem]">
            <span>
              <span className="text-white font-texturina text-6xl font-extrabold align-super block leading-[45px]">
                iss<br></br>io <br></br>n
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
