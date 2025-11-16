"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {
  Lock,
  User,
  Heart,
  Calendar,
  Grid,
  Wrench,
  Monitor,
  Accessibility,
  Bell,
  ArrowLeft,
  Camera,
  ArrowRight,
} from "lucide-react";

export default function SettingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("account");
  const [formData, setFormData] = useState({
    fullName: "James KAYIRANGA",
    email: "jkayiranga@gmail.com",
    password: "••••••••••",
    nationalId: "09403299085",
    medicalCode: "4890370388",
    phoneNumber: "+250 0788345465",
    rememberMe: true,
    faceId: false,
    scanQrCode: true,
  });

  const generalCategories = [
    { id: "account", label: "Account & Security", icon: Lock },
    { id: "personalization", label: "Personalization", icon: User },
    { id: "health", label: "Health & Data", icon: Heart },
    {
      id: "appointments",
      label: "Appointments & Consultations",
      icon: Calendar,
    },
    { id: "preferences", label: "App Preferences", icon: Grid },
    { id: "support", label: "Support & Info", icon: Wrench },
  ];

  const medicalCategories = [
    { id: "devices", label: "Connected Devices", icon: Monitor },
    { id: "accessibility", label: "Accessibility", icon: Accessibility },
    { id: "emergency", label: "Emergency", icon: Bell },
  ];

  const handleToggle = (field: keyof typeof formData) => {
    if (typeof formData[field] === "boolean") {
      setFormData({ ...formData, [field]: !formData[field] });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex gap-6">
            {/* Settings Categories */}
            <div className="w-80 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Settings
              </h2>

              {/* GENERAL Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  GENERAL
                </h3>
                <div className="space-y-1">
                  {generalCategories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="text-sm">{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MEDICAL Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  MEDICAL
                </h3>
                <div className="space-y-1">
                  {medicalCategories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="text-sm">{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Edit Profile Panel */}
            {selectedCategory === "account" && (
              <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft size={20} className="text-gray-600" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Edit Profile
                  </h2>
                </div>

                {/* Profile Picture */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                      <User size={48} className="text-gray-600" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                      <Camera size={16} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      National ID
                    </label>
                    <input
                      type="text"
                      value={formData.nationalId}
                      onChange={(e) =>
                        setFormData({ ...formData, nationalId: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Medical Code
                    </label>
                    <input
                      type="text"
                      value={formData.medicalCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          medicalCode: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Toggle Switches */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      Remember me
                    </span>
                    <button
                      onClick={() => handleToggle("rememberMe")}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        formData.rememberMe ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          formData.rememberMe
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      Face ID
                    </span>
                    <button
                      onClick={() => handleToggle("faceId")}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        formData.faceId ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          formData.faceId ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      Scan QR Code
                    </span>
                    <button
                      onClick={() => handleToggle("scanQrCode")}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        formData.scanQrCode ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          formData.scanQrCode
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Google Authenticator */}
                <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700">
                    Google Authenticator
                  </span>
                  <ArrowRight size={20} className="text-gray-600" />
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    SAVE
                  </button>
                </div>
              </div>
            )}

            {/* Other Category Views */}
            {selectedCategory !== "account" && (
              <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {generalCategories.find((c) => c.id === selectedCategory)
                    ?.label ||
                    medicalCategories.find((c) => c.id === selectedCategory)
                      ?.label}
                </h2>
                <p className="text-gray-600">
                  Settings for this category will be displayed here.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
