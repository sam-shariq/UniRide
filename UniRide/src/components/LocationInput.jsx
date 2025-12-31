export default function LocationInput({ label, placeholder }) {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  