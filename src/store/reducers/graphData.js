const initialState = {
  nodes: [],
  edges: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NODE":
      return { ...state, nodes: [...state.nodes, action.payload] };
    case "ADD_EDGE":
      return { ...state, edges: [...state.edges, action.payload] };
    case "DELETE_NODE":
      return {
        ...state,
        nodes: state.nodes.filter((n) => n.id !== action.payload),
        edges: state.edges.filter(
          (e) => e.source !== action.payload && e.target !== action.payload
        ),
      };
    case "DELETE_EDGE":
      return {
        ...state,
        edges: state.edges.filter(
          (e) =>
            e.source !== action.payload.source ||
            e.target !== action.payload.target
        ),
      };
    default:
      return state;
  }
};
