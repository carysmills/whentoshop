import React, { useEffect, useState } from "react";
import { ShopCard } from "../components/ShopCard";
import { useHistory, useLocation } from "react-router-dom";

const supportedLocations = [
  "downtownottawa",
  "glebe",
  "hintonburg",
  "sandyhill",
  "downtowntoronto",
  "eastyork",
  "northyork",
  "hamilton"
];

export function Main() {
  const [shops, updateShops] = useState(null);
  const { search } = useLocation();
  const history = useHistory();
  const params =
    search.length &&
    search
      .replace("?", "")
      .split("&")
      .map(param => param.split("="));

  const locationParam =
    params.length > 0 ? params.filter(x => x[0] === "location")[0][1] : null;

  const supportedLocation = supportedLocations.includes(locationParam);
  const [location, updateLocation] = useState(
    supportedLocation ? locationParam : "downtownottawa"
  );

  useEffect(() => {
    async function getData(location) {
      await fetch(`./data/${location}.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          updateShops(data);
        });
    }

    if (location.length > 1) {
      getData(location);
      history.push({ search: `?location=${location}` });
    }
  }, [location, history]);

  return (
    <>
      <div className="intro">
        <p>
          <strong>
            These charts were built in response to COVID, to help people find
            offpeak times to get their groceries.
          </strong>
          &nbsp; They use Google data to show how busy a particular location is,
          based on compiled Google searches, Google Maps location data and local
          traffic data, via the{" "}
          <a href="https://github.com/m-wrzr/populartimes">
            populartimes library.
          </a>
        </p>
      </div>

      <div className="innerContainer">
        <div className="selectContainer">
          <label>
            Choose a location:
            <select
              id="city"
              onChange={event => updateLocation(event.target.value)}
              value={location}
            >
              <option disabled value="">
                --Please choose a location--
              </option>
              <option value="downtownottawa">Ottawa - Centretown</option>
              <option value="glebe">Ottawa - Glebe</option>
              <option value="hintonburg">Ottawa - Hintonburg</option>
              <option value="sandyhill">Ottawa - Sandy Hill</option>
              <option value="downtowntoronto">Toronto - Downtown</option>
              <option value="eastyork">Toronto - East York</option>
              <option value="northyork">Toronto - North York</option>
              <option value="hamilton">Hamilton</option>
            </select>
          </label>
        </div>

        <div className="legendContainer">
          <div className="legend" />
          <div className="legendLabel">
            <span className="left">Closed/no data</span>
            <span>Medium busy</span>
            <span className="right">Most busy</span>
          </div>
        </div>

        {shops == null
          ? null
          : shops.map(({ id, populartimes, name, address }) => {
              return (
                <ShopCard
                  key={id}
                  popularTimes={populartimes}
                  name={name}
                  address={address}
                />
              );
            })}
      </div>
    </>
  );
}
