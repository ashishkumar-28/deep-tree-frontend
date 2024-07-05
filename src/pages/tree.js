import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useTreeStore } from '../store/useTreeStore';
import Tree from '../components/Tree';
import { saveTree, getTree } from '../utils/api';
import { generateTree } from '../utils/tree';

export default function TreePage() {
  const { username } = useContext(UserContext);
  const { tree, setTree, undo, redo } = useTreeStore();

  useEffect(() => {
    if (username) {
      getTree(username).then((response) => {
        if (response.data) {
          setTree(JSON.parse(response.data.treeData));
        } else {
          setTree(generateTree(10, 2));
        }
      }).catch(error => {
        console.error("Error fetching tree data:", error);
        setTree(generateTree(10, 2)); // Generate default tree on error
      });
    }
  }, [username, setTree]);

  const handleSave = () => {
    saveTree(username, JSON.stringify(tree))
      .catch((error) => {
        console.error('Failed to save tree:', error);
      });
  };

  const handleUndo = () => {
    undo();
  };

  const handleRedo = () => {
    redo();
  };

  if (!username) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Please login first.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Welcome, {username}</h1>
        <div className="tree-container">
          {tree && <Tree />}
        </div>
        <div className="mt-4 flex space-x-2">
          <button onClick={handleSave} className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Save
          </button>
          <button onClick={handleUndo} className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300">
            Undo
          </button>
          <button onClick={handleRedo} className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300">
            Redo
          </button>
        </div>
      </div>
    </div>
  );
}
