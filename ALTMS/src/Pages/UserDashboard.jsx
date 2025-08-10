import React, { act } from "react"
import {
  CheckCircle,
  Clock,
  XCircle,
  ListChecks,
  Bus,
  Settings,
  LayoutDashboard,
  FileClock,
  BookMarked,
} from "lucide-react";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar"
import Header from "../Components/Header";
import QuickLink from "../Components/QuickLink";

const stats = [
  { label: "Total Requests Made", value: 12, icon: ListChecks },
  { label: "Approved Requests", value: 8, icon: CheckCircle, iconBg: "bg-emerald-700" },
  { label: "Rejected Requests", value: 1, icon: XCircle, iconBg: "bg-red-600" },
  { label: "Pending Requests", value: 3, icon: Clock, iconBg: "bg-yellow-600" },
];

const recentRequests = [
  { date: "20/07/2025", destination: "Kenneth Dike Library", vehicle: "Minibus", status: "Pending" },
  { date: "15/07/2025", destination: "Faculty of Computing", vehicle: "Van", status: "Approved" },
  { date: "10/07/2025", destination: "CBN", vehicle: "Sedan", status: "Approved" },
  { date: "05/07/2025", destination: "Student Union Building", vehicle: "SUV", status: "Rejected" },
];

const statusColours = {
  Pending: "bg-yellow-200 text-yellow-900",
  Approved: "bg-emerald-200 text-emerald-900",
  Rejected: "bg-red-200 text-red-900",
};

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true, to: "/staff" },
  { label: "Request Transport", icon: FileClock, to: "/request" },
  { label: "Booking History", icon: BookMarked, to: "#" },
  { label: "Settings", icon: Settings, to: "#" },
]

export default function StaffDashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fafaf7] overflow-hidden">
      {/* Sidebar */}
      <SideBar state={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} navItems={navItems} />
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Main area */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <Header state={sidebarOpen} name="Staff Dashboard" setSidebarOpen={() => setSidebarOpen(!sidebarOpen)} />
        {/* Scrollable content */}
        <main className="p-3 sm:p-4 md:p-6 space-y-6 sm:space-y-8 overflow-y-auto flex-1">
          {/* Summary stats */}
          <section className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ label, value, icon: Icon, iconBg = "bg-emerald-700" }) => (
              <div key={label} className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center text-white ${iconBg}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-none mb-1">{label}</p>
                  <p className="text-xl sm:text-2xl font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Recent Requests */}
          <section className="bg-white rounded-xl shadow-sm p-4 sm:p-6 overflow-auto">
            <h3 className="text-gray-800 font-medium mb-3 sm:mb-4 text-base sm:text-lg">Recent Requests</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs sm:text-sm">
                <thead className="text-left text-gray-500 border-b">
                  <tr>
                    <th className="py-2 pr-2 sm:pr-4">Date</th>
                    <th className="py-2 pr-2 sm:pr-4">Destination</th>
                    <th className="py-2 pr-2 sm:pr-4">Vehicle</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRequests.map((req, idx) => (
                    <tr key={idx} className="border-b last:border-0">
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 whitespace-nowrap">{req.date}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 whitespace-nowrap">{req.destination}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 whitespace-nowrap">{req.vehicle}</td>
                      <td className="py-2 sm:py-3">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${statusColours[req.status]}`}>{req.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Status progress tracker */}
          <section className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
            <span>Submitted</span>
            <Arrow />
            <span>Approved</span>
            <Arrow />
            <span className="text-emerald-700 font-semibold">In Transit</span>
            <span className="h-px w-6 bg-gray-400"></span>
            <span className="text-gray-400">Completed</span>
          </section>

          {/* CTA – New Request */}
          <section>
            <button className="w-full bg-white rounded-xl shadow-sm p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:ring-2 hover:ring-emerald-600 transition">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                <Bus size={24} />
              </div>
              <Link to="/request" className="text-base sm:text-lg font-semibold text-emerald-900">Make New Transport Request</Link>
            </button>
          </section>

          {/* Quick links */}
          <section className="space-y-2 pb-8 sm:pb-10">
            <QuickLink label="Request Tracker" />
            <QuickLink label="Booking History" />
          </section>
        </main>
      </div>
    </div>
  );
}

function Arrow() {
  return <span className="mx-1 text-gray-400">→</span>;
}