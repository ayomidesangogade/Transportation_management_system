import { ChevronRight } from "lucide-react"

function QuickLink({ label }) {
  return (
    <button className="w-full bg-white rounded-lg shadow-sm px-4 py-3 flex items-center justify-between hover:bg-gray-50">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  )
}

export default QuickLink