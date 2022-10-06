import React from "react";
const Input = ({ value, setValue, label, errors, type }) => {
  const handleChange = ({ currentTarget: input }) => {
    setValue(input.value);
  };
  return (
    <div className="flex flex-col w-full mb-8 ">
      <label className=" text-left">{label}</label>
      <input
        className="w-full h-[30px] transition-[1000ms] dark:bg-black p-1 focus:outline-none focus:border-b-2 focus:border-timeline border-b border-solid border-black dark:border-white "
        value={value}
        onChange={handleChange}
        type={type}
      />
      {errors ? (
        <div>
          <p className="text-red-600">{errors}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Input;
