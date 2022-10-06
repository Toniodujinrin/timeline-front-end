import React from "react";

const SettingsInput = ({ value, setValue, type, errors, label }) => {
  const onChange = ({ currentTarget: input }) => {
    setValue(input.value);
  };
  return (
    <div className="flex flex-row mb-4 w-full justify-between items-center ">
      <label className=" font-medium  mr-4">{`${label}:`}</label>
      <div className="flex flex-row items-center">
        <input
          className="border border-solid border-black w-[60px] p-1 focus:outline-none focus:border-timeline rounded-md"
          value={value}
          type={type}
          onChange={onChange}
        ></input>
        <span className="text-[18px] ml-1">
          {label == "Cycles" ? "cycles" : "mins"}
        </span>
      </div>
      {errors && <div>{errors}</div>}
    </div>
  );
};

export default SettingsInput;
