import React from 'react';
import shippingImage from '../../assets/img3.png';

const ShippingSection = () => {
  return (
    // <div className="bg-gray-200 p-8 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center bg-gray-200 rounded-lg shadow-lg overflow-hidden gap-32">
        {/* Image Section */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={shippingImage} alt="Express Shipping" className="rounded-lg w-96" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">
          The Courier Service That


          </h2>
          <p className="text-4xl font-bold text-gray-800">
          Never Sleeps
          </p>
        </div>
      </div>
    // </div>
  );
};

export default ShippingSection;
