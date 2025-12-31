export default function FareCard({ type, price, eta, status }) {
    const statusColor = {
      low: "text-green-600",
      medium: "text-yellow-600",
      high: "text-red-600",
    };
  
    return (
      <div className="bg-white/90 p-4 rounded-xl shadow flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{type}</h3>
          <p className="text-sm text-black">ETA: {eta} mins</p>
        </div>
  
        <div className="text-right">
          <p className="text-lg font-bold">₹{price}</p>
          <p className={`text-xs ${statusColor[status]}`}>
            {status === "low" && "Low Traffic"}
            {status === "medium" && "Busy"}
            {status === "high" && "Heavy Traffic"}
          </p>
        </div>
      </div>
    );
  }
  