import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoCaretBackCircle, IoCaretForwardCircleSharp } from "react-icons/io5";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Img from "../../assets/4.png";
import Img1 from "../../assets/5.png";
import Video from "../../assets/video.mp4";
import Video1 from "../../assets/video1.mp4";
import Video2 from "../../assets/video2.mp4";
import Video3 from "../../assets/video3.mp4";
const Main = () => {
  const videos = [Video, Video1, Video2, Video3];

  return (
    <div className="overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <IoCaretBackCircle
              onClick={clickHandler}
              className="absolute left-4 top-[35%] z-20 h-8 w-8 text-white cursor-pointer hover:text-gray-300"
            />
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <IoCaretForwardCircleSharp
              onClick={clickHandler}
              className="absolute right-4 top-[35%] z-20 h-8 w-8 text-white cursor-pointer hover:text-gray-300"
            />
          )}
        >
          {videos.map((video, index) => (
            <div key={index} className="h-screen">
              <video
                className="w-full h-full object-cover"
                src={video}
                autoPlay
                loop
                muted
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center relative z-10">
        <div className="container max-w-[1000px]">
          <div className="flex justify-between md:flex-row flex-col-reverse px-12 items-center">
            <div data-aos="fade-right" className="mt-5 md:mt-0">
              <h1 className="text-white text-center md:text-start md:text-5xl text-3xl font-bold uppercase font-texturina leading-[45px]">
                It all starts <br /> with a surge <br />
                <span className="text-[#EC3237] md:text-3xl text-xl md:leading-[30px] leading-[10px]">
                  make your company <br /> surge shift!
                </span>
              </h1>
              <p className="text-white md:mt-6 mt-2 text-sm text-center md:text-start">
                Unlock Your Business Potential with Expertise and Innovation
              </p>

              <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                <button className="px-6 py-3 bg-transparent border border-white rounded-md text-sm font-semibold hover:bg-white hover:text-black text-white">
                  Learn More
                </button>
                <button className="px-6 py-3 bg-[#EC3237] rounded-md text-sm font-semibold hover:bg-red-600">
                  Contact Us
                </button>
              </div>
            </div>
            <div data-aos="fade-up" className="mt-28">
              <div className="image relative">
                <img className="h-[350px]" src={Img} alt="background" />
                <img
                  className="absolute h-[300px] z-[999] top-0 left-[50px]"
                  src={Img1}
                  alt="background"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="flex  md:justify-start justify-center mt-12 gap-2 text-white md:ml-12"
          >
            <div className="flex items-center gap-2 ">
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
