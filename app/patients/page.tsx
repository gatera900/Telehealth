"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PatientsPage() {
  const patients = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: "John Doe",
    condition: "Heart attack",
  }));

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Patient List</h1>
            <select className="border rounded-lg px-4 py-2 bg-white">
              <option>All</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {patient.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {patient.condition}
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href={`/patients/${patient.id}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View profile
                      </Link>
                      <Link
                        href={`/patients/${patient.id}/appointment`}
                        className="bg-blue-100 text-blue-700 px-4 py-1 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                      >
                        Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronLeft size={20} />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  page === 1
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
