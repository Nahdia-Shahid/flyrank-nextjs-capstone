"use client";

import { KeyboardEvent, useId, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: string;
};

const tabs: Tab[] = [
  {
    id: "overview",
    label: "Overview",
    content:
      "This section provides a quick overview of the FlyRank AI platform and its core capabilities.",
  },
  {
    id: "analytics",
    label: "Analytics",
    content:
      "Analytics helps monitor project performance, AI activity, and important application metrics.",
  },
  {
    id: "settings",
    label: "Settings",
    content:
      "Settings contains configuration options for managing the application experience.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const baseId = useId();

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>
  ) => {
    let nextIndex = activeTab;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (activeTab + 1) % tabs.length;
        break;

      case "ArrowLeft":
        nextIndex =
          (activeTab - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);

    const nextTab = document.getElementById(
      `${baseId}-tab-${nextIndex}`
    );

    nextTab?.focus();
  };

  const activePanelId = `${baseId}-panel-${activeTab}`;

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="FlyRank AI sections"
        className="flex flex-wrap gap-2 border-b border-white/10 pb-3"
      >
        {tabs.map((tab, index) => {
          const tabId = `${baseId}-tab-${index}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={handleKeyDown}
              className={`rounded-xl px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                activeTab === index
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={activePanelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeTab}`}
        tabIndex={0}
        className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300"
      >
        <h3 className="mb-2 text-xl font-bold text-white">
          {tabs[activeTab].label}
        </h3>

        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}