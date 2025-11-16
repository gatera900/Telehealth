'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { X, User } from 'lucide-react'
import Link from 'next/link'

export default function MakeAppointmentPage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    condition: '',
    date: '',
    time: '10:10 AM',
    consultationType: 'video',
  })

  const patients = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: 'John Doe',
    condition: 'Heart attack',
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setShowModal(false)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-y-auto relative">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Make an appointment</h1>

          <div className="space-y-4">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="bg-gray-100 rounded-lg p-4 flex items-center gap-4 relative"
              >
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{patient.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{patient.condition}</p>
                  <Link
                    href={`/patients/${patient.id}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View profile
                  </Link>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  Appointment
                </button>
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded"></div>
              </div>
            ))}
          </div>

          {/* Appointment Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
              <div className="bg-white w-full max-w-md h-full shadow-xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Create an appointment</h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Patient Name/ ID
                      </label>
                      <input
                        type="text"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter patient name or ID"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Condition/ Reason for visit
                      </label>
                      <input
                        type="text"
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter condition or reason"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Time
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Consultation Type
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="consultationType"
                            value="video"
                            checked={formData.consultationType === 'video'}
                            onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span>Video consultation</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="consultationType"
                            value="in-person"
                            checked={formData.consultationType === 'in-person'}
                            onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span>In-Person</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="consultationType"
                            value="chat"
                            checked={formData.consultationType === 'chat'}
                            onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span>Chat</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="flex-1 px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

