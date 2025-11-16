'use client'

import { Plus } from 'lucide-react'

export default function DoctorIllustration() {
  // Medical icons using images
  const icons = [
    { src: "/images/pill.png", position: "top-4 left-1/2 -translate-x-1/2" },
    { src: "/images/pill1.png", position: "bottom-12 left-8" },
    { src: "/images/syringe.jpg", position: "top-1/2 right-4 -translate-y-1/2" },
    { src: "/images/bandage.png", position: "top-8 right-8" },
    { src: "/images/heart.png", position: "bottom-8 right-12" },
    { src: "/images/bottle.jpg", position: "top-4 left-1/2 -translate-x-1/2" },
  ]

  return (
    <div className="relative w-64 h-64 rounded-lg overflow-hidden" style={{
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    }}>
      {/* Doctor Figure - Central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/images/doctor.png"
            alt="Doctor"
            className="w-48 h-48 object-contain"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              // Show fallback doctor illustration
              const fallback = document.createElement('div');
              fallback.className = 'w-48 h-48 bg-white rounded-full flex items-center justify-center';
              fallback.innerHTML = '<div class="text-gray-400 text-xs">Doctor</div>';
              target.parentElement?.appendChild(fallback);
            }}
          />
        </div>
      </div>

      {/* Medical Icons Floating Around - Using Images */}
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.position} bg-white rounded-full p-2 shadow-md`}
        >
          <img
            src={icon.src}
            alt={`medical-icon-${index}`}
            className="w-6 h-6 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      ))}

      {/* Plus Signs (Medical Crosses) - Scattered */}
      <div className="absolute top-12 left-12">
        <Plus className="text-white opacity-60" size={12} />
      </div>
      <div className="absolute top-20 right-16">
        <Plus className="text-white opacity-60" size={10} />
      </div>
      <div className="absolute bottom-16 left-16">
        <Plus className="text-white opacity-60" size={14} />
      </div>
      <div className="absolute bottom-20 right-20">
        <Plus className="text-white opacity-60" size={8} />
      </div>
      <div className="absolute top-32 left-20">
        <Plus className="text-white opacity-60" size={11} />
      </div>
      <div className="absolute top-24 right-24">
        <Plus className="text-white opacity-60" size={9} />
      </div>
    </div>
  )
}

