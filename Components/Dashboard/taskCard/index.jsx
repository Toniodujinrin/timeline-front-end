import React from "react";
import Data from "./dummyData";
import { useState } from "react";

const TaskCard = () => {
  const date = new Date(Date.now());
  const [taskData, setTaskData] = useState(Data);

  const setComplete = (taskId) => {
    const Data = [...taskData];
    Data.map(
      (task) => (task.completed = task.id === taskId ? true : task.completed)
    );
    setTaskData(Data);
    console.log(Data);
  };
  const todaysTask = taskData.filter(
    (task) =>
      new Date(task.createdAt).toISOString().slice(0, 10) ===
      date.toISOString().slice(0, 10)
  );
  const todaysUnfinishedTasks = todaysTask.filter(
    (task) => task.completed === false
  );

  return (
    <div className="bg-white dark:bg-[#262626] border border-solid border-[#CCCCCC] dark:border-black rounded-md shadow-md mt-6 h-auto w-full px-4 py-4 ">
      <div className="flex w-full flex-row justify-between items-center">
        <h1 className="text-[19px] font-bold">Tasks</h1>
        <p className="text-timeline text-[16px] cursor-pointer ">View all</p>
      </div>
      <h2 className="text-[#9FA2B4] text-[12px]">today</h2>
      <ul className="h-full w-full">
        {todaysUnfinishedTasks.length > 0 ? (
          todaysUnfinishedTasks.map((task) => (
            <li className="flex flex-row justify-between py-[20px] items-center border-t border-solid border-t-[#9fa2b4]">
              <button
                onClick={() => {
                  setComplete(task.id);
                }}
                className="w-[20px] hover:border-timeline h-[20px] rounded-full border border-solid border-[#9fa2b4]"
              ></button>
              <p className="w-[70%]">{task.details}</p>

              <p
                className={`p-1 text-white rounded-md ${
                  task.status == "urgent" && "bg-[#FF452C] "
                } ${task.status == "casual" && "bg-[#00FF47]"} ${
                  task.status == "regular" && "bg-timeline"
                }`}
              >
                {task.status}
              </p>
            </li>
          ))
        ) : (
          <div className="text-center py-[40px] text-[21px] font-semibold">
            {" "}
            You have no tasks for today
          </div>
        )}
      </ul>
      <div className="w-full flex justify-end">
        <button className="bg-timeline p-3 rounded-md">New</button>
      </div>
    </div>
  );
};

export default TaskCard;
