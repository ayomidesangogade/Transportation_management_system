function PieChart({ data }) {
  let cumulative = 0;
  const radius = 100;
  const cx = 120;
  const cy = 120;

  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      <svg width="240" height="240" viewBox="0 0 240 240">
        {data.map((d) => {
          const value = d.percent;
          const startAngle = (cumulative / 100) * 360;
          const endAngle = ((cumulative + value) / 100) * 360;
          const largeArc = value > 50 ? 1 : 0;
          const startRad = ((startAngle - 90) * Math.PI) / 180;
          const endRad = ((endAngle - 90) * Math.PI) / 180;
          const midRad = (((startAngle + endAngle) / 2 - 90) * Math.PI) / 180;
          const x1 = cx + radius * Math.cos(startRad);
          const y1 = cy + radius * Math.sin(startRad);
          const x2 = cx + radius * Math.cos(endRad);
          const y2 = cy + radius * Math.sin(endRad);
          const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
          const labelR = radius * 0.65;
          const lx = cx + labelR * Math.cos(midRad);
          const ly = cy + labelR * Math.sin(midRad);
          const textFill = value > 50 ? "#fff" : "#000";
          cumulative += value;
          return (
            <g key={d.name}>
              <path d={pathData} fill={d.colour} stroke="#fff" strokeWidth="2" />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="12" fill={textFill}>{`${d.percent}%`}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default PieChart