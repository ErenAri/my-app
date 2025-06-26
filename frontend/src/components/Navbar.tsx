import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
