import Card from "../../Components/Dashboard/Card";
import Greeting from "../../Components/Dashboard/Greeting";
import Wrapper from "../../Components/Dashboard/NavWrapper";
import { useState } from "react";
import TaskCard from "./../../Components/Dashboard/taskCard";

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col items-center w-full mt-6">
          <div className="flex flex-row w-full mx-auto items-center justify-around">
            <Card
              title={"Completed tasks"}
              type={true}
              completed={3}
              pending={2}
              percentage={30}
            />
          </div>
          <TaskCard />
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
