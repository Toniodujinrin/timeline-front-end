import Link from "next/link";
import Charts from "./chart";
const Card = ({ completed, pending, title, type, percentage }) => {
  return (
    <div className="w-full h-[400px] rounded-md shadow-md  bg-white dark:bg-[#262626] border border-solid dark:border-black border-[#CCCCCC] flex flex-row items-center justify-between">
      <div className="flex flex-col h-full w-[65%]  items-center">
        <div className="flex w-full flex-row justify-between mt-4 px-4">
          <p className="text-[18px] font-medium'">Task Visualizer</p>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-row items-center gap-x-1">
              <div className="w-[23px] h-[2px] bg-[#FF452C]"></div>
              <p className="text-sm ">Urgent</p>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <div className="w-[23px] h-[2px] bg-timeline"></div>
              <p className="text-sm">Regular</p>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <div className="w-[23px] h-[2px] bg-[#00FF47]"></div>
              <p className="text-sm">Casual</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-4 w-[70%] h-[70%]">
          <Charts urgent={3} casual={3} regular={2} />
        </div>
      </div>

      <div className="flex flex-col my-auto border-l h-full w-[35%] border-solid dark:border-black border-[#DFE0EB]">
        <div className="flex flex-col items-center border-b justify-center border-solid dark:border-black border-[#DFE0EB] h-1/3 font-medium text-[21px]">
          <p>{"Urgent Tasks"}</p>
          <p className="mr-4" style={{ color: "#FF452C" }}>
            {completed}
          </p>
        </div>
        <div className="flex flex-col border-b border-solid justify-center dark:border-black border-[#DFE0EB] h-1/3 items-center font-medium text-[21px]">
          <p>{"Regular Tasks"}</p>
          <p className="mr-4" style={{ color: "#ff9900" }}>
            {completed}
          </p>
        </div>

        <div className="flex flex-col border-b border-solid justify-center dark:border-black border-[#DFE0EB] h-1/3  font-medium items-center text-[21px]">
          <p>{"Casual Tasks"}</p>
          <p className="mr-4" style={{ color: "#00FF47" }}>
            {`${pending} `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
