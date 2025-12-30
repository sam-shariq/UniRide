import { useState } from "react";
import GroupCard from "../components/GroupCard";
import { API_BASE } from "../config";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  const createGroup = async () => {
    const res = await fetch(`${API_BASE}/groups/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        users: ["u1", "u2", "u3"],
        totalFare: 210,
      }),
    });

    const data = await res.json();
    setGroups([...groups, data]);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Groups</h1>

      <button
        onClick={createGroup}
        className="bg-green-600 text-white py-2 px-4 rounded-lg"
      >
        Create Group
      </button>

      {groups.map((g, i) => (
        <GroupCard key={i} size={3} price={g.perPerson} rating={4.5} />
      ))}
    </div>
  );
}
