export default function GroupCard({ members, price, rating }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow space-y-2">
        <h3 className="font-semibold">{members}‑Person Group</h3>
        <p className="text-sm text-gray-600">₹{price} per person</p>
        <p className="text-sm">⭐ {rating}</p>
        <button className="w-full bg-green-600 text-white py-2 rounded-lg">
          Join Group
        </button>
      </div>
    );
  }
  