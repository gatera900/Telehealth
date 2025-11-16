"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Check, Clock, User, DollarSign } from "lucide-react";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      condition: "Hypertension",
      tags: ["New Visit", "$1.50"],
      date: "29 Jul 2025, Sunday",
      time: "10:00 AM - 12:30 AM",
      status: "pending",
      isNew: true,
    },
    {
      id: 2,
      patient: "John Doe",
      condition: "Hypertension",
      tags: ["New Visit", "$1.50"],
      date: "29 Jul 2025, Sunday",
      time: "10:00 AM - 12:30 AM",
      status: "accepted",
      isNew: false,
    },
    {
      id: 3,
      patient: "John Doe",
      condition: "Hypertension",
      tags: ["New Visit", "$1.50"],
      date: "29 Jul 2025, Sunday",
      time: "10:00 AM - 12:30 AM",
      status: "pending",
      isNew: false,
    },
    {
      id: 4,
      patient: "John Doe",
      condition: "Hypertension",
      tags: ["New Visit", "$1.50"],
      date: "29 Jul 2025, Sunday",
      time: "10:00 AM - 12:30 AM",
      status: "accepted",
      isNew: false,
    },
    {
      id: 5,
      patient: "John Doe",
      condition: "Hypertension",
      tags: ["New Visit", "$1.50"],
      date: "29 Jul 2025, Sunday",
      time: "10:00 AM - 12:30 AM",
      status: "cancelled",
      isNew: false,
    },
  ];

  const tabs = [
    { id: "all", label: "All" },
    { id: "accepted", label: "Accepted" },
    { id: "pending", label: "Pending" },
    { id: "cancelled", label: "Cancelled" },
  ];

  const filteredAppointments =
    activeTab === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === activeTab);

  const getActionButton = (appointment: (typeof appointments)[0]) => {
    if (appointment.status === "cancelled") {
      return (
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
          Recover
        </button>
      );
    }
    if (appointment.status === "accepted") {
      return (
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Reschedule
        </button>
      );
    }
    return (
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
        Cancel
      </button>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            MY APPOINTMENTS
          </h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-gray-800 font-semibold shadow-sm"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <User size={32} className="text-gray-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-800">
                      {appointment.patient}
                    </h3>
                    {appointment.isNew && (
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {appointment.condition}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                      {appointment.tags[0]}
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                      <DollarSign size={12} />
                      {appointment.tags[1]}
                    </span>
                  </div>
                </div>

                <div className="text-right mr-4">
                  <p className="text-sm font-semibold text-gray-800 mb-1">
                    {appointment.date}
                  </p>
                  <p className="text-sm text-gray-600">{appointment.time}</p>
                </div>

                <div className="flex-shrink-0">
                  {getActionButton(appointment)}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
