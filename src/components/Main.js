import React, { useEffect, useState } from "react";
import { ShopCard } from "../components/ShopCard";
import { useHistory, useLocation } from "react-router-dom";
import {
  capitalize,
  getLocationParam,
  legacyParams
} from "../components/utilities";

export function Main() {
  const [shops, updateShops] = useState(null);
  const [locations, updateLocations] = useState(null);
  const { search } = useLocation();
  const history = useHistory();

  const locationParam = getLocationParam(search);
  const legacyParamValues = Object.keys(legacyParams);
  const usingLegacyParam = legacyParamValues.includes(locationParam);
  const mappedParam = usingLegacyParam
    ? legacyParams[locationParam]
    : locationParam;
  const currentCity = mappedParam && mappedParam.split("-")[0];

  const [city, updateCity] = useState(currentCity ? currentCity : "ottawa");
  const [neighbourhood, updateNeighbourhood] = useState(
    mappedParam ? mappedParam : "ottawa-centretown"
  );

  useEffect(() => {
    // Get locations data
    // Update URL only for legacy params
    async function getSupportedLocations() {
      await fetch(`./locations.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          updateLocations(data);
          if (usingLegacyParam) {
            history.push({ search: `?location=${mappedParam}` });
          }
        });
    }
    getSupportedLocations();
  }, [search, history, mappedParam, usingLegacyParam]);

  useEffect(() => {
    // Get shop data and update URL when selection changes
    async function getData(location) {
      await fetch(`./data/${location}.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          updateShops(data);
        });
    }

    if (neighbourhood && neighbourhood.length > 1) {
      getData(neighbourhood);
    }
  }, [neighbourhood]);

  useEffect(() => {
    // Select the first neighbourhood when city changes (via dropdown)
    if (neighbourhood === "") {
      const currentNeighbourhoods =
        city &&
        locations &&
        Object.values(locations).filter(location => location.city === city);

      const selectedNeighbourhood =
        currentNeighbourhoods && currentNeighbourhoods[0].name;

      if (selectedNeighbourhood) {
        updateNeighbourhood(selectedNeighbourhood);
        history.push({ search: `?location=${selectedNeighbourhood}` });
      }
    }
  }, [city, locations, neighbourhood, history]);

  const cities =
    locations == null
      ? null
      : Object.values(locations).map(location => location.city);

  const uniqueCities =
    cities == null
      ? null
      : cities.filter((item, index, ar) => ar.indexOf(item) === index).sort();

  const currentNeighbourhoods =
    city &&
    locations &&
    Object.values(locations).filter(location => location.city === city);

  const areaHasMultipleLocations =
    currentNeighbourhoods && currentNeighbourhoods.length > 1;

  return (
    <>
      <div className="intro">
        <p>
          These charts were built in response to COVID-19, to help estimate
          offpeak times to get groceries. The charts, which indicate how busy a
          particular location is compared to its own peak times, use Google Maps
          popular times data, via the{" "}
          <a href="https://github.com/m-wrzr/populartimes">
            populartimes library.
          </a>{" "}
          <strong>
            Make sure to check directly with stores about their hours before
            venturing out.
          </strong>
        </p>
      </div>

      <div className="innerContainer">
        <div className="selectContainer">
          <label>
            Municipality or county:
            <select
              id="city"
              onChange={event => {
                updateCity(event.target.value);
                updateNeighbourhood("");
              }}
              value={city == null ? "" : city}
            >
              <option disabled value="">
                --Choose a city/area--
              </option>
              {uniqueCities &&
                uniqueCities.map(city => (
                  <option key={city} value={city}>
                    {capitalize(city)}
                  </option>
                ))}
            </select>
          </label>
          {areaHasMultipleLocations && (
            <label>
              Neighbourhood:
              <select
                id="neighbourhood"
                onChange={event => {
                  const neighbourhood = event.target.value;
                  updateNeighbourhood(neighbourhood);
                  history.push({ search: `?location=${neighbourhood}` });
                }}
                value={neighbourhood}
              >
                <option disabled value="">
                  --Choose a neighbourhood--
                </option>
                {currentNeighbourhoods &&
                  currentNeighbourhoods.map(({ name, displayname }) => (
                    <option key={name} value={name}>
                      {displayname}
                    </option>
                  ))}
              </select>
            </label>
          )}
        </div>

        <div className="legendContainer">
          <div className="legend" />
          <div className="legendLabel">
            <span className="left">Closed or not enough data</span>
            <span className="right">As busy as the shop gets</span>
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
