import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="px-4 py-2 m-2 bg-gray-300 rounded-lg">{title}</button>
    </div>
  );
};

export default Button;
