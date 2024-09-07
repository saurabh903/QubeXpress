import React from 'react';
import shippingImage from '../../assets/img1.png';

const ShippingSection = () => {
  return (
    <div className="bg-gray-200 p-8 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden gap-32">
        {/* Image Section */}

        {/* Text Section */}
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Speed, Precision, Reliability
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            We Deliver It All
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={shippingImage} alt="Express Shipping" className="rounded-lg w-96" />
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
