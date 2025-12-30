import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { API_BASE } from "../config";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();

    // Send token to backend
    await fetch(`${API_BASE}/auth/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    setUser(result.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Profile</h1>

      {!user ? (
        <button
          onClick={login}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Login with Google
        </button>
      ) : (
        <div className="bg-white p-4 rounded-xl shadow space-y-2">
          <p className="font-semibold">{user.displayName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>

          <button
            onClick={logout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
