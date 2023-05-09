import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import G6 from "@antv/g6";

const Page2 = () => {
  const graphData = useSelector((state) => state.graphData);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: "graph-container",
        width: window.innerWidth - 100,
        height: window.innerHeight - 200,
        modes: {
          default: ["drag-canvas", "zoom-canvas"],
        },
        defaultNode: {
          type: "circle",
          size: [30],
          style: {
            fill: "#9EC9FF",
            stroke: "#5B8FF9",
          },
          labelCfg: {
            style: {
              fill: "#000",
              fontSize: 12,
            },
            position: "bottom",
          },
        },
        defaultEdge: {
          type: "line",
          style: {
            stroke: "#91d5ff",
          },
        },
      });
    }
    graph.data(graphData);
    graph.render();

    graph.on("node:click", (evt) => {
      const { item } = evt;
      const model = item.getModel();
      const label = model.label || "No Label";
      alert(`Node "${label}" clicked!`);
    });

    return () => {
      if (graph) {
        graph.destroy();
      }
    };
  }, [graphData]);

  return (
    <Card
      id="graph-container"
      style={{ height: "calc(100vh - 150px)", border: "1px solid #eee" }}
    />
  );
};

export default Page2;
