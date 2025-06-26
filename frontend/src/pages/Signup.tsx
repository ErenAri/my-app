// frontend/src/pages/Signup.tsx
import { useState } from 'react';
import { signup } from '../services/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      await signup(email, password);
      setMessage('Signup successful! You can now login.');
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Signup Page</h1>
      <input
        className="border p-2 mb-2 block"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2 block"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleSignup}
      >
        Signup
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
