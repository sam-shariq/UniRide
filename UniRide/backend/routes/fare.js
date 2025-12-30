const express = require("express");
const router = express.Router();
const { getRoute } = require("../services/routeService");
const { estimateFare } = require("../services/fareService");

router.post("/benchmark", async (req, res) => {
  const { lat1, lon1, lat2, lon2 } = req.body;

  const route = await getRoute(lat1, lon1, lat2, lon2);

  const fares = ["Bike","Mini","Sedan"].map(v => ({
    vehicle: v,
    fare: estimateFare(v, route.distanceKm, route.durationMin),
  }));

  res.json({ route, fares });
});

module.exports = router;
