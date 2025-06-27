import React, { useState } from "react";

const Change_title = () => {
  const [title, setTitle] = useState("this is a title");

  const change = () => {
    setTitle("hello");
  };

  return (
    <>
      <div className="container mx-auto p-10 text-center ">
        <h1 className="text-center text-gray-400 text-4xl">{title}</h1>
        <button
          onClick={change}
          className="bg-rose-500 rounded-md transition-all  text-white p-2 px-8 hover:bg-rose-900 cursor-pointer hover:animate-pulse shadow-amber-200"
        >
          Change title
        </button>
      </div>
    </>
  );
};

export default Change_title;
