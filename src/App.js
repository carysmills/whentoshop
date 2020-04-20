import React, { useEffect, useState } from "react";
import { ShopCard } from "./components/ShopCard";
import "./App.css";

function App() {
  const [shops, updateShops] = useState(null);
  const [location, updateLocation] = useState("");

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
    }
  }, [location]);

  return (
    <div className="App">
      <h1>
        When to shop&nbsp;
        <span role="img" aria-label="mask emoji">
          😷
        </span>
      </h1>
      <div
        className={location === "" ? "noLocationSelected" : "innerContainer"}
      >
        <div>
          <div className="intro">
            <p>
              <strong>
                Suddenly, we need to prepare a lot more to shop for
                essentials.&nbsp;
              </strong>
              These charts were built to help understand peak times in different
              communities, by using Google's top results and &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/business/answer/6263531?hl=en"
              >
                popular times data
              </a>
              &nbsp;via the&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/m-wrzr/populartimes"
              >
                populartimes Python library
              </a>
              . Make sure to check directly with grocery stores about their
              hours and if they have special hours dedicated to seniors shopping
              or others at risk.
            </p>

            <p>
              Don't see your community on here?&nbsp;
              <a href="mailto:when2shop19@gmail.com">
                Send us a note with a postal code
              </a>{" "}
              to request adding it.
            </p>
          </div>
          <div className="selectContainer">
            <select
              id="city"
              onChange={event => updateLocation(event.target.value)}
              value={location}
            >
              <option value="">--Please choose a location--</option>
              <option value="downtownottawa">Centretown (Ottawa)</option>
              <option value="downtowntoronto">Downtown Toronto</option>
              <option value="eastyork">East York</option>
              <option value="glebe">Glebe (Ottawa)</option>
              <option value="hamilton">Hamilton</option>
              <option value="hintonburg">Hintonburg (Ottawa)</option>
              <option value="northyork">North York</option>
              <option value="sandyhill">Sandy Hill (Ottawa)</option>
            </select>
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
    </div>
  );
}

export default App;
