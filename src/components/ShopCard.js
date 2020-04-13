import React, { useState } from "react";
import { HeatMap } from "../components/HeatMap";

function getQuietestHour(dayData) {
  const hoursData = dayData.data.map((popularity, index) => {
    return { hour: index, popularity };
  });

  const zerosRemoved = hoursData.filter(({ popularity }) => popularity !== 0);

  return zerosRemoved.reduce(
    (min, p) => (p.popularity < min ? p : min),
    zerosRemoved[0]
  );
}

export function ShopCard({ popularTimes, name, address }) {
  const [isOpen, setOpen] = useState(false);

  const mondayQuietestHour = getQuietestHour(popularTimes[0]);
  const tuesdayQuietestHour = getQuietestHour(popularTimes[1]);
  const wednesdayQuietestHour = getQuietestHour(popularTimes[2]);
  const thursdayQuietestHour = getQuietestHour(popularTimes[3]);
  const fridayQuietestHour = getQuietestHour(popularTimes[4]);
  const saturdayQuietestHour = getQuietestHour(popularTimes[5]);
  const sundayQuietestHour = getQuietestHour(popularTimes[6]);

  return (
    <div className="shopCard">
      <h2>{name}</h2>
      <p className="address">{address}</p>
      <HeatMap data={popularTimes} />

      <h3 onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Hide quietest hours ↑" : "See quietest hours ↓"}
      </h3>
      <div
        style={
          isOpen
            ? { height: "100%", opacity: 1, transition: "0.5s" }
            : { height: 0, opacity: 0, transition: "0.5s" }
        }
      >
        <ul>
          {mondayQuietestHour ? (
            <li>Monday: {mondayQuietestHour.hour}</li>
          ) : null}
          {tuesdayQuietestHour ? (
            <li>Tuesday: {tuesdayQuietestHour.hour}</li>
          ) : null}
          {wednesdayQuietestHour ? (
            <li>Wednesday: {wednesdayQuietestHour.hour}</li>
          ) : null}
          {thursdayQuietestHour ? (
            <li>Thursday: {thursdayQuietestHour.hour}</li>
          ) : null}
          {fridayQuietestHour ? (
            <li>Friday: {fridayQuietestHour.hour}</li>
          ) : null}
          {saturdayQuietestHour ? (
            <li>Saturday: {saturdayQuietestHour.hour}</li>
          ) : null}
          {sundayQuietestHour ? (
            <li>Sunday: {sundayQuietestHour.hour}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
