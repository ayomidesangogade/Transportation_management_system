import { Circle } from "lucide-react"

function Legend({ data }) {
  return (
    <ul className="space-y-1 md:space-y-2">
      {data.map((d) => (
        <li key={d.name} className="flex items-center gap-2 text-sm">
          <Circle fill={d.colour} stroke={d.colour} size={10} />
          {d.name}
        </li>
      ))}
    </ul>
  )
}

export default Legend