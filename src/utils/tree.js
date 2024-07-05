export const generateTree = (depth) => {
  const createNode = (level) => {
    const node = { value: level, children: [] };
    if (level < depth) {
      node.children = Array.from({ length: 2 }, () => createNode(level + 1));
    }
    return node;
  };
  return createNode(0);
};
