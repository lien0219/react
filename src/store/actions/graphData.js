export const addNode = (node) => ({
  type: "ADD_NODE",
  payload: node,
});

export const deleteNode = (nodeId) => ({
  type: "DELETE_NODE",
  payload: nodeId,
});

export const addEdge = (edge) => ({
  type: "ADD_EDGE",
  payload: edge,
});

export const deleteEdge = (edge) => ({
  type: "DELETE_EDGE",
  payload: edge,
});
