import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";



const stats = [
  {
    icon: <FaBox />, // You can replace these emojis with actual icons.
    stat: "2+ billion",
    label: "parcels",
  },
  {
    icon: <FaLocationDot />,
    stat: "29000+",
    label: "pincodes",
  },
  {
    icon: <GiWorld />,
    stat: "97%",
    label: "Indian households covered",
  },
  {
    icon: <FaWarehouse />,
    stat: "30+",
    label: "hubs Across India",
  },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-200 p-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-[#2b0202] text-white w-full h-36 rounded-lg shadow-md p-4"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <div className="text-2xl font-bold">{item.stat}</div>
          <div className="text-lg">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
