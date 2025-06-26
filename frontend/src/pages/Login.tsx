import { useState } from 'react';
import { login as loginService } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login: saveToken } = useAuth();

  const handleLogin = async () => {
    try {
      const res = await loginService(email, password);
      saveToken(res.token);
      setMessage('Login successful!');
      navigate('/dashboard');
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Login Page</h1>
      <input
        className="border p-2 mb-2 block w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2 block w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 w-full"
        onClick={handleLogin}
      >
        Login
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}