"use client";

import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  maxValue: number;
  color: string;
}

export default function RetroStatsPanel() {
  const [uptime, setUptime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [startTime] = useState(Date.now());

  const stats: StatItem[] = [
    { label: "Campaigns", value: 847, maxValue: 1000, color: "#7DD3FC" }, // Pastel cyan
    { label: "Leads", value: 234, maxValue: 500, color: "#86EFAC" }, // Pastel green
    { label: "Budget", value: 24567, suffix: "₺", maxValue: 50000, color: "#7DD3FC" },
    { label: "Time Saved", value: 522, suffix: "m", maxValue: 1000, color: "#86EFAC" }, // 8h 42m = 522 minutes
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [progressBars, setProgressBars] = useState(stats.map(() => 0));

  // Uptime counter
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const seconds = Math.floor((elapsed / 1000) % 60);
      const minutes = Math.floor((elapsed / 1000 / 60) % 60);
      const hours = Math.floor((elapsed / 1000 / 60 / 60) % 24);
      const days = Math.floor(elapsed / 1000 / 60 / 60 / 24);
      setUptime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  // Counter animation
  useEffect(() => {
    const duration = 4000; // 1 second
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const stepValue = stat.value / steps;

      const interval = setInterval(() => {
        currentStep++;
        const newValue = Math.min(stepValue * currentStep, stat.value);
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.floor(newValue);
          return newValues;
        });

        // Progress bar animation
        const progress = (newValue / stat.maxValue) * 100;
        setProgressBars((prev) => {
          const newProgress = [...prev];
          newProgress[index] = Math.min(progress, 100);
          return newProgress;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    });
  }, []);

  const formatValue = (value: number, suffix?: string) => {
    if (suffix === "₺") {
      return `${value.toLocaleString("tr-TR")}${suffix}`;
    }
    return `${value}${suffix || ""}`;
  };

  const formatTimeSaved = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="relative w-full h-[500px] p-6 bg-black/90 border-2 border-cyan-400/30 shadow-[0_0_20px_rgba(125,211,252,0.3)] overflow-hidden">
      {/* Scanline CRT Effect - daha hafif */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(125,211,252,0.05) 2px, rgba(125,211,252,0.05) 4px)'
      }}></div>

      <div className="relative z-10 h-full flex flex-col" style={{ fontFamily: 'VT323, monospace' }}>
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl text-cyan-300 mb-2 tracking-wider">
            AI AGENT LIVE STATS
          </h2>
          <div className="h-0.5 bg-cyan-400/20 mb-2"></div>
        </div>

        {/* Stats */}
        <div className="flex-1 space-y-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-green-300 text-lg">{stat.label}</span>
                <span className="text-cyan-300 text-xl font-bold">
                  {stat.label === "Time Saved" 
                    ? formatTimeSaved(animatedValues[index])
                    : formatValue(animatedValues[index], stat.suffix)}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-4 bg-black/50 border border-cyan-400/20">
                <div
                  className="h-full transition-all duration-300 ease-out"
                  style={{
                    width: `${progressBars[index]}%`,
                    backgroundColor: stat.color,
                  }}
                >
                  {/* Scanline effect on progress bar */}
                  <div className="h-full w-full opacity-20" style={{
                    background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)'
                  }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 space-y-3">
          {/* Uptime Counter */}
          <div className="text-green-300 text-sm">
            <span className="text-cyan-300">UPTIME:</span>{" "}
            {String(uptime.days).padStart(2, "0")}d{" "}
            {String(uptime.hours).padStart(2, "0")}h{" "}
            {String(uptime.minutes).padStart(2, "0")}m{" "}
            {String(uptime.seconds).padStart(2, "0")}s
          </div>

          {/* Blinking text */}
          <div className="text-cyan-300 text-lg tracking-wider animate-blink">
            PRESS_SPACE_TO_EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
}

