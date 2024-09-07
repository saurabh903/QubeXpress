import React from "react";
import BackgroundImage from '../../assets/courier.png';  // Replace this with the correct path of your image

const HeroSection = () => {
  return (
    <div 
      className="relative w-full h-[400px] sm:h-[500px] bg-cover  bg-bottom" 
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
    </div>
  );
};

export default HeroSection;
