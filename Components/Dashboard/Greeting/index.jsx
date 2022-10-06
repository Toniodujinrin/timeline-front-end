import React from "react";

const Greeting = ({ name }) => {
  const date = new Date();
  const getTime = () => {
    const hour = date.getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    }
    if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    }
    if (hour >= 18 && hour <= 23) {
      return "Good Evening";
    }
  };
  return (
    <div className="flex flex-row">
      <h1 className=" font-semibold text-[28px]">{`${getTime()},`}</h1>
      <p className="font-semibold text-[28px] text-timeline">{`${name}`}</p>
    </div>
  );
};
export default Greeting;
