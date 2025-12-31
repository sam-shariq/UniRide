import GroupCard from "../components/GroupCard";

export default function Groups() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4 space-y-4">
      <h1 className="text-white font-semibold">Available Groups</h1>

      <GroupCard size={3} price={70} rating={4.6} />
      <GroupCard size={4} price={55} rating={4.3} />
    </div>
  );
}
