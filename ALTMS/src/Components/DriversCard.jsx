function DriversCard({ drivers }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
      <h3 className="text-gray-800 font-medium mb-4">Drivers On Duty</h3>
      <ul className="space-y-4">
        {drivers.map((d) => (
          <li key={d.name} className="flex items-center gap-3">
            <img src={d.avatar} alt={d.name} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">{d.name}</p>
              <p className="text-xs text-gray-500">{d.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DriversCard