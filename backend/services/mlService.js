function detectOverpricing(current, avg) {
    if (!avg) return "normal";
    if (current > avg * 1.4) return "high";
    if (current > avg * 1.2) return "medium";
    return "low";
  }
  
  module.exports = { detectOverpricing };
  