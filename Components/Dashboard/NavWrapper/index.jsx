import SideBar from "../SideNav";
import Greeting from "../Greeting";
import React from "react";
import TopNav from "../topnav";

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-screen">
      <SideBar />
      <div className="w-full flex flex-col  ">
        <TopNav />
        <div className="lg:block hidden">
          <div className="pl-[255px] pt-[80px] w-full h-[1024px] min-h-screen min-w-screen ">
            <div className=" w-full min-h-[calc(100vh-100px)] pl-[30px] pr-[40px]  pb-[43px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
