import { Link } from 'react-router-dom';
import { useAuth } from '../authContext';

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600">MyApp</Link>
      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
