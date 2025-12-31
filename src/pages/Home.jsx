import { useState, useEffect } from "react";
import LocationInput from "../components/LocationInput";
import FreeMap from "../components/FreeMap";

const CACHE = {
  "jaypee institute of information technology, sector 128": [28.5116, 77.4096],
  "jaypee institute of information technology, sector 62": [28.6297, 77.3724],
};

async function geocode(place) {
  const key = place.toLowerCase().trim();
  if (CACHE[key]) return CACHE[key];

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
      place + ", Noida, India"
    )}`
  );
  const data = await res.json();
  if (!data.length) return null;

  return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
}

export default function Home() {
  const [pickupText, setPickupText] = useState(
    "Jaypee Institute of Information Technology, Sector 128"
  );
  const [dropText, setDropText] = useState(
    "Jaypee Institute of Information Technology, Sector 62"
  );

  const [pickupCoord, setPickupCoord] = useState(CACHE[pickupText.toLowerCase()]);
  const [dropCoord, setDropCoord] = useState(CACHE[dropText.toLowerCase()]);

  // 🔹 Debounced geocoding (NO lag)
  useEffect(() => {
    const t = setTimeout(async () => {
      if (pickupText.length > 3) {
        const c = await geocode(pickupText);
        if (c) setPickupCoord(c);
      }
      if (dropText.length > 3) {
        const c = await geocode(dropText);
        if (c) setDropCoord(c);
      }
    }, 700);

    return () => clearTimeout(t);
  }, [pickupText, dropText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black flex flex-col items-center pt-11 pb-32">
      <h1 className="text-white text-4xl font-bold mb-9">
        Plan your commute
      </h1>

      <div className="bg-teal-800 rounded-2xl p-8 w-1/4 min-w-[340px] flex flex-col items-center gap-6">
        <LocationInput
          label="Pickup"
          placeholder="Enter pickup location"
          value={pickupText}
          onChange={setPickupText}
        />

        <LocationInput
          label="Drop"
          placeholder="Enter destination"
          value={dropText}
          onChange={setDropText}
        />

        <div className="w-full h-40 overflow-hidden rounded-2xl border border-indigo-800/30 shadow-[0_0_40px_rgba(99,102,241,0.35)]">
          {pickupCoord && dropCoord && (
            <FreeMap pickup={pickupCoord} drop={dropCoord} />
          )}
        </div>

        <a
          href={`/fares?lat1=${pickupCoord[0]}&lon1=${pickupCoord[1]}&lat2=${dropCoord[0]}&lon2=${dropCoord[1]}`}
          className="text-white underline font-medium"
        >
          Check Smart Fares
        </a>
      </div>
    </div>
  );
}
