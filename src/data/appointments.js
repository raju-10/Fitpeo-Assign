export const calendarData = {
  month: "October",
  year: 2021,
  days: [
    { date: 25, day: "Mon", appointments: ["10:00", "11:00"] },
    { date: 26, day: "Tues", appointments: ["08:00", "09:00"] },
    { date: 27, day: "Wed", appointments: ["12:00"] },
    { date: 28, day: "Thurs", appointments: ["10:00", "11:00"] },
    { date: 29, day: "Fri", appointments: ["12:00", "14:00", "14:00"] },
    { date: 30, day: "Sat", appointments: ["09:00", "10:00"] },
    { date: 31, day: "Sun", appointments: ["10:00", "11:00"] },
  ],
  timeSlots: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
}

export const appointmentCards = [
  {
    id: 1,
    type: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    color: "#3B82F6",
  },
  {
    id: 2,
    type: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: "🏃",
    color: "#8B5CF6",
  },
]

export const upcomingSchedule = {
  thursday: [
    {
      id: 1,
      title: "Health checkup complete",
      time: "11:00 AM",
      icon: "✅",
      color: "#E5E7EB",
    },
    {
      id: 2,
      title: "Ophthalmologist",
      time: "14:00 PM",
      icon: "👁️",
      color: "#DBEAFE",
    },
  ],
  saturday: [
    {
      id: 3,
      title: "Cardiologist",
      time: "12:00 AM",
      icon: "❤️",
      color: "#FEE2E2",
    },
    {
      id: 4,
      title: "Neurologist",
      time: "16:00 PM",
      icon: "🧠",
      color: "#F3E8FF",
    },
  ],
}
