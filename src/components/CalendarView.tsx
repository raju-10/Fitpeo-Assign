import React from "react";

import { calendarData, appointmentCards } from "../data/appointments";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css";
const CalendarView = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {calendarData.month} {calendarData.year}
        </h3>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarData.days.map((day) => (
          <div key={day.date} className="text-center">
            <div className="text-lg font-medium text-gray-900 mb-2">
              {day.date}
            </div>
            <div className="space-y-1">
              {day.appointments.map((time, index) => (
                <div
                  key={index}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap -mx-2">
        {appointmentCards.map((appointment) => (
          <div key={appointment.id} className="w-full sm:w-1/2 px-2 mb-4 flex">
            <div
              className="flex items-start space-x-4 p-4 rounded-lg w-full"
              style={{ backgroundColor: `${appointment.color}15` }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold shrink-0"
                style={{ backgroundColor: appointment.color }}
              >
                {appointment.icon}
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="font-medium text-gray-900">
                  {appointment.type}
                </h4>
                <p className="text-sm text-gray-600">{appointment.time}</p>
                <p className="text-sm text-gray-500">{appointment.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
