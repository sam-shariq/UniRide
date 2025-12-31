export default function LocationInput({
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <label className="text-white font-medium">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="
          bg-white/80
          placeholder-gray-500
          w-full
          px-4
          py-2.5
          rounded-md
          text-black
          focus:outline-none
          focus:ring-2
          focus:ring-teal-900
        "
      />
    </div>
  );
}
