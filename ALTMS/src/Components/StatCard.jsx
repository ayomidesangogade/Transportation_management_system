function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">
      <h4 className="font-medium text-sm text-gray-600 leading-snug max-w-[12ch]">
        {title}
      </h4>
      <p className="text-3xl font-semibold mt-4">{value}</p>
    </div>
  )
}

export default StatCard