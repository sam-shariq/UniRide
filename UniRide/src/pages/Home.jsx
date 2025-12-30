import LocationInput from "../components/LocationInput";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Plan your commute</h1>

      <LocationInput label="Pickup" placeholder="Enter pickup location" />
      <LocationInput label="Drop" placeholder="Enter destination" />

      <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        Google Map Placeholder
      </div>

      <a
        href="/fares"
        className="block text-center bg-blue-600 text-white py-3 rounded-lg"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/fares';
        }}
      >
        Check Smart Fares
      </a>
    </div>
  );
}
