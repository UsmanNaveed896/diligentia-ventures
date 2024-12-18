import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Main from "./components/mainHomePage/main";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section7";
import Footer from "./components/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animations should only happen once
      offset: 200, // Trigger animations earlier or later (in px)
    });
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  );
}

export default App;
