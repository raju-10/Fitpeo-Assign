import React from "react";
import { activityData } from "../data/healthData";

const ActivityChart = () => {
  const maxValue = Math.max(...activityData.map((d) => d.value));
  const chartData = [...activityData, ...activityData, ...activityData];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>

      {/* Chart Bars - contained and no overflow */}
      <div className="relative h-40 border-t border-gray-200 pt-4 overflow-hidden">
        <div className="flex flex-wrap justify-center items-end gap-3 h-full">
          {chartData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[4%] min-w-[12px] flex-shrink-0"
            >
              {/* Value Label */}
              <span className="text-[10px] text-gray-500 mb-1">
                {data.value}%
              </span>

              {/* Bar */}
              <div className="w-full bg-gray-200 rounded-full h-24 flex items-end overflow-hidden">
                <div
                  className="bg-cyan-400 w-full rounded-full transition-all duration-500"
                  style={{
                    height: `${(data.value / maxValue) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Day Label */}
              <span className="text-[10px] text-gray-500 mt-2">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
