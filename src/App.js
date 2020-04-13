import React, { useEffect, useState } from "react";
import { ShopCard } from "./components/ShopCard";
import "./App.css";

function App() {
  const [shops, updateShops] = useState(null);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      isLoading(true);
      const response = await fetch("/api/v1", {
        headers: {
          Content_Type: "application/json"
        },
        method: "POST",
        body: `{"lat": ${coords.latitude}, "long": ${coords.longitude}}`
      });

      const content = await response.json();
      isLoading(false);
      updateShops(content);
    });
  }, []);

  return (
    <div className="App">
      <h1>When to shop 😷</h1>
      {!loading && shops == null && <p>Please allow geolocation</p>}

      {loading && <p>Using location to find closest grocery stores ...</p>}

      {shops && (
        <div className="innerContainer">
          {shops.map(({ id, populartimes, name, address }) => {
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
      )}

      {/* <form action="/postalCode" method="POST">
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            minLength="4"
            maxLength="8"
            size="30"
            placeholder="Enter your postal code"
            onChange={event => setPostalCode(event.target.value)}
            value={postalCode}
          />

          <button
            onClick={event => {
              event.preventDefault();
              sendPostCode(postalCode);
            }}
          >
            Clicky
          </button>
        </form> */}
    </div>
  );
}

export default App;
