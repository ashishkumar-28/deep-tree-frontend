import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useRouter } from 'next/router';

export default function Home() {
  const [inputUsername, setInputUsername] = useState('');
  const { setUsername } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = () => {
    setUsername(inputUsername);
    router.push('/tree');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Login
        </button>
      </div>
    </div>
  );
}
