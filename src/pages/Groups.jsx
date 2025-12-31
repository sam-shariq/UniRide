import { useState } from "react";
import GroupCard from "../components/GroupCard";
import { API_BASE } from "../config";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  const createGroup = async () => {
    try {
      const res = await fetch(`${API_BASE}/groups/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users: ["u1", "u2", "u3"],
          totalFare: 210,
        }),
      });

      const data = await res.json();

      // Append the new group to the list
      setGroups((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4 space-y-4">
      <h1 className="text-white font-semibold">Available Groups</h1>

      {/* Trigger to create/fetch a group */}
      <button
        onClick={createGroup}
        className="px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
      >
        Create Group
      </button>

      {/* Render backend groups; fall back to your previous static examples if none yet */}
      {groups.length === 0 && (
        <>
          <GroupCard size={3} price={70} rating={4.6} />
          <GroupCard size={4} price={55} rating={4.3} />
        </>
      )}

      {groups.map((group, idx) => (
        <GroupCard
          key={group.id || idx}
          size={group.size || group.users?.length || 3}
          price={group.price || group.totalFare || 70}
          rating={group.rating || 4.5}
        />
      ))}
    </div>
  );
}
