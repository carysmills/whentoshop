import React, { useState } from "react";
import { HeatMap } from "../components/HeatMap";

function getQuietestHour(dayData) {
  const hoursData = dayData.data.map((popularity, index) => {
    return { hour: index, popularity };
  });

  const zerosRemoved = hoursData.filter(({ popularity }) => popularity !== 0);

  const { popularity } = zerosRemoved.reduce(
    (prev, current) => (prev.popularity < current.popularity ? prev : current),
    []
  );

  const allResults = zerosRemoved
    .filter(popularResults => popularResults.popularity === popularity)
    .map(filteredResults => formatHour(filteredResults.hour));

  return allResults.length === 0 ? "Not enough data" : allResults.join(", ");
}

function getBusiestHour(dayData) {
  const hoursData = dayData.data.map((popularity, index) => {
    return { hour: index, popularity };
  });

  const zerosRemoved = hoursData.filter(({ popularity }) => popularity !== 0);

  const { hour } = zerosRemoved.reduce(
    (prev, current) => (prev.popularity > current.popularity ? prev : current),
    []
  );

  return formatHour(hour);
}

function formatHour(hour) {
  if (hour == null) {
    return "Not enough data";
  }

  const amOrPm = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 || 12;

  return `${formattedHour}${amOrPm}`;
}

export function ShopCard({ popularTimes, name, address }) {
  const [isOpen, setOpen] = useState(false);
  const [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  ] = popularTimes;

  return (
    <div className="shopCard">
      <h2>{name}</h2>
      <p className="address">{address}</p>
      <HeatMap id={name} data={popularTimes} />

      <button className="showHide" onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Hide hour details ↑" : "See hour details ↓"}
      </button>
      <div
        className="showMore"
        style={
          isOpen
            ? { height: "100%", opacity: 1, transition: "opacity 0.5s" }
            : { height: 0, opacity: 0, transition: "opacity 0.5s" }
        }
      >
        <table
          style={
            isOpen
              ? {
                  height: "100%",
                  display: "block",
                  opacity: 1,
                  transition: "opacity 0.5s"
                }
              : {
                  height: 0,
                  opacity: 0,
                  display: "none",
                  transition: "opacity 0.5s"
                }
          }
        >
          <tbody>
            <tr>
              <th width="50px"></th>
              <th width="200px">
                <p className="quietest">Quietest hour</p>
              </th>
              <th width="200px">
                <p className="busiest">Busiest hour</p>
              </th>
            </tr>
            <tr>
              <td>
                <strong>Monday</strong>
              </td>
              <td>{getQuietestHour(monday)}</td>
              <td>{getBusiestHour(monday)}</td>
            </tr>
            <tr>
              <td>
                <strong>Tuesday</strong>
              </td>
              <td>{getQuietestHour(tuesday)}</td>
              <td>{getBusiestHour(tuesday)}</td>
            </tr>

            <tr>
              <td>
                <strong>Wednesday</strong>
              </td>
              <td>{getQuietestHour(wednesday)}</td>
              <td>{getBusiestHour(wednesday)}</td>
            </tr>

            <tr>
              <td>
                <strong>Thursday</strong>
              </td>
              <td>{getQuietestHour(thursday)}</td>
              <td>{getBusiestHour(thursday)}</td>
            </tr>

            <tr>
              <td>
                <strong>Friday</strong>
              </td>
              <td>{getQuietestHour(friday)}</td>
              <td>{getBusiestHour(friday)}</td>
            </tr>

            <tr>
              <td>
                <strong>Saturday</strong>
              </td>
              <td>{getQuietestHour(saturday)}</td>
              <td>{getBusiestHour(saturday)}</td>
            </tr>
            <tr>
              <td>
                <strong>Sunday</strong>
              </td>
              <td>{getQuietestHour(sunday)}</td>
              <td>{getBusiestHour(sunday)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
