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
            These charts were built in response to COVID-19, to help find
            offpeak times to get groceries.
          </strong>
          &nbsp; The data indicates how busy a particular location is, compared
          to its own peak times. Popularity data is based on compiled Google
          searches, Google Maps location data and local traffic data, via the{" "}
          <a href="https://github.com/m-wrzr/populartimes">
            populartimes library.
          </a>{" "}
          Make sure to check directly with stores about their hours before
          venturing out.
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
              <option value="barrhaven">Ottawa - Barrhaven</option>
              <option value="beechwood">Ottawa - Beechwood</option>
              <option value="downtownottawa">Ottawa - Centretown</option>
              <option value="glebe">Ottawa - Glebe</option>
              <option value="hintonburg">Ottawa - Hintonburg</option>
              <option value="kanata">Ottawa - Kanata</option>
              <option value="orleans">Ottawa - Orleans</option>
              <option value="sandyhill">Ottawa - Sandy Hill</option>
              <option value="southkeys">Ottawa - South Keys</option>
              <option value="westboro">Ottawa - Westboro</option>

              <option value="downtowntoronto">Toronto - Downtown</option>
              <option value="eastyork">Toronto - East York</option>
              <option value="littleportugaltoronto">
                Toronto - Little Portugal
              </option>
              <option value="northyork">Toronto - North York</option>

              <option value="pinedaleburlington">Burlington - Pinedale</option>
              <option value="hamilton">Hamilton - Downtown</option>
              <option value="cataraquinorthkingston">
                Kingston - Cataraqui North
              </option>
              <option value="hastingssunrise">
                Vancouver - Hastings-Sunrise
              </option>
            </select>
          </label>
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
