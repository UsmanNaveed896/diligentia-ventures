import React from "react";
import Img from "../../assets/15.png";
import FinancialImg from "../../assets/16.png";
import BudgetingImg from "../../assets/17.png";
import RiskManagementImg from "../../assets/18.png";
import MarketingImg from "../../assets/19.png";
import StrategicPlanningImg from "../../assets/20.png";
import ViewAllImg from "../../assets/21.png";

const Section7 = () => {
  const gridData = [
    {
      title: "Financial Consulting",
      img: FinancialImg,
      description: "Expert financial guidance for your business growth and success"
    },
    {
      title: "Budgeting and Forecasting",
      img: BudgetingImg,
      overlayColor: "bg-secondary",
      description: "Comprehensive budgeting solutions for future planning"
    },
    {
      title: "Risk Management",
      img: RiskManagementImg,
      description: "Identify and mitigate potential business risks effectively"
    },
    {
      title: "Marketing and Business Plan Development",
      img: MarketingImg,
      description: "Strategic marketing solutions to expand your business reach"
    },
    {
      title: "Strategic Planning",
      img: StrategicPlanningImg,
      description: "Long-term strategic planning for sustainable growth"
    },
    {
      title: "View All",
      img: ViewAllImg,
      overlayColor: "bg-[#3E4095]",
      description: "Explore our complete range of services"
    },
  ];

  return (
    <>
      <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text py-16 text-center">
          <p data-aos="zoom-out" className="font-texturina text-5xl font-extrabold text-white">
            Services Offered
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-64 overflow-hidden group"
          >
            {/* Color Overlay - Now below the image */}
            {item.overlayColor && (
              <div
                data-aos="flip-left"
                className={`absolute inset-0 ${item.overlayColor} opacity-100 z-0`}
              />
            )}

            {/* Background Image - Now above the color overlay */}
            <img
              src={item.img}
              data-aos="flip-left"
              alt={item.title}
              className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-10"
            />

            {/* Hover Overlay - Highest z-index */}
            <div className="absolute inset-0 bg-secondary/80 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-20">
              <div className="h-full flex flex-col items-center justify-center p-4 text-white">
                <h3 className="font-texturina text-xl md:text-2xl font-bold text-center mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-center opacity-90">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Default Title - Above image but below hover overlay */}
            <div className="font-texturina absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold text-center p-2 transition-opacity duration-500 group-hover:opacity-0 z-10">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section7;