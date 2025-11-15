# TeleHealth - Doctor Dashboard

A modern Next.js application for managing telehealth consultations, patients, and appointments.

## Features

- **Dashboard**: Overview of notifications, new patients, emergencies, payments, and upcoming appointments
- **Patient List**: Browse and manage patient profiles with pagination
- **Make Appointment**: Create new appointments with patient selection and form
- **My Appointments**: View and filter appointments by status (All, Accepted, Pending, Cancelled)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
├── app/
│   ├── page.tsx              # Dashboard/Home page
│   ├── patients/
│   │   ├── page.tsx          # Patient List page
│   │   └── appointment/
│   │       └── page.tsx      # Make Appointment page
│   ├── appointments/
│   │   └── page.tsx          # My Appointments page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Sidebar.tsx           # Navigation sidebar
│   └── Header.tsx            # Top header with search
└── package.json
```

## Pages

- `/` - Dashboard with overview and statistics
- `/patients` - Patient list with pagination
- `/patients/appointment` - Create new appointment
- `/appointments` - View and filter appointments
- `/chat` - Chat interface with messages
- `/settings` - Settings and profile management

## Image Assets

Place the following images in the `public/images/` directory:

- `doctor.png` - Doctor illustration (main character)
- `pill.png` - Pill icon
- `pill1.png` - Alternative pill icon
- `syringe.jpg` - Syringe icon
- `bandage.png` - Bandage icon
- `heart.png` - Heart icon with ECG
- `bottle.jpg` - Pill bottle icon
- `notebook.png` - (Optional) Notebook for loading screen
- `box.png` - (Optional) Medical box for loading screen

The application will gracefully handle missing images with fallback displays.

