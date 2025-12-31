import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FareCard from "../components/FareCard";
import PriceInsight from "../components/PriceInsight";
import { API_BASE } from "../config";

export default function Fares() {
  const [params] = useSearchParams();
  const lat1 = Number(params.get("lat1"));
  const lon1 = Number(params.get("lon1"));
  const lat2 = Number(params.get("lat2"));
  const lon2 = Number(params.get("lon2"));

  const [fares, setFares] = useState([]);
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/fare/benchmark`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lat1, lon1, lat2, lon2 }),
    })
      .then(res => res.json())
      .then(data => {
        setFares(data.fares || []);
        setInsight(data.insight);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lat1, lon1, lat2, lon2]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4">
        <p className="text-gray-300">Calculating traffic‑aware fares…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4 space-y-4">
      <h1 className="text-white font-semibold">Smart Fare Benchmarking</h1>

      {fares.map((fare) => (
  <FareCard
    key={fare.vehicle}
    vehicle={fare.vehicle}
    price={fare.price}
    eta={fare.eta}
    level={fare.level}
  />
))}



{insight && (
  <PriceInsight
    insight={insight.level}
    reason={insight.reason}
  />
)}

    </div>
  );
}
