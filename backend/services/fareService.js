const VEHICLES = {
    Bike: { base: 20, perKm: 6, perMin: 1 },
    Mini: { base: 40, perKm: 12, perMin: 2 },
    Sedan: { base: 60, perKm: 18, perMin: 3 },
  };
  
  function estimateFare(vehicle, distance, time) {
    const v = VEHICLES[vehicle];
    return Math.round(v.base + distance*v.perKm + time*v.perMin);
  }
  
  module.exports = { estimateFare };
  