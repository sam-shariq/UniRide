import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { API_BASE } from "../config";

export default function Profile() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      // Send token to backend for verification
      await fetch(`${API_BASE}/auth/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4 space-y-4">
      <h1 className="text-white font-semibold">Profile</h1>

      <div className="bg-white/95 p-4 rounded-xl shadow">
        {user ? (
          <>
            <p className="font-semibold">{user.displayName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="mt-2">⭐ Rating: 4.5</p>

            <button
              onClick={logout}
              className="mt-4 px-4 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="font-semibold">Student Name</p>
            <p className="text-sm text-gray-500">student@college.edu</p>
            <p className="mt-2">⭐ Rating: 4.5</p>

            <button
              onClick={login}
              className="mt-4 px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
            >
              Login with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
