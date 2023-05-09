import React, { useState, useEffect, useRef } from "react";
import G6 from "@antv/g6";

const Graph = () => {
  const ref = useRef(null);
  const [graph, setGraph] = useState(null);
  const [nodeId, setNodeId] = useState("");
  const [edgeSource, setEdgeSource] = useState("");
  const [edgeTarget, setEdgeTarget] = useState("");

  // 初始化图表
  useEffect(() => {
    if (!graph) {
      const newGraph = new G6.Graph({
        container: ref.current,
        width: 800,
        height: 600,
        modes: {
          default: ["drag-node", "drag-canvas", "zoom-canvas"],
        },
        defaultNode: {
          type: "circle",
          size: 50,
          color: "#5B8FF9",
          style: {
            fill: "#C6E5FF",
            lineWidth: 2,
          },
        },
        defaultEdge: {
          type: "line",
          color: "#e2e2e2",
          size: 2,
        },
        layout: {
          type: "dagre",
          rankdir: "TB",
          nodesep: 30,
          ranksep: 100,
        },
      });

      setGraph(newGraph);
    }
  }, [graph]);

  // 添加节点
  const handleAddNode = () => {
    graph.addItem("node", {
      id: nodeId,
      x: Math.random() * 800,
      y: Math.random() * 600,
    });
  };

  // 添加边
  const handleAddEdge = () => {
    graph.addItem("edge", {
      source: edgeSource,
      target: edgeTarget,
    });
  };

  // 删除节点或边
  const handleDeleteItem = () => {
    const selectedItems = graph.get("selectedItems");
    if (selectedItems.length > 0) {
      graph.removeItem(selectedItems[0]);
    }
  };

  return (
    <div>
      <div ref={ref} />
      <div>
        <label>节点ID:</label>
        <input value={nodeId} onChange={(e) => setNodeId(e.target.value)} />
        <button onClick={handleAddNode}>添加节点</button>
      </div>
      <div>
        <label>边头:</label>
        <input
          value={edgeSource}
          onChange={(e) => setEdgeSource(e.target.value)}
        />
        <label>边尾:</label>
        <input
          value={edgeTarget}
          onChange={(e) => setEdgeTarget(e.target.value)}
        />
        <button onClick={handleAddEdge}>添加边</button>
      </div>
      <div>
        <button onClick={handleDeleteItem}>选中删除</button>
      </div>
    </div>
  );
};

export default Graph;
