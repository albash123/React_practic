import React from "react";

const SingleBday = ({ id, name, image, age }) => {
  return (
    <div className=" flex my-1   items-center justify-between bg-cyan-950 shadow-lg rounded-md p-2 m-2">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt=""
          height={60}
          width={60}
          className=" [clip-path:circle(30%)] object-cover w-[50px] "
        />

        <div className="flex flex-col">
          <h4 className="text-white text-1xl font-bold">{name}</h4>
          <p className="text-white ">{age}</p>
        </div>
      </div>
      <button className="button bg-gradient-to-r from-red-400 to-yellow-300 px-2 py-1 rounded-md text-white font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400 transition-all duration-100">
        Remove
      </button>
    </div>
  );
};

export default SingleBday;
