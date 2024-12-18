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
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center px-8 py-16">
        <div className="container max-w-[1000px]">
          <div className="flex  items-center md:mt-16 mt-2 justify-center md:flex-row flex-col">
            <div className="first-div md:mr-[-90px] mr-0">
              <div className="h-[220px] w-[220px] rounded-full font-texturina bg-[#EC3237] border-[10px] border-[#757480]">
                <p className="text-white mt-10 md:ml-6 ml-0 text-4xl font-bold text-center md:text-start">
                  Our <br></br> Objectives{" "}
                </p>
              </div>
            </div>
            <div className="second-div hidden md:block ">
              <img className="h-[400px]" src={Img2} alt="abc" />
            </div>
            <div className="third-div relative">
              <div className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative top-[-60px] left-[-100px]">
                <div className="flex ">
                  <div className="drop relative">
                    <img className="h-[60px]" src={Img3} alt="drop" />
                    <img
                      className="absolute h-[45px] top-2 left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 top-3 left-[22px] text-2xl text-[#ec3237]">
                      A
                    </p>
                  </div>
                  <div className="text-white text-[10px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Provide expert financial consulting to <br></br> enhance
                      business performance and <br></br> strategic
                      decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECOND */}

              <div className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative top-[-30px] left-[-10px]">
                <div className="flex ">
                  <div className="drop relative">
                    <img className="h-[60px]" src={Img5} alt="drop" />
                    <img
                      className="absolute h-[45px] top-2 left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 top-3 left-[22px] text-2xl text-[#26329f]">
                      B
                    </p>
                  </div>
                  <div className="text-white text-[10px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Develop tailored marketing and business <br></br> plans
                      that align with our clients &#39 <br></br> goals and
                      market demands.
                    </p>
                  </div>
                </div>
              </div>

              {/* tHIRD */}
              <div className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6]  static md:relative top-[-0px] left-[10px]">
                <div className="flex ">
                  <div className="drop relative">
                    <img className="h-[60px]" src={Img3} alt="drop" />
                    <img
                      className="absolute h-[45px] top-2 left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 top-3 left-[22px] text-2xl text-[#ec3237]">
                      C
                    </p>
                  </div>
                  <div className="text-white text-[10px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Facilitate the successful launch of <br></br> startups
                      through structured planning and <br></br> execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fourth */}
              <div className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6]  static md:relative top-[30px] left-[-10px]">
                <div className="flex ">
                  <div className="drop relative">
                    <img className="h-[60px]" src={Img5} alt="drop" />
                    <img
                      className="absolute h-[45px] top-2 left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 top-3 left-[22px] text-2xl text-[#26329f]">
                      D
                    </p>
                  </div>
                  <div className="text-white text-[10px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Assist in raising capital and equity <br></br> to support
                      business growth and <br></br> expansion.
                    </p>
                  </div>
                </div>
              </div>

              {/* fIFTH */}
              <div className="mt-4 md:mt-0 rounded-full bg-[rgb(79,91,114)] border-4 pr-5 border-[#6882a6] static md:relative top-[60px] left-[-100px]">
                <div className="flex ">
                  <div className="drop relative">
                    <img className="h-[60px]" src={Img3} alt="drop" />
                    <img
                      className="absolute h-[45px] top-2 left-2"
                      src={Img4}
                      alt="rounded"
                    />
                    <p className="absolute font-bold z-10 top-3 left-[22px] text-2xl text-[#ec3237]">
                      C
                    </p>
                  </div>
                  <div className="text-white text-[10px]">
                    <p className="mt-[6px] ml-[-15px]">
                      Execute Initial Public Offerings (IPOs) <br></br> to help
                      businesses access public capital <br></br> markets.
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
