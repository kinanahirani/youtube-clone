import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col pt-[6rem]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

// import React from "react";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
// import Head from "./Head";

// const Body = () => {
//   return (
//     <div className="flex flex-col w-full">
//       <Head className="fixed top-0 left-0 right-0 z-10" />
//       <div className="flex flex-1 pt-[6rem]">
//         <Sidebar />
//         <div className="flex-1 overflow-auto">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;
