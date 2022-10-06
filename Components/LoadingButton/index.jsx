import React from "react";
const LoadButton = ({ isLoading, content }) => {
  return (
    <button
      disabled={!isLoading}
      className="w-full text-white dark:text-white h-[40px] rounded-md hover:bg-[#E78A00] flex items-center justify-center bg-timeline"
    >
      {!isLoading ? <p>{content}</p> : <div class="bars-7"></div>}
    </button>
  );
};

export default LoadButton;
