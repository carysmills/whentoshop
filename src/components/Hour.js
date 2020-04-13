import React from "react";

export function Hour({ hourData }) {
  return (
    <div
      style={{ background: `rgba(128,0,128, ${hourData / 100})` }}
      className="hourVal"
    ></div>
  );
}
