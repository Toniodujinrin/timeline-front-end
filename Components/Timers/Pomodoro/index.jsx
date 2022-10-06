import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

import SettingsInput from "../SettingsInput";

const Pomodoro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [setPage, setSetPage] = useState(false);
  const [focus, setFocus] = useState(10);
  const [breakTime, setBreakTime] = useState(5);
  const [period, SetPeriodTime] = useState(1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-row">
        {!setPage ? (
          <div className="w-[300px] h-[300px]">
            <CircularProgressbar
              value={60}
              text={"60%"}
              styles={buildStyles({
                textColor: "#ff9900",
                pathColor: "#ff9900",
                trailColor: "transparent",
              })}
            />
          </div>
        ) : (
          <div>
            <div className=" w-[300px] h-[320px] border-[2px] shadow-md rounded-md p-4  ">
              <div className="w-full flex justify-end">
                <button
                  className=" rounded-full w-[25px] h-[25px] text-white  bg-black"
                  onClick={() => {
                    setSetPage();
                  }}
                >
                  X
                </button>
              </div>
              <h1 className=" text-center font-semibold text-lg">
                Timer Settings
              </h1>
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex flex-col items-center"
              >
                <SettingsInput
                  value={focus}
                  setValue={setFocus}
                  label="Focus Period"
                  errors={null}
                  type="number"
                />
                <SettingsInput
                  value={breakTime}
                  setValue={setBreakTime}
                  label="Break"
                  errors={null}
                  type="number"
                />
                <SettingsInput
                  value={period}
                  setValue={SetPeriodTime}
                  label="Cycles"
                  errors={null}
                  type="number"
                />

                <button className="w-[60%] h-auto py-2 mt-2 hover:bg-[#E78A00]  bg-timeline text-white rounded-md mx-auto">
                  Set
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center w-[40%] m-auto">
        <div className="flex flex-row items-center justify-around mt-8 w-full ">
          <button
            style={{ backgroundColor: setPage ? "gray" : "black" }}
            className="bg-black w-auto  h-auto p-3 text-white rounded-md "
          >
            start
          </button>
          <button
            style={{ backgroundColor: setPage ? "gray" : "black" }}
            className="bg-black w-auto  h-auto p-3 text-white rounded-md "
          >
            stop
          </button>
        </div>
        <div className="mt-4">
          <button
            style={{ backgroundColor: setPage ? "gray" : "black" }}
            onClick={() => setSetPage(!setPage)}
            className="bg-black w-auto  h-auto p-3 text-white rounded-md "
            disabled={setPage}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
