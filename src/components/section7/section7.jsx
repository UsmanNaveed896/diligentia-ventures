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
        },
        {
          title: "Budgeting and Forecasting",
          img: BudgetingImg,
          overlayColor: "bg-secondary", // Adds the red overlay effect
        },
        {
          title: "Risk Management",
          img: RiskManagementImg,
        },
        {
          title: "Marketing and Business Plan Development",
          img: MarketingImg,
        },
        {
          title: "Strategic Planning",
          img: StrategicPlanningImg,
        },
        {
          title: "View All",
          img: ViewAllImg,
          overlayColor: "bg-[#3E4095]", // Adds blue overlay effect
        },
      ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center",
        }}
      >
        <div className="text py-16 text-center">
          <p className="font-texturina text-5xl font-extrabold text-white">
            Services Offered
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-64  overflow-hidden z-20"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay for Red/Blue Color */}
            {item.overlayColor && (
              <div
                className={`absolute inset-0 ${item.overlayColor} opacity-100`}
              ></div>
            )}

            {/* Text Content */}
            <div className="font-texturina absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold text-center p-2">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section7;
