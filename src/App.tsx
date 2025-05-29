import React from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AnatomySection from "./components/AnatomySection";
import CalendarView from "./components/CalendarView";
import UpcomingSchedule from "./components/UpcomingSchedule";
import ActivityChart from "./components/ActivityChart";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          {/* Adjusted grid for 60/40 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Anatomy section takes 3/5 = 60% */}
            <div className="lg:col-span-3">
              <AnatomySection />
            </div>

            {/* Calendar + Schedule = 2/5 = 40% */}
            <div className="space-y-6 lg:col-span-3">
              <CalendarView />
              <UpcomingSchedule />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
