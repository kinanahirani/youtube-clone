import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import _ from "lodash";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const getSearchSuggestions = _.debounce(async () => {
      try {
        const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    }, 200);

    if (searchQuery) {
      getSearchSuggestions();
    }

    return () => {
      getSearchSuggestions.cancel();
    };
  }, [searchQuery]);

  return (
    <div
      className="grid grid-flow-col items-center p-5 shadow-lg bg-white fixed"
      style={{ width: "100%" }}
    >
      <div style={{ display: "flex" }} className="col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-7 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 items-center">
        <input
          placeholder="search"
          className="border border-gray-400 px-5 py-2 border-r-0 w-1/2 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        <div className="fixed bg-white mt-1 w-[30rem] rounded-lg shadow-lg">
          <ul>
            <li className="py-2 px-2">🔍 iPhone</li>
            <li className="py-2 px-2">🔍 iPhone</li>
            <li className="py-2 px-2">🔍 iPhone</li>
            <li className="py-2 px-2">🔍 iPhone</li>
            <li className="py-2 px-2">🔍 iPhone</li>
            <li className="py-2 px-2">🔍 iPhone</li>
            <li className="py-2 px-2">🔍 iPhone</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="Profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls3RFQ1C3s-TXEmjOtvdfDeL4Izr5R0puSw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
