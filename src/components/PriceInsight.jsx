export default function PriceInsight({ insight, reason }) {
  const map = {
    low: "🟢 Prices are lower than usual",
    medium: "🟡 Prices are normal for this time",
    high: "🔴 Prices are high due to traffic",
  };

  return (
    <div className="text-white/80 text-sm">
      <p>{map[insight]}</p>
      <p className="text-xs text-white/60">{reason}</p>
    </div>
  );
}
