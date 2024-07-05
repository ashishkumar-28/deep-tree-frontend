import React from 'react';
import { useTreeStore } from '../store/useTreeStore';
import TreeNode from './TreeNode';

const Tree = () => {
  const { tree } = useTreeStore();

  const renderTree = (node) => {
    if (!node) return null;
    return (
      <div key={node.id} className="node-container">
        <TreeNode node={node} />
        <div className="children-container">
          {node.children?.map(child => renderTree(child))}
        </div>
      </div>
    );
  };

  return <div className="tree-container">{renderTree(tree)}</div>;
};

export default Tree;
