import React, { useState, useEffect } from 'react';
import { useTreeStore } from '../store/useTreeStore';

const TreeNode = ({ node }) => {
  const { updateNodeValue, saveHistory } = useTreeStore();
  const [value, setValue] = useState(node.value);

  useEffect(() => {
    setValue(node.value);
  }, [node.value]);

  const handleClick = () => {
    const newValue = value + 1;
    setValue(newValue);
    updateNodeValue(node, newValue);
    saveHistory();
  };

  return (
    <div className="node" onClick={handleClick}>
      Node Value: {value}
    </div>
  );
};

export default TreeNode;
