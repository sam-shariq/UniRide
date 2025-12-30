import { useEffect, useState } from "react";
import FareCard from "../components/FareCard";
import PriceInsight from "../components/PriceInsight";
import { API_BASE } from "../config";

export default function Fares() {
  const [fares, setFares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/fare/benchmark`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lat1: 28.61,
        lon1: 77.20,
        lat2: 28.65,
        lon2: 77.23,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setFares(data.fares);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading fares...</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Smart Fare Benchmarking</h1>

      {fares.map((f, i) => (
        <FareCard
          key={i}
          vehicle={f.vehicle}
          price={f.fare}
          eta="--"
          level="medium"
        />
      ))}

      <PriceInsight />
    </div>
  );
}
