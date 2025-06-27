import { useAuth } from '../authContext';
import { useEffect, useState } from 'react';
import { getProfile } from '../services/auth';

export default function Home() {
  const { token } = useAuth();
  const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
    const fetchProfile = async () => {
        if (token) {
        try {
            const res = await getProfile(token);
            setEmail(res.user.email);
        } catch (err) {
            setEmail(null);
        }
        } else {
        
        setEmail(null);
        }
    };

    fetchProfile();
    }, [token]);


  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
      {email ? (
        <p className="text-lg text-green-600 font-semibold">
          Welcome back, {email}!
        </p>
      ) : (
        <p className="text-gray-600">Please log in or sign up to continue.</p>
      )}
    </div>
  );
}