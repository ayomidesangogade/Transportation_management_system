import React, { useState } from "react";
import {
  Menu,
  X,
  Bell,
  User,
  Home,
  ClipboardList,
  FilePlus,
  FileText,
  Settings,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Users as UsersIcon,
  Truck,
  Upload,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "My Requests", icon: ClipboardList },
  { label: "Request Transport", icon: FilePlus, active: true },
  { label: "Settings", icon: Settings },
];

export default function RequestTransportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex overflow-hidden text-gray-800">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform transition-transform md:translate-x-0 md:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b gap-3 font-extrabold text-lg text-[#06203c]">
          <div className="bg-emerald-600 h-6 w-6 rounded-sm" /> UNIVERSITY
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${active ? "bg-emerald-50 text-emerald-700" : "hover:bg-gray-50"}`}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Backdrop mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-10 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <section className="flex-1 flex flex-col bg-[#fafaf7] min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-lg bg-gray-100 text-gray-700 md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-xl font-extrabold text-[#06203c] hidden md:block">Request Transport</h1>
          </div>
          <div className="flex items-center gap-4 text-[#06203c]">
            <IconButton icon={Bell} />
            <IconButton icon={User} />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 flex justify-center overflow-y-auto">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-sm p-8 space-y-6">
            <h2 className="text-2xl font-semibold">New Transport Request</h2>

            {/* Pickup */}
            <Field label="Pickup Location">
              <Select placeholder="Select pickup" />
            </Field>

            {/* Destination */}
            <Field label="Destination">
              <Select placeholder="Select destination" />
            </Field>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Date of Trip">
                <Input icon={CalendarIcon} placeholder="DD/MM/YYYY" />
              </Field>
              <Field label="Pickup Time">
                <Input icon={Clock} placeholder="HH:MM" />
              </Field>
            </div>

            {/* Passengers */}
            <Field label="Number of Passengers">
              <Input type="number" placeholder="0" />
            </Field>

            {/* Purpose */}
            <Field label="Purpose of Trip">
              <textarea className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-600" rows="3" />
            </Field>

            {/* Vehicle pref */}
            <Field label="Vehicle Preference">
              <Select placeholder="Optional" />
            </Field>

            {/* Return trip toggle */}
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Return Trip?</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-emerald-600 rounded-full peer peer-checked:bg-emerald-600" />
              </label>
            </div>

            {/* Attachment */}
            <button className="w-full flex items-center gap-2 border rounded-lg px-4 py-3 text-sm hover:bg-gray-50">
              <Upload size={16} /> File Attachment
            </button>

            {/* Map preview */}
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              <MapPin size={48} />
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg">Submit Request</button>
          </div>
        </main>
      </section>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Reusable helpers
// -----------------------------------------------------------------------------
function IconButton({ icon: Icon }) {
  return (
    <button className="p-2 hover:bg-gray-200 rounded-lg">
      <Icon size={20} />
    </button>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}

function Select({ placeholder }) {
  return (
    <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm text-gray-700" defaultValue="">
      <option value="" disabled hidden>{placeholder}</option>
      <option value="Location A">Location A</option>
      <option value="Location B">Location B</option>
    </select>
  );
}

function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      {Icon && <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        {...props}
        className={`w-full border rounded-lg px-3 py-2 pl-${Icon ? "8" : "3"} focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm`} />
    </div>
  );
}
