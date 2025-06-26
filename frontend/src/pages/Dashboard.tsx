import { useEffect, useState } from 'react';
import { useAuth } from '../authContext';
import { getProfile } from '../services/auth';

export default function Dashboard() {
  const { token, logout } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token) {
          const data = await getProfile(token);
          setProfile(data.user);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Dashboard</h1>
      
      {error && <p className="text-red-500">{error}</p>}

      {profile ? (
        <div className="mb-4">
          <p><strong>User ID:</strong> {profile._id}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}


      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
