import React, { useState } from "react";
import Img from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/Frame.png";
import Img4 from "../../assets/23.png";


const Header = () => {
  const [selected, setSelected] = useState("Home"); // Default selected is 'Home'

  const navItems = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Services" },
    { name: "Case Studies" },
    { name: "Clients" },
    { name: "Careers" },
    { name: "Contact Us" },
  ];
  return (
    <>
      <div className="header bg-primary font-texturina hidden md:block">
        <div className="flex justify-between items-center ">
          <div>
            <img className="h-[90px]" src={Img} alt="img" />
          </div>
          <div>
            <img className="h-[90px] mb-2" src={Img3} alt="img" />
          </div>
          <div>
            <img className="h-[90px]" src={Img2} alt="img" />
          </div>
        </div>
        <div className="menu ">
          <div className="hidden md:flex space-x-16 justify-center bg-[#26329F] py-2 text-[15px] text-white">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelected(item.name)}
                className={`pb-1 ${
                  selected === item.name
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-gray-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Header for mobile */}
      <div className="header bg-primary font-texturina block md:hidden h-[90px] py-8 px-1"
       style={{
              backgroundImage: `url(${Img4})`,
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center",
            }}
          
      >
        <div className="flex justify-between items-center w-full px-4">
          {/* Bars aligned to the left */}
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </div>

          {/* Center the logo */}
          <div className="logo absolute left-1/2 transform -translate-x-1/2">
            <img className="h-[60px]" src={Img3} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
