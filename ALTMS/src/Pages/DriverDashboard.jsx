import React, { useState } from "react";
import {
  ClipboardList,
  Truck,
  Users,
  BarChart2,
  Settings,
  CheckCircle,
  Map as MapIcon,
  Calendar as CalendarIcon,
} from "lucide-react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import StatCard from "../Components/StatCard";

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
  { time: "10:00 AM", dest: "Kenneth Dike Library" },
  { time: "1:00 PM", dest: "Main Entr…" },
  { time: "3:00 PM", dest: "Student Cen…" },
];

export default function DriverDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <SideBar state={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} navItems={navItems} />
      {/* Backdrop for mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-10 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main section */}
      <section className="flex-1 flex bg-[#fafaf7] flex-col md:pl-64">
        {/* Header */}
        <Header
          state={sidebarOpen}
          name="Driver Dashboard"
          setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
        />
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
