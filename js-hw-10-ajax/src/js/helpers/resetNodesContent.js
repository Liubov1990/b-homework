export const resetNodesContent = (...nodesList) => {
  nodesList.forEach((node) => (node.innerHTML = ""));
};
