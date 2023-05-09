import React from "react";
import Topology from "./pages/Topology";

const App = () => {
  const data = {
    nodes: [
      { id: "node1", label: "Node 1" },
      { id: "node2", label: "Node 2" },
      { id: "node3", label: "Node 3" },
    ],
    edges: [
      { source: "node1", target: "node2" },
      { source: "node2", target: "node3" },
    ],
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Topology data={data} />
    </div>
  );
};

export default App;
