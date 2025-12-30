export default function FareCard({ vehicle, price, eta, level }) {
    const statusColor = {
      low: "text-green-600",
      medium: "text-yellow-600",
      high: "text-red-600",
    };
  
    return (
      <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{vehicle}</h3>
          <p className="text-sm text-gray-500">ETA: {eta} mins</p>
        </div>
  
        <div className="text-right">
          <p className="text-lg font-bold">₹{price}</p>
          <p className={`text-xs ${statusColor[level]}`}>
            {level === "low" && "Low Traffic"}
            {level === "medium" && "Busy"}
            {level === "high" && "Heavy Traffic"}
          </p>
        </div>
      </div>
    );
  }