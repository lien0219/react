import React, { useEffect } from "react";
import G6 from "@antv/g6";

const Topology = ({ data }) => {
  const containerRef = React.useRef(null);

  useEffect(() => {
    if (!data) return;

    const graph = new G6.Graph({
      container: containerRef.current,
      width: containerRef.current.scrollWidth,
      height: containerRef.current.scrollHeight,
      modes: {
        default: ["drag-canvas", "drag-node"],
      },
      layout: {
        type: "dagre",
        rankdir: "LR",
        nodesepFunc: () => 1,
        ranksepFunc: () => 1,
      },
      defaultNode: {
        size: [80, 40],
        style: {
          fill: "#9EC9FF",
          stroke: "#5B8FF9",
        },
      },
      defaultEdge: {
        shape: "polyline",
      },
    });

    graph.data(data);
    graph.render();

    return () => graph.destroy();
  }, [data]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default Topology;
