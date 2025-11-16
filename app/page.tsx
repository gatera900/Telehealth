"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DoctorIllustration from "@/components/DoctorIllustration";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  AlertCircle,
  Calendar,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const appointments = [
    {
      date: "24 Sep",
      patient: "John Doe",
      condition: "Heart Attack",
      time: "09:30 am",
      color: "bg-purple-500",
    },
    {
      date: "24 Sep",
      patient: "John Doe",
      condition: "Hypertension",
      time: "09:30 am",
      color: "bg-blue-700",
    },
    {
      date: "24 Sep",
      patient: "John Doe",
      condition: "Diabetes",
      time: "09:30 am",
      color: "bg-blue-700",
    },
    {
      date: "24 Sep",
      patient: "John Doe",
      condition: "Fever",
      time: "09:30 am",
      color: "bg-pink-500",
    },
  ];

  const emergencies = [
    {
      icon: "shield",
      iconColor: "text-blue-600",
      title: "Clara's blood pressure surpassed normal range",
      description: "Give her advice on how to retain her normal range...",
      time: "11:30PM",
    },
    {
      icon: "chart",
      iconColor: "text-amber-600",
      title: "Recurring appendicitis in Patient ID: 0012",
      description: "Here are some suggestions on how to reduce the...",
      time: "11:30PM",
    },
    {
      icon: "alert",
      iconColor: "text-red-600",
      title: "Clara's blood pressure surpassed normal range",
      description: "Gave her advice on how to retain her normal range...",
      time: "11:30PM",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto">
          {/* Welcome Banner */}
          <div className="bg-blue-100 rounded-lg p-8 mb-6 flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Hello, Dr.KAYIRANGA James
              </h2>
              <p className="text-gray-600 mb-4">
                Your patients are counting on you. Stay on top of your
                consultations, monitor patient health trends all in one place.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Chat with a patient
              </button>
            </div>
            <DoctorIllustration />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-800 uppercase">
                  NOTIFICATIONS
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 bg-gray-100 rounded relative overflow-hidden flex-shrink-0">
                  {/* Red Area Chart */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 80 60"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="redGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#fca5a5"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ef4444"
                          stopOpacity="0.3"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,50 Q 20,30 40,25 T 80,20 L 80,60 L 0,60 Z"
                      fill="url(#redGradient)"
                    />
                    <path
                      d="M 0,50 Q 20,30 40,25 T 80,20"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">5</div>
                  <p className="text-sm text-gray-500">Unread notifications</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold text-gray-800 uppercase">
                    NEW PATIENTS
                  </h3>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 bg-gray-100 rounded relative overflow-hidden flex-shrink-0">
                  {/* Green Area Chart */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 80 60"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="greenGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#86efac"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="#22c55e"
                          stopOpacity="0.3"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,55 Q 15,45 30,40 Q 45,30 60,35 T 80,25 L 80,60 L 0,60 Z"
                      fill="url(#greenGradient)"
                    />
                    <path
                      d="M 0,55 Q 15,45 30,40 Q 45,30 60,35 T 80,25"
                      stroke="#22c55e"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    10
                  </div>
                  <p className="text-sm text-gray-500">New Patients</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-800 uppercase">
                  NEW MESSAGES
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 bg-gray-100 rounded relative overflow-hidden flex-shrink-0">
                  {/* Blue Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-500 rounded-b"></div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">1</div>
                  <p className="text-sm text-gray-500">New Messages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergencies and Payments */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Emergencies */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                EMERGENCIES
              </h3>
              <div className="space-y-4">
                {emergencies.map((emergency, index) => (
                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b last:border-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${emergency.iconColor
                        .replace("text-", "bg-")
                        .replace("-600", "-100")}`}
                    >
                      {emergency.icon === "shield" && (
                        <AlertCircle
                          className={emergency.iconColor}
                          size={20}
                        />
                      )}
                      {emergency.icon === "chart" && (
                        <BarChart3 className={emergency.iconColor} size={20} />
                      )}
                      {emergency.icon === "alert" && (
                        <AlertCircle
                          className={emergency.iconColor}
                          size={20}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {emergency.title}
                      </h4>
                      <p className="text-sm text-gray-500 mb-1">
                        {emergency.description}
                      </p>
                      <p className="text-xs text-gray-400">{emergency.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">PAYMENTS</h3>
                <select className="text-sm border rounded px-3 py-1">
                  <option>Today</option>
                </select>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${45 * 3.14} ${100 * 3.14}`}
                      className="text-blue-600"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">45</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    PAYMENTS
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-700">
                      10 Total payments
                    </div>
                    <div className="text-sm text-gray-700">
                      2 Pending payments
                    </div>
                    <div className="text-sm text-gray-700">
                      8 Successful payments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Appointments */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                My Appointments
              </h3>
              <a
                href="/appointments"
                className="text-blue-600 hover:underline text-sm"
              >
                View all
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className={`${appointment.color} text-white rounded-lg p-4 min-w-[200px] flex-shrink-0`}
                >
                  <div className="text-sm font-semibold mb-2">
                    {appointment.date}
                  </div>
                  <div className="font-bold mb-1">{appointment.patient}</div>
                  <div className="text-sm mb-2 opacity-90">
                    {appointment.condition}
                  </div>
                  <div className="text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {appointment.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
