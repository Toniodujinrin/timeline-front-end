import { useRouter } from "next/router";

const TopNav = () => {
  const router = useRouter();
  const getPage = () => {
    switch (router.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/dashboard/all":
        return "All Tasks";
      case "/dashboard/timers":
        return "Timers";
      case "/dashboard/calender":
        return "Calender";
      case "/dashboard/settings":
        return "Settings";
    }
  };
  return (
    <div
      style={{ zIndex: 20 }}
      className="fixed left-[255px] top-0 w-[calc(100%-255px)] h-[80px] dark:bg-[#262626] bg-white pl-[35px] pt-[0px] pr-[66px] flex justify-between items-center poppinsFont  "
    >
      <div className=" font-bold text-[24px]  ">{getPage()}</div>

      <div className="flex flex-row items-center gap-x-4">
        <div className="flex flex-row items-center gap-x-4 px-4 border-r border-solid border-[#a4a6b3]">
          <img src="../assets/search.svg" alt="" />
          <img src="../assets/notification.svg" alt="" />
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <p>Toni Odujinrin</p>
          <div className="w-[44px] h-[44px] rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
