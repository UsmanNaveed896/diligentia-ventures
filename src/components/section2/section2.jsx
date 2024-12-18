import React from "react";
import Img from "../../assets/6.png";
const Section2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center px-8 py-16">
        <div className="container max-w-[900px]">
          <p data-aos="fade-up" className="text-[17px] font-texturina text-white text-center md:text-start">
            <span data-aos="fade-up" className="text-[#EC3237] text-3xl">
              At DILIGENTIA VENTURES INC,{" "}
            </span>{" "} <br className="md:hidden block pb-2 md:pb-0"></br>
            we are committed to helping organizations achieve exceptional
            results through strategic insights and innovative solutions. As a
            leading global management consulting firm headquartered in New York,
            we provide our clients with unparalleled expertise and personalized
            strategies to navigate the complexities of today’s business
            environment.
          </p>
          <p data-aos="fade-left" className="text-[17px] font-texturina text-white md:mt-6 mt-2 text-center md:text-start">
            {" "}
            In today's dynamic business environment, achieving financial
            stability and growth requires strategic planning, innovative
            solutions, and expert guidance. Our firm specializes in delivering
            comprehensive financial consulting services, assisting businesses in
            drafting effective marketing and business plans, launching
            successful startups, raising capital, and executing initial public
            offerings (IPOs).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
