import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Music",
    "Movies",
    "Web series",
    "Technology",
    "Sports",
    "Education",
    "Lifestyle",
    "Other",
  ];

  return (
    <div className="flex overflow-x-auto space-x-2 w-100">
      {list.map((item) => (
        <Button key={item} title={item} />
      ))}
    </div>
  );
};

export default ButtonList;
