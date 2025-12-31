import LocationInput from "../components/LocationInput";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black flex flex-col items-center pt-11 pb-32">
      
      {/* Heading */}
      <h1 className="text-white text-4xl font-bold mb-9">
        Plan your commute
      </h1>

      {/* TEAL CONTAINER */}
      <div
        className="
          bg-teal-800
          hover:bg-teal-700
          transition-all
          duration-300
          hover:-translate-y-1 hover:shadow-teal-500/20
          rounded-2xl
          p-8
          w-1/4
          min-w-[340px]
          flex
          flex-col
          items-center
          gap-6
        "
      >
        {/* Inputs */}
        <LocationInput
          label="Pickup"
          placeholder="Enter pickup location"
        />

        <LocationInput
          label="Drop"
          placeholder="Enter destination"
        />

        {/* Map placeholder */}
<div className="
  w-full
  h-40
  rounded-xl
  flex
  items-center
  justify-center
  font-medium

  bg-indigo-500/40
  border
  border-indigo-800/30
  rounded-2xl
  shadow-[0_0_40px_rgba(99,102,241,0.35)]
  text-white
">
  Google Map Placeholder
        </div>

        {/* CTA */}
        <a
          href="/fares"
          className="text-white underline font-medium"
        >
          Check Smart Fares
        </a>
      </div>
    </div>
  );
}
