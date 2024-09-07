import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-start items-center text-center px-4 bg-[url('/src/assets/mobilehero.png')] md:bg-[url('/src/assets/hero.png')] bg-cover bg-center bg-no-repeat">

      {/* Tracking Bar at the Top */}
      <div className="w-full max-w-2xl mt-10 flex items-center bg-gray-100 rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          placeholder="Airway Bill/Order Ref No."
          className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 outline-none"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-r-full">
          Track
        </button>
      </div>

      {/* Additional Message */}
      <p className="mt-4 text-white font-semibold text-lg">
        Can't find your order details?
      </p>
      <p className="text-yellow-300">
        We sent your AWB tracking number to you via Email & SMS upon order confirmation
      </p>

    </section>
  );
};

export default Hero;
