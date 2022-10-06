import React from "react";
import ReactDOM from "react-dom";
import { VictoryPie } from "victory";

const Charts = ({ urgent, regular, casual }) => {
  return (
    <VictoryPie
      animate={{
        duration: 2000,
      }}
      colorScale={["#FF452C", "#ff9900", "#00FF47"]}
      responsive={true}
      height={400}
      width={400}
      innerRadius={({ datum }) => (datum.y < 20 ? datum.y * 5 : datum.y * 1)}
      data={[
        { x: "completed", y: urgent },
        { x: "Incomplete", y: regular },
        { x: "Incomplete", y: casual },
      ]}
    />
  );
};

export default Charts;
