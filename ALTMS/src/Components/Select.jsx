export default function Select({ placeholder }) {
  return (
    <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-gray-700" defaultValue="">
      <option value="" disabled hidden>{placeholder}</option>
      <option value="Science">Science</option>
      <option value="SUB">SUB</option>
      <option value="Technology">Technology</option>
    </select>
  );
}