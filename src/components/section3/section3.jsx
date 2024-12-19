import React from "react";
import Img from "../../assets/7.png";
import Img2 from "../../assets/8.png";
import Img3 from "../../assets/9.png";
import Img4 from "../../assets/10.png";
import Img5 from "../../assets/11.png";

const Section3 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover", // Ensures the image covers the container
        // backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center px-8 py-16">
        <div className="container max-w-[1000px]">
          <div className="flex  items-center md:mt-16 mt-2 md:pb-16 pb-2 justify-center md:flex-row flex-col">
            <div className="first-div md:mr-[-90px] mr-0">
              <div
                data-aos="fade-right"
                className="h-[350px] w-[350px] rounded-full font-texturina bg-[#EC3237] border-[10px] border-[#757480]"
              >
                <p className="text-white mt-20 md:ml-10 ml-0 text-6xl font-bold text-center md:text-start">
                  Our <br></br> Objectives{" "}
                </p>
              </div>
            </div>
            <div className="second-div hidden md:block ">
              <img className="h-[550px]" src={Img2} alt="abc" />
            </div>
            <div className="third-div relative">
              <div
                data-aos="fade-left"
                className=" mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative top-[-105px] left-[-150px]"
              >
                <div className="flex gap-3">
                  <div className="drop relative">
                    {/* Drop image */}
                    <img className=" md:h-[80px]" src={Img3} alt="drop" />
                    {/* Rounded image */}
                    <img
                      className="absolute sm:h-[40px] h-[45px] sm:top-1 top-1 sm:left-1 left-1 md:h-[65px] md:top-2 md:left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    {/* Letter A */}
                    <p className="absolute font-bold z-10 sm:text-2xl text-3xl sm:top-2 top-2 sm:left-4 left-4 md:top-4 md:left-[26px] md:text-4xl text-[#ec3237]">
                      A
                    </p>
                  </div>
                  <div className="text-white sm:text-[13px] text-[11px] md:text-[14px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Provide expert financial consulting to{" "}
                      <br className="md:block hidden"></br> enhance business
                      performance and <br className="md:block hidden"></br>{" "}
                      strategic decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECOND */}

              <div
                data-aos="fade-left"
                className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative md:top-[-50px] top-[-50px] sm:left-[-15px] left-[-24px]"
              >
                <div className="flex gap-3">
                  <div className="drop relative">
                    <img className=" md:h-[80px]" src={Img5} alt="drop" />
                    <img
                      className="absolute sm:h-[40px] h-[45px] sm:top-1 top-1 sm:left-1 left-1 md:h-[65px] md:top-2 md:left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 sm:text-2xl text-3xl sm:top-2 top-2 sm:left-4 left-4 md:top-4 md:left-[26px] md:text-4xl text-[#ec3237]">
                      B
                    </p>
                  </div>
                  <div className="text-white sm:text-[13px] text-[11px] md:text-[14px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Develop tailored marketing and business{" "}
                      <br className="md:block hidden"></br> plans that align
                      with our clients &#39{" "}
                      <br className="md:block hidden"></br> goals and market
                      demands.
                    </p>
                  </div>
                </div>
              </div>

              {/* tHIRD */}
              <div
                data-aos="fade-left"
                className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative md:top-[0px] top-[0px] md:left-[15px] left-[10px]"
              >
                <div className="flex gap-3">
                  <div className="drop relative">
                    <img className="md:h-[80px]" src={Img3} alt="drop" />
                    <img
                      className="absolute sm:h-[40px] h-[45px] sm:top-1 top-2 sm:left-1 left-1 md:h-[65px] md:top-2 md:left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 sm:text-2xl text-3xl sm:top-2 top-2 sm:left-4 left-4 md:top-4 md:left-[26px] md:text-4xl text-[#ec3237]">
                      C
                    </p>
                  </div>
                  <div className="text-white sm:text-[13px] text-[11px] md:text-[14px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Facilitate the successful launch of{" "}
                      <br className="md:block hidden"></br> startups through
                      structured planning and{" "}
                      <br className="md:block hidden"></br> execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fourth */}
              <div
  data-aos="fade-left"
  className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative md:top-[52px] top-[50px] sm:left-[-10px] left-[-22px]"
>
  <div className="flex gap-3">
    <div className="drop relative">
      <img className=" md:h-[80px]" src={Img5} alt="drop" />
      <img
        className="absolute sm:h-[40px] h-[45px] sm:top-1 top-3 sm:left-1 left-2 md:h-[65px] md:top-2 md:left-2"
        src={Img4}
        alt="rounded"
      />
      <p className="absolute font-bold z-10 sm:text-2xl text-3xl sm:top-2 top-[13px] sm:left-4 left-[18px] md:top-4 md:left-[26px] md:text-4xl text-[#ec3237]">
        D
      </p>
    </div>
    <div className="text-white sm:text-[13px] text-[11px] md:text-[14px]">
      <p className="mt-[6px] ml-[-15px]">
        Assist in raising capital and equity{" "}
        <br className="md:block hidden"></br> to support business growth and{" "}
        <br className="md:block hidden"></br> expansion.
      </p>
    </div>
  </div>
</div>


              {/* fIFTH */}
           <div
  data-aos="fade-left"
  className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative md:top-[100px] top-[100px] sm:left-[-50px] md:left-[-136px]"
>
  <div className="flex gap-3">
    <div className="drop relative">
      <img className="md:h-[80px]" src={Img3} alt="drop" />
      <img
        className="absolute sm:h-[40px] h-[45px] sm:top-1 top-2 sm:left-1 left-2 md:h-[65px] md:top-2 md:left-2"
        src={Img4}
        alt="rounded"
      />
      <p className="absolute font-bold z-10 sm:text-2xl text-3xl sm:top-2 top-[10px] sm:left-4 left-[20px] md:top-4 md:left-[26px] md:text-4xl text-[#ec3237]">
        E
      </p>
    </div>
    <div className="text-white sm:text-[13px] text-[11px] md:text-[14px]">
      <p className="mt-[6px] ml-[-15px]">
        Execute Initial Public Offerings (IPOs){" "}
        <br className="md:block hidden"></br> to help businesses access public
        capital{" "}
        <br className="md:block hidden"></br> markets.
      </p>
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

export default Section3;
