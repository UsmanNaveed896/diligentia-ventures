import React from "react";
import Img from "../../assets/3.png";
import Img1 from "../../assets/4.png";
import Img2 from "../../assets/5.png";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Main = () => {
  return (
    <div
      className="pb-12 overflow-hidden"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center">
        <div className="container max-w-[1000px]">
          <div className="flex justify-between md:flex-row flex-col-reverse px-12 items-center">
            <div  data-aos="fade-right" className="mt-5 md:mt-0">
              <h1 className="text-white text-center md:text-start md:text-5xl text-3xl font-bold uppercase font-texturina leading-[45px]">
                It all starts <br></br> with a surge <br></br>{" "}
                <span className="text-[#EC3237] md:text-3xl text-xl md:leading-[30px] leading-[10px] ">
                  make your company <br></br> surge shift!
                </span>
              </h1>
              <p  className="text-white md:mt-6 mt-2 text-sm text-center md:text-start">
                Unlock Your Business Potential with Expertise and Innovation
              </p>
            </div>
            <div data-aos="fade-up" className="mt-28 ">
              <div className="image  relative">
                <img className="h-[350px]" src={Img1} alt="background" />
                <img
                  className=" absolute h-[300px] z-[999] top-0 left-[50px]"
                  src={Img2}
                  alt="background"
                />
              </div>
            </div>
          </div>

          <div data-aos="fade-down" className="flex md:justify-start justify-center mt-12 md:mt-0 gap-2 text-white md:ml-12">
            <div className="flex items-center gap-2">
              <FaFacebook className="h-4 w-4" />
              <p className="text-[14px]">Facebook</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillTwitterCircle className="h-4 w-4" />
              <p className="text-[14px]">Twitter</p>
            </div>
            <div className="flex items-center gap-2">
              <RiInstagramFill className="h-4 w-4" />
              <p className="text-[14px]">Instagram</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedinIn className="h-4 w-4" />
              <p className="text-[14px]">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
