import React from "react";
import Banner from '../Components/Banner';
import AboutSection from "../Components/AboutSection";
import CoreValues from "../Components/CoreValues";
import WhyChoose from "../Components/WhyChoose";
const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection className="mb-5"/>
      <CoreValues  className="mb-5"/>
      <WhyChoose  className="mb-5"/>
    </>
  );
};

export default Home;