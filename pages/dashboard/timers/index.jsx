import React from "react";
import Pomodoro from "../../../Components/Timers/Pomodoro";
import Wrapper from "../../../Components/Dashboard/NavWrapper";

const Timers = () => {
  return (
    <Wrapper>
      {" "}
      <Pomodoro />{" "}
    </Wrapper>
  );
};

export default Timers;
