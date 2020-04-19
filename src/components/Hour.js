import React from "react";

export function Hour({ hourData, hour, day, id }) {
  return (
    <>
      <div
        style={{ background: `rgba(128,0,128, ${hourData / 100})` }}
        className="hourVal"
        role="img"
        aria-labelledby={id}
      ></div>
      <span
        id={id}
        style={{ display: "none" }}
      >{`${day} at hour ${hour} is ${hourData}/100 busy`}</span>
    </>
  );
}
