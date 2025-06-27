import React from "react";
import SingleBday from "./SingleBday";
import { bdays } from "./data";

const Birthday = () => {
  const [myBdays, setMyBdays] = React.useState(bdays);
  const removeData = () => {};
  return (
    <>
      <div className="container w-full md:w-[75%] lg:w-[45%] mx-auto shadow-lg p-3  bg-amber-600 rounded-lg mt-10 mb-10">
        <h1 className="text-center text-purple-500 text-3xl text-shadow-black ">
          {myBdays.length} Birthdays today
        </h1>   
        {myBdays?.map((person, index) => {
          return <SingleBday {...person} key={person?.id} />;
        })}

        <button
          onClick={removeData}
          className=" w-full button bg-gradient-to-r from-red-400 to-yellow-300 px-2 py-1 rounded-md text-white font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400 transition-all duration-100"
        >
          Remove All
        </button>
      </div>
    </>
  );
};

export default Birthday;
