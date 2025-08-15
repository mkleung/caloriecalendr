import React from "react";

import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const statuses = {
  num_days: 14,
  time_remaining: "13:14:26",
  date: new Date().toDateString(),
};

const activities = {
  low: "😔",
  Average: "😐",
  High: "😊",
  "Super High": "🥳",
};

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-4 gap-4">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className=" flex flex-col gap-1 sm:gap-2">
              <p className="font-medium uppercase text-xs sm:text-sm truncate">
                {status.replaceAll("_", " ")}
              </p>
              <p className={"text-base sm:text-lg " + fugaz.className}>
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={
          "text-4xl sm:text-5xl md:text-6xl text-center " + fugaz.className
        }
      >
        What is your <span className="textGradient">activity level</span> today?
      </h4>
      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(activities).map((activity, activityIndex) => {
          return (
            <button
              className={
                "p-4 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-[lavendar] text-center flex flex-col gap-2 flex-1" 
                
              }
              key={activityIndex}
            >
              <p class="text-4xl sm:text-5xl md:text-6xl">
                {activities[activity]}
              </p>
              <p className={"text-indigo-500 text-xs sm:text-sm md:text-base " + fugaz.className}>{activity}</p>
            </button>
          );
        })}
      </div>

      <Calendar />
    </div>
  );
};

export default Dashboard;
