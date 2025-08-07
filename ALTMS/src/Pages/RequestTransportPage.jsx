import React, { useState } from "react";
import {
  LayoutDashboard,
  FileClock,
  Settings,
  BookMarked,
  Upload,
} from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Field from "../Components/Field";
import Select from "../Components/Select";
import Input from "../Components/Input";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Request Transport", icon: FileClock },
  { label: "Booking History", icon: BookMarked },
  { label: "Settings", icon: Settings },
];

export default function RequestTransportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex overflow-hidden text-gray-800">
      {/* Sidebar */}
      <SideBar state={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} navItems={navItems} />
      {/* Backdrop mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-10 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <section className="flex-1 flex flex-col bg-[#fafaf7] md:pl-64">
        {/* Header */}
        <Header state={sidebarOpen} name="Request Transport" setSidebarOpen={() => setSidebarOpen(!sidebarOpen)} />
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
                <Input type="date" />
              </Field>
              <Field label="Pickup Time">
                <Input type="time" />
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
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <MapContainer
                center={[7.3775, 3.947]} // Example: University of Ibadan coordinates
                zoom={15}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                zoomControl={false}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[7.3775, 3.947]} />
              </MapContainer>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg">Submit Request</button>
          </div>
        </main>
      </section>
    </div>
  );
}