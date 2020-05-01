import React from "react";

function formatHour(hour) {
  const amOrPm = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}${amOrPm}`;
}

export function Hour({ hourData, hour, day, id }) {
  const noDataMessage =
    hourData === 0
      ? " - either the location is closed or there is not enough data"
      : "";
  return (
    <div
      style={{ background: `rgba(128,0,128, ${hourData / 100})` }}
      className="hourVal"
      role="img"
      aria-label={`${day} at ${formatHour(
        hour
      )} is ${hourData}% busy${noDataMessage}.`}
    ></div>
  );
}
