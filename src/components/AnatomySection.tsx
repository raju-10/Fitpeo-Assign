import React from "react";
import { healthIndicators } from "../data/healthData";
import ActivityChart from "./ActivityChart";
const AnatomySection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Dashboard</h3>
        <span className="text-sm text-gray-500">This Week</span>
      </div>

      <div className="flex items-start space-x-12">
        {/* Left: Anatomy image */}
        <div className="relative w-[55%] h-[400px] shrink-0 bg-gray-50 p-2 rounded-xl">
          <img
            src="/anatomy.jpg?height=300&width=200"
            alt="Human Anatomy"
            className="w-full h-full object-contain"
          />

          {/* Healthy Heart badge */}
          <div className="absolute top-24 left-40 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-2 shadow">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Healthy Heart</span>
          </div>

          {/* Healthy Leg badge */}
          <div className="absolute bottom-[100px] left-10 bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            <span>Healthy Leg</span>
          </div>
        </div>

        {/* Right: Health indicators with styled containers */}
        <div className="flex-1 space-y-4 grow">
          {healthIndicators.slice(1).map((indicator) => (
            <div
              key={indicator.id}
              className="bg-gray-50 p-4 rounded-xl shadow-sm max-w-sm"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                  {indicator.id === "lungs" && "🫁"}
                  {indicator.id === "teeth" && "🦷"}
                  {indicator.id === "bone" && "🦴"}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {indicator.label}
                  </h4>
                  <p className="text-xs text-gray-500">{indicator.date}</p>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${indicator.percentage}%`,
                      backgroundColor: indicator.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          <button className="text-cyan-500 text-sm font-medium hover:text-cyan-600 mt-2 ml-auto block">
            Details →
          </button>
        </div>
      </div>
      <div className="bg-gray-50 p-4 mt-[30px] rounded-xl">
        <ActivityChart />
      </div>
    </div>
  );
};

export default AnatomySection;
