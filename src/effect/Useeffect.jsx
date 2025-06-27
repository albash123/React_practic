import React, { useState, useEffect } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";

const Useeffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count changed:", count);
  }, [count]);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-7xl text-center font-extrabold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
        useEffect Hook
      </h1>

      <div className="container mx-auto text-center mt-10">
        <h2 className="text-6xl font-bold text-white drop-shadow-sm">
          {count}
        </h2>

        <div className="flex gap-6 mt-10 justify-center flex-wrap">
          {/* Decrease */}
          <button
            onClick={decrease}
            className="group flex items-center gap-2 bg-gradient-to-br from-red-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Minus
              className="group-hover:rotate-[-15deg] transition-transform duration-300"
              size={18}
            />
            Decrease
          </button>

          {/* Increase */}
          <button
            onClick={increase}
            className="group flex items-center gap-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Plus
              className="group-hover:rotate-12 transition-transform duration-300"
              size={18}
            />
            Increase
          </button>

          {/* Reset */}
          <button
            onClick={reset}
            className="group flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <RotateCcw
              className="group-hover:animate-spin transition-transform duration-700"
              size={18}
            />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Useeffect;
