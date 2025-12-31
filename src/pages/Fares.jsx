import FareCard from "../components/FareCard";
import PriceInsight from "../components/PriceInsight";

export default function Fares() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4 space-y-4">
      <h1 className="text-white font-semibold">Smart Fare Benchmarking</h1>

      <FareCard vehicle="Bike" price="68" eta="14" level="low" />
      <FareCard vehicle="Mini" price="120" eta="18" level="medium" />
      <FareCard vehicle="Sedan" price="190" eta="22" level="high" />

      <PriceInsight />
    </div>
  );
}
