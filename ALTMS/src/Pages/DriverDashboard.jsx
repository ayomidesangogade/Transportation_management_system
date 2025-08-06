import React, { useState } from "react";
import {
  Home,
  ClipboardList,
  Truck,
  Users,
  BarChart2,
  Settings,
  CheckCircle,
  User,
  Bell,
  MessageSquare,
  Map as MapIcon,
  Calendar as CalendarIcon,
  Menu,
  X,
} from "lucide-react";
import UILogo from "../images/university-of-ibadan-logo-transparent.png"

const navItems = [
  { label: "Dashboard", icon: CheckCircle, active: true },
  { label: "Request Tracker", icon: ClipboardList },
  { label: "Vehicle Management", icon: Truck },
  { label: "Driver List", icon: Users },
  { label: "Analytics", icon: BarChart2 },
  { label: "Settings", icon: Settings },
];

const assignedTrips = [
  { time: "8:00 AM", dest: "Science" },
  { time: "10:00 AM", dest: "Library" },
  { time: "1:00 PM", dest: "Main Entr…" },
  { time: "3:00 PM", dest: "Student Cen…" },
];

export default function DriverDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-[#059669] text-white transform transition-transform md:translate-x-0 md:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
          <div className="h-16 flex items-center px-6 border-b">
                    <img src={UILogo} alt="UI crest" className="h-10 w-15" />
                    <span className="font-extrabold text-lg">ALTMS</span>
            </div>
          <button className="md:hidden text-white" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#" // hook up routes later
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${active ? "bg-white/10" : "hover:bg-white/5"}`}
            >
              <Icon size={18} />
              <span className="truncate">{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Backdrop for mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-10 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main section */}
      <section className="flex-1 min-h-screen bg-[#fafaf7] flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-lg bg-gray-100 text-gray-700 md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-base font-semibold text-gray-700 hidden md:block">
              Driver Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4 text-[#06203c]">
            <IconButton icon={MessageSquare} />
            <IconButton icon={User} />
            <IconButton icon={Bell} />
          </div>
        </header>

        {/* Scrollable content */}
        <main className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Top cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Next assigned trip */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:col-span-2">
              <h3 className="font-semibold mb-2 text-lg">Next Assigned Trip</h3>
              <p className="flex items-center gap-2 text-lg font-medium">
                <span className="h-3 w-3 rounded-full bg-emerald-600"></span>
                Main Entrance → Engineering Building
              </p>
              <p className="mt-4 text-xl font-semibold">11:00 AM</p>
              <p className="text-sm text-gray-600 mt-1">Contact: John Doe</p>
            </div>
            <StatCard title="Trips Completed This Week" value="5" />
            <StatCard title="Distance Covered" value="120 km" />
          </div>

          {/* Middle grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Assigned trips */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
              <h3 className="font-semibold mb-4 text-lg">Assigned Trips</h3>
              <table className="w-full text-sm">
                <thead className="text-left text-gray-500 border-b">
                  <tr>
                    <th className="py-2 pr-4">Pickup Time</th>
                    <th className="py-2">Destination</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedTrips.map((t) => (
                    <tr key={t.time} className="border-b last:border-0">
                      <td className="py-3 pr-4 whitespace-nowrap">{t.time}</td>
                      <td className="py-3 whitespace-nowrap">{t.dest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center">
              <MapIcon size={120} className="text-emerald-600 opacity-50" />
            </div>

            {/* Calendar placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center md:col-span-1">
              <CalendarIcon size={120} className="text-[#06203c] opacity-50" />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Helper components
// -----------------------------------------------------------------------------
function IconButton({ icon: Icon }) {
  return (
    <button className="p-2 hover:bg-gray-200 rounded-lg">
      <Icon size={20} />
    </button>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">
      <h4 className="font-medium text-sm text-gray-600 leading-snug max-w-[12ch]">
        {title}
      </h4>
      <p className="text-3xl font-semibold mt-4">{value}</p>
    </div>
  );
}
