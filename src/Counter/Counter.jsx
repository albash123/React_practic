import React from "react";

const HutDesign = () => {
  return (
    <div className="bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="relative w-72 h-96 bg-yellow-100 border-4 border-gray-500 rounded-md shadow-lg flex flex-col items-center justify-end">
        {/* Thatched roof */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-brown-700 rounded-t-full shadow-inner">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white">
            Thatched Roof
          </div>
        </div>

        {/* Mud walls */}
        <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-700">
          Mud Walls
        </div>

        {/* Door */}
        <div className="w-12 h-32 bg-yellow-500 border-2 border-gray-400 my-4 relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-white">
            +
          </div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white">
            +
          </div>
        </div>

        {/* Dirt floor */}
        <div className="absolute bottom-0 text-xs text-gray-700 mb-2">
          Dirt Floor
        </div>

        {/* Labels */}
        <div className="absolute left-0 top-1/4 -ml-24 text-sm text-gray-700">
          One Room
        </div>
        <div className="absolute right-0 top-1/4 -mr-32 text-sm text-gray-700 text-right">
          No Electricity / No Running Water
        </div>
      </div>

      {/* Outside elements */}
      <div className="absolute left-10 bottom-10 text-sm">
        <div>Child with Ball</div>
      </div>
      <div className="absolute right-10 bottom-10 text-sm">
        <div>Tree with Person</div>
      </div>
    </div>
  );
};

export default HutDesign;
