import React from 'react';
import shippingImage from '../../assets/img2.png';

const ShippingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-200 rounded-lg shadow-lg overflow-hidden gap-32">
      {/* Text Section */}
      <div className="md:w-1/2 p-36 flex justify-center text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          AI-enabled Address Engine
          <br />
          Breaking Barriers, Connecting Worlds
        </h2>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 p-4">
        <img src={shippingImage} alt="Express Shipping" className="rounded-lg w-96" />
      </div>
    </div>
  );
};

export default ShippingSection;
