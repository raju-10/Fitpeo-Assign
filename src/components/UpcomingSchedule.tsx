import React from "react";

import { upcomingSchedule } from "../data/appointments";

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        The Upcoming Schedule
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            On Thursday
          </h4>
          
          <div className="flex flex-wrap -mx-2">
            {upcomingSchedule.thursday.slice(0,2).map((appointment) => (
              <div key={appointment.id} className="w-full sm:w-1/2 px-2 mb-4">
                <div
                  className="flex items-center space-x-3 p-3 rounded-lg h-full"
                  style={{ backgroundColor: appointment.color }}
                >
                  <span className="text-lg">{appointment.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {appointment.title}
                    </p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            On Saturday
          </h4>
          <div className="flex flex-wrap -mx-2">
            {upcomingSchedule.saturday.map((appointment) => (
              <div key={appointment.id} className="w-full sm:w-1/2 px-2 mb-4">
                <div
                  className="flex items-center space-x-3 p-3 rounded-lg h-full"
                  style={{ backgroundColor: appointment.color }}
                >
                  <span className="text-lg">{appointment.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {appointment.title}
                    </p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
