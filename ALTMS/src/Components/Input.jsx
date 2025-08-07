export default function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        {...props}
        className={`w-full border rounded-lg px-3 py-2 pl-${Icon ? "8" : "3"} focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm`} />
    </div>
  );
}