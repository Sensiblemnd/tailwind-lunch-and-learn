import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className={
        "transition duration-500 ease-in-out transform  hover:bg-blue-500 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md"
      }
    >
      {children}
    </button>
  );
};

export default Button;
