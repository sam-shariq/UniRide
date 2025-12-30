const axios = require("axios");

async function getRoute(lat1, lon1, lat2, lon2) {
  const url = `https://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=false`;

  const res = await axios.get(url);
  const route = res.data.routes[0];

  return {
    distanceKm: route.distance / 1000,
    durationMin: route.duration / 60,
  };
}

module.exports = { getRoute };
