import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return isMenuOpen ? (
    <nav className="shadow-lg m-2 bg-white p-3">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <div className="flex items-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer">
          <img
            className="h-5"
            src="https://i.pinimg.com/474x/fc/16/ef/fc16eff6cd8c7ff12538799b8bd8f82e.jpg"
          />
          <li className="ml-2">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex items-center p-2 hover:bg-sky-700 cursor-pointer">
          <img
            className="h-5"
            src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
          />
          <li className="ml-2">Shorts</li>
        </div>
        <div className="flex items-center p-2 hover:bg-sky-700 cursor-pointer">
          <img
            className="h-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNazF6M9GC_neiUdmdjWEwrTXGphpRc23L4FrG3ufZM_NCbqtguqS0A_wzK3xUPCfSHc0&usqp=CAU"
          />
          <li className="ml-2">Subscription</li>
        </div>
      </ul>
      <hr />
    </nav>
  ) : null;
};

export default Sidebar;
