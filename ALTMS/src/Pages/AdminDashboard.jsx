import React, { useState } from "react";
import {
  Bell,
  Settings,
  User,
  Truck,
  CalendarRange,
  Map,
  BarChart2,
  Circle,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react"
import UILogo from "../images/university-of-ibadan-logo-transparent.png"

const stats = [
  { label: "Total Vehicles", value: 120 },
  { label: "Pending Requests", value: 8 },
  { label: "Active Drivers", value: 24 },
  { label: "Trips Completed Today", value: 5 },
];

const departments = [
  { name: "Facilities", percent: 35, colour: "#0f6848" },
  { name: "Admissions", percent: 25, colour: "#43a883" },
  { name: "Academics", percent: 20, colour: "#5fc4a1" },
  { name: "Other", percent: 20, colour: "#8ad1b8" },
];

const drivers = [
  { name: "Theresa Moore", avatar: "https://randomuser.me/api/portraits/women/68.jpg", status: "On trip" },
  { name: "Ronald Bradley", avatar: "https://randomuser.me/api/portraits/men/32.jpg", status: "On trip" },
  { name: "Kathryn Welch", avatar: "https://randomuser.me/api/portraits/women/65.jpg", status: "On trip" },
];

const recentRequests = [
  { department: "Facilities", destination: "Warehouse", status: "Approved", vehicle: "VAN‑012", driver: "Daniel Knight" },
  { department: "Admissions", destination: "Clinic", status: "Pending", vehicle: "—", driver: "—" },
  { department: "Academics", destination: "Conference Center", status: "Completed", vehicle: "BUS‑005", driver: "Rachel Greene" },
  { department: "Research", destination: "Library", status: "Approved", vehicle: "SED‑001", driver: "Brandon Watts" },
];

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Vehicle Management", icon: Truck },
  { label: "Scheduling", icon: CalendarRange },
  { label: "Tracking", icon: Map },
  { label: "Analytics", icon: BarChart2 },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#f8f9fa] overflow-hidden">
      {/* Sidebar */}
      <SideBar state={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} navItems={navItems} />
      {/* Backdrop (mobile) */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-10 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button className="p-2 rounded-lg bg-gray-100 text-gray-700 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-base font-semibold text-gray-700 hidden md:block">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <IconButton icon={Bell} />
            <IconButton icon={Settings} />
            <IconButton icon={User} />
          </div>
        </header>

        {/* Scrollable content */}
        <main className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Stat cards */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-gray-500 text-sm">{s.label}</p>
                <p className="text-4xl font-semibold mt-2">{s.value}</p>
              </div>
            ))}
          </section>

          {/* Pie chart + drivers */}
          <section className="grid gap-4 lg:grid-cols-3">
            {/* Pie card */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2 flex flex-col">
              <h3 className="text-gray-800 font-medium mb-4">Request Distribution by Department</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <PieChart data={departments} />
                <Legend data={departments} />
              </div>
            </div>

            {/* Drivers card */}
            <DriversCard drivers={drivers} />
          </section>

          {/* Recent requests */}
          <section className="bg-white rounded-xl shadow-sm p-6 overflow-auto">
            <h3 className="text-gray-800 font-medium mb-4">Recent Transport Requests</h3>
            <table className="min-w-full text-sm">
              <thead className="text-left text-gray-500 border-b">
                <tr>
                  <th className="py-2 pr-4">Department</th>
                  <th className="py-2 pr-4">Destination</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4">Vehicle</th>
                  <th className="py-2">Driver</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 pr-4 whitespace-nowrap">{req.department}</td>
                    <td className="py-3 pr-4 whitespace-nowrap">{req.destination}</td>
                    <td className="py-3 pr-4 whitespace-nowrap">{req.status}</td>
                    <td className="py-3 pr-4 whitespace-nowrap">{req.vehicle}</td>
                    <td className="py-3 whitespace-nowrap">{req.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Reusable sub‑components
// -----------------------------------------------------------------------------
function IconButton({ icon: Icon }) {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-lg">
      <Icon size={20} />
    </button>
  );
}

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
  );
}

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
