import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Img from "../../assets/Frame.png";
import Img1 from "../../assets/22.png";

const Footer = () => {
  return (
    <div className="bg-primary"
      style={{
        backgroundImage: `url(${Img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <footer className="text-white py-8 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4 justify-center">
              <img src={Img} alt="Logo" className="w-32 h-auto" />
            </div>
            <p className="text-sm leading-relaxed text-center md:text-start">
              WE EDUCATE & ADVOCATE FOR A MORE JUST SOCIETY A STRONG AND VIBRANT
              BROOKLYN THROUGH COLLABORATION AND MUTUAL UNDERSTANDING
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-sm text-center md:text-start">
            <ul className="space-y-2">
              <li className="font-semibold mb-2">Home</li>
              <li className="hover:text-gray-400 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-gray-400 transition cursor-pointer">
                Services
              </li>
              <li className="hover:text-gray-400 transition cursor-pointer">
                Case Studies
              </li>
            </ul>
          </div>
          <div className="text-sm text-center md:text-start">
            <ul className="space-y-2">
              <li className="font-semibold mb-2">Clients</li>
              <li className="hover:text-gray-400 transition cursor-pointer">
                Careers
              </li>
              <li className="hover:text-gray-400 transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-start">
            <h3 className="font-bold text-lg mb-4">
              Sign up for the newsletter
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nec ultricies consequat at
              vehicula aliquet tincidunt morbi.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full md:w-48 py-2 px-4 rounded-md text-black focus:outline-none"
              />
              <button className="w-full md:w-auto bg-white text-secondary font-bold py-2 px-6 rounded-md text-xs whitespace-nowrap">
                Submit Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-xs">
          <p>Copyright © 2024 Diligentia Ventures - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;