import React from "react";

import Dashboard from "./icons/dashboarIcon";
import All from "./icons/allTaksIcon";
import Settings from "./icons/settingsIcon";
import Timers from "./icons/timersIcon";
import Calender from "./icons/calenderIcon";
import { useRouter } from "next/router";

const getIcon = (fill, iconPath) => {
  switch (iconPath) {
    case "Dashboard":
      return <Dashboard fill={fill} />;
    case "All Tasks":
      return <All fill={fill} />;
    case "Calender":
      return <Calender fill={fill} />;
    case "Timers":
      return <Timers fill={fill} />;
    case "Settings":
      return <Settings fill={fill} />;
  }
};

const NavButton = ({ isActive, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` transition-[100ms] inline-flex w-full h-[56px] ${
        isActive
          ? "text-timeline border-l-4 border-timeline border-solid bg-[#303030]   py-[15px] "
          : "text-[#a4a6b3]"
      } hover:border hover:border-timeline hover:border-solid hover:border-l-4 hover:border-r-0 hover:border-y-0   font-medium poppinsFont text-[16px]   px-[16px] items-center gap-x-[20px]`}
    >
      {getIcon(isActive ? "#ff9900" : "#a4a6b3", text)}
      {text}
    </button>
  );
};

// const NavButton = ({ iconPath, isActive }) => {
//   return (
//     <button className="w-full bg-red-600 h-[56px] ">
//       <div
//         className={`w-[3px] h-full ${
//           isActive ? " bg-timeline" : " bg-[#363740]"
//         }`}
//       ></div>
//       {getIcons(isActive ? , iconPath)}
//       <p>{iconPath}</p>
//     </button>
//   );
// };
const SideBar = () => {
  const router = useRouter();
  return (
    <div className="w-[255px] fixed h-screen  flex flex-col items-center py-4  bg-[#262626]  dark:bg-[#262626]">
      <div>
        <img src="../assets/logo.svg" className="w-[60px] h-[60px]" alt="" />
      </div>

      <div className="w-full my-[20px] border-b border-solid border-[#DFE0EB]">
        <NavButton
          text="Dashboard"
          isActive={router.pathname === "/dashboard" ? true : false}
          onClick={() => {
            router.push("/dashboard");
          }}
        />
        <NavButton
          text="All Tasks"
          isActive={router.pathname === "/dashboard/all" ? true : false}
          onClick={() => {
            router.push("//dashboard/all");
          }}
        />
        <NavButton
          text="Calender"
          isActive={router.pathname === "/dashboard/calender" ? true : false}
          onClick={() => {
            router.push("//dashboard/calender");
          }}
        />
        <NavButton
          text="Timers"
          isActive={router.pathname === "/dashboard/timers" ? true : false}
          onClick={() => {
            router.push("/dashboard/timers");
          }}
        />
        <NavButton
          text="Settings"
          isActive={router.pathname === "/dashboard/settings" ? true : false}
          onClick={() => {
            router.push("/dashboard/settings");
          }}
        />
      </div>

      <button className="bg-[#FF452C] text-white w-[60%] h-[36px]  rounded-md  hover:bg-[#c23623]">
        Logout
      </button>
    </div>
  );
};

export default SideBar;
