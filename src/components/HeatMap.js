import React from "react";
import { Hour } from "../components/Hour";

export function HeatMap({ data }) {
  const [monday, tuesday, wednesday, thursday, friday, saturday, sunday] = data;
  return (
    <div className="container">
      <div></div>

      <div className="hour">12a</div>
      <div className="hour">1a</div>
      <div className="hour">2a</div>
      <div className="hour">3a</div>
      <div className="hour">4a</div>
      <div className="hour">5a</div>
      <div className="hour">6a</div>
      <div className="hour">7a</div>
      <div className="hour">8a</div>
      <div className="hour">9a</div>
      <div className="hour">10a</div>
      <div className="hour">11a</div>
      <div className="hour">12p</div>
      <div className="hour">1p</div>
      <div className="hour">2p</div>
      <div className="hour">3p</div>
      <div className="hour">4p</div>
      <div className="hour">5p</div>
      <div className="hour">6p</div>
      <div className="hour">7p</div>
      <div className="hour">8p</div>
      <div className="hour">9p</div>
      <div className="hour">10p</div>
      <div className="hour">11p</div>

      <div className="weekday">M</div>
      {monday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}

      <div className="weekday">T</div>
      {tuesday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}

      <div className="weekday">W</div>
      {wednesday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}

      <div className="weekday">T</div>
      {thursday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}

      <div className="weekday">F</div>
      {friday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}

      <div className="weekday">S</div>
      {saturday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}

      <div className="weekday">S</div>
      {sunday.data.map((hour, index) => (
        <Hour hourData={hour} key={index} />
      ))}
    </div>
  );
}
