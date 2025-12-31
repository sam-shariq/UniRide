const express = require("express");
const router = express.Router();

/* ---------- HELPERS ---------- */
function haversine(lat1, lon1, lat2, lon2) {
  const toRad = v => (v * Math.PI) / 180;
  const R = 6371;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function trafficMultiplier() {
  const h = new Date().getHours();
  if (h >= 8 && h <= 11) return 1.5;
  if (h >= 17 && h <= 20) return 1.6;
  return 1.15;
}

function estimateETA(distanceKm, speed) {
  const mins = (distanceKm / speed) * 60 * trafficMultiplier();
  return Math.max(8, Math.round(mins));
}

/* ---------- API ---------- */
router.post("/benchmark", (req, res) => {
  const { lat1, lon1, lat2, lon2 } = req.body;

  const distanceKm = haversine(lat1, lon1, lat2, lon2);

  const vehicles = [
    { vehicle: "Bike", base: 20, perKm: 6, speed: 30 },
    { vehicle: "Auto", base: 30, perKm: 8, speed: 24 },
    { vehicle: "Mini", base: 50, perKm: 12, speed: 28 },
    { vehicle: "Sedan", base: 80, perKm: 15, speed: 32 },
  ];

  const fares = vehicles.map(v => {
    const eta = estimateETA(distanceKm, v.speed);
    const price = Math.round(
      (v.base + distanceKm * v.perKm) * trafficMultiplier()
    );

    return {
      vehicle: v.vehicle,   // ✅ shown
      price,                // ✅ frontend expects this
      eta,                  // ✅ never undefined
      level: "medium",      // ✅ always exists
    };
  });

  res.json({ fares });
});

module.exports = router;
