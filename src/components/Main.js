import React, { useEffect, useState } from "react";
import { ShopCard } from "../components/ShopCard";
import { useHistory, useLocation } from "react-router-dom";

const supportedLocations = [
  "ontario_toronto_upperjarvis",
  "ontario_northumberland",
  "ontario_ottawa_nepean",
  "bc_vancouver_oakridge",
  "ontario_mississauga_streetsville",
  "ontario_mississauga_meadowvale",
  "downtownottawa",
  "glebe",
  "hintonburg",
  "sandyhill",
  "downtowntoronto",
  "eastyork",
  "northyork",
  "hamilton",
  "barrhaven",
  "beechwood",
  "kanata",
  "orleans",
  "southkeys",
  "westboro",
  "littleportugaltoronto",
  "ontario_burlington",
  "ontario_kingston",
  "hastingssunrise",
  "bc_whiterocksouthsurrey",
  "ontario_peterborough",
  "ontario_hamilton_waterdown",
  "bc_vancouver_champlainheights",
  "ontario_waterloo",
  "ontario_toronto_annex",
  "ontario_toronto_etobicoke",
  "ontario_toronto_midtown",
  "ontario_toronto_scarboroughvillage",
  "ontario_toronto_yorkdistrict",
  "ontario_ottawa_gloucester",
  "ontario_ottawa_altavista",
  "ontario_ottawa_vanier",
  "ontario_ottawa_trainyards",
  "ontario_ottawa_bellscorners",
  "ontario_ottawa_manotick",
  "ontario_cornwall",
  "ontario_ancaster",
  "ontario_simcoe",
  "quebec_gatineau_aylmer",
  "quebec_gatineau_hull",
  "quebec_gatineau_gatineau",
  "ontario_ottawa_findlaycreek",
  "ontario_ottawa_greely",
  "ontario_ottawa_stittsville",
  "ontario_ottawa_rideauview",
  "ontario_ottawa_britannia",
  "ontario_rockland",
  "newfoundland_stjohns"
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
            Choose a location:
            <select
              id="city"
              onChange={event => updateLocation(event.target.value)}
              value={location}
            >
              <option disabled value="">
                --Please choose a location--
              </option>
              <option value="ontario_ottawa_altavista">
                Ottawa - Alta Vista
              </option>
              <option value="barrhaven">Ottawa - Barrhaven</option>
              <option value="beechwood">Ottawa - Beechwood</option>
              <option value="ontario_ottawa_bellscorners">
                Ottawa - Bells Corners
              </option>
              <option value="ontario_ottawa_britannia">
                Ottawa - Britannia
              </option>
              <option value="downtownottawa">Ottawa - Centretown</option>
              <option value="ontario_ottawa_findlaycreek">
                Ottawa - Findlay Creek
              </option>
              <option value="ontario_ottawa_greely">Ottawa - Greely</option>
              <option value="glebe">Ottawa - Glebe</option>
              <option value="ontario_ottawa_gloucester">
                Ottawa - Gloucester
              </option>
              <option value="hintonburg">Ottawa - Hintonburg</option>
              <option value="kanata">Ottawa - Kanata</option>
              <option value="ontario_ottawa_manotick">Ottawa - Manotick</option>
              <option value="ontario_ottawa_nepean">Ottawa - Nepean</option>
              <option value="orleans">Ottawa - Orleans</option>
              <option value="ontario_ottawa_rideauview">
                Ottawa - Rideauview
              </option>
              <option value="sandyhill">Ottawa - Sandy Hill</option>
              <option value="southkeys">Ottawa - South Keys</option>
              <option value="ontario_ottawa_stittsville">
                Ottawa - Stittsville
              </option>
              <option value="ontario_ottawa_trainyards">
                Ottawa - Train Yards
              </option>
              <option value="ontario_ottawa_vanier">Ottawa - Vanier</option>
              <option value="westboro">Ottawa - Westboro</option>
              <option value="ontario_toronto_annex">Toronto - Annex</option>
              <option value="downtowntoronto">Toronto - Downtown</option>
              <option value="eastyork">Toronto - East York</option>
              <option value="ontario_toronto_etobicoke">
                Toronto - Etobicoke
              </option>
              <option value="littleportugaltoronto">
                Toronto - Little Portugal
              </option>
              <option value="ontario_toronto_midtown">Toronto - Midtown</option>
              <option value="northyork">Toronto - North York</option>
              <option value="ontario_toronto_scarboroughvillage">
                Toronto - Scarborough Village
              </option>
              <option value="ontario_toronto_upperjarvis">
                Toronto - Upper Jarvis
              </option>
              <option value="ontario_toronto_yorkdistrict">
                Toronto - York District
              </option>
              <option value="ontario_ancaster">Ancaster</option>
              <option value="ontario_burlington">Burlington</option>
              <option value="ontario_northumberland">
                Cobourg - Northumberland
              </option>
              <option value="ontario_cornwall">Cornwall</option>
              <option value="hamilton">Hamilton - Downtown</option>
              <option value="ontario_hamilton_waterdown">
                Hamilton - Waterdown
              </option>
              <option value="ontario_kingston">Kingston</option>
              <option value="ontario_mississauga_meadowvale">
                Mississauga - Meadowvale
              </option>
              <option value="ontario_mississauga_streetsville">
                Mississauga - Streetsville
              </option>
              <option value="ontario_peterborough">Peterborough</option>
              <option value="ontario_rockland">Rockland</option>
              <option value="ontario_simcoe">Simcoe</option>
              <option value="ontario_waterloo">Waterloo</option>
              <option value="hastingssunrise">
                Vancouver - Hastings-Sunrise
              </option>
              <option value="bc_vancouver_oakridge">
                Vancouver - Oakridge
              </option>
              <option value="bc_vancouver_champlainheights">
                Vancouver - Champlain Heights
              </option>
              <option value="bc_whiterocksouthsurrey">
                White Rock/South Surrey
              </option>
              <option value="newfoundland_stjohns">St. John's</option>
              <option value="quebec_gatineau_aylmer">Gatineau - Aylmer</option>
              <option value="quebec_gatineau_gatineau">
                Gatineau - Gatineau
              </option>
              <option value="quebec_gatineau_hull">Gatineau - Hull</option>
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
