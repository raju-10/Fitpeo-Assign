import React from "react";

import { navigationItems } from "../data/navigation";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
          General
        </h2>

        <nav className="space-y-2">
          {navigationItems
            .filter(
              ({ id }) => id !== "chat" && id !== "support" && id !== "setting"
            )
            .map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
        </nav>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6 mt-10">
          Tools
        </h2>
        <nav className="space-y-1">
          {navigationItems
            .filter(({ id }) => id === "chat" || id === "support")
            .map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
        </nav>
        <div className="mt-[40px]">
        <nav className="space-y-2">
          {navigationItems
            .filter(({ id }) => id === "setting")
            .map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
        </nav>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
