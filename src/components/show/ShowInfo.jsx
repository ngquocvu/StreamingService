import React from "react";

export const ShowInfo = (props) => {
  const { network, schedule, status, language, runtime } = props;
  return (
    <div className="border-gray-700 flex flex-col gap-2 font-bold">
      <div className="text-2xl py-2 rounded-md">Show info</div>
      <ul>
        <li className="flex gap-4">
          Network:
          <span className="font-normal">
            {network ? network.name : "Unknown"}
          </span>
        </li>
        <li className="flex gap-4 border-t pt-2 mt-2 border-gray-600">
          Schedule:
          <span className="font-normal">
            {schedule.days.length !== 0
              ? schedule.time + " every " + schedule.days.join(" - ")
              : "Unknown"}
          </span>
        </li>
        <li className="flex gap-4 border-t pt-2 mt-2 border-gray-600">
          Status:
          <span className="font-normal">{status}</span>
        </li>
        <li className="flex gap-4 border-t pt-2 mt-2 border-gray-600">
          Language:
          <span className="font-normal">{language}</span>
        </li>
        <li className="flex gap-4 border-t pt-2 mt-2 border-gray-600">
          Runtime:
          <span className="font-normal">
            {runtime ? runtime + " minutes" : "Unknown"}
          </span>
        </li>
      </ul>
    </div>
  );
};
