# When to shop

A simple React app that displays when grocery stores are busiest in a community, according to Google's Popular Times data, via [the populartimes library](https://github.com/m-wrzr/populartimes). Made in response to COVID-19 and the extra preparation everyone has to do to go grocery shopping. Data for each location is fetched on the server every day using a cron job.

<img width="1418" alt="Screen Shot 2020-05-01 at 10 44 04 PM" src="https://user-images.githubusercontent.com/12213371/80853258-53f87500-8bfd-11ea-828a-4e6a4c9c30ff.png">

## Getting started

### To modify the UI:

- Clone this repo.
- Create a `data` directory withiin the `public` directory. Move over data files from https://whento.shop/data to `data`.
- Local development should now work for front-end changes.
- run `yarn install`
- run `yarn start`
- the app will open in your browser using localhost

### To modify or add locations:

- To fetch new locations locally, you will need to create a `config.py` file in the top level of the repo. It needs to contain the following: `api_key = “yourAPIkey”`, where `yourAPIkey` is an [API key for the Google Places API](https://developers.google.com/places/web-service/get-api-key).
- Run `python scraper.py` at the top level of the repo to fetch fresh data for the existing locations.

#### To add a new location:

- Create a new location in the the `locations.py` file, with a lat and long location at the centre of where you want to search and an appropriate radius in meters.
- In `scraper.py`, add `getIds(coords=location.YOUR_LOCATION_NAME`). Run it from the terminal using `python scraper.py`. Once you get grocery store locations back, look them over before adding them to the IDs key in the locations file for your location to make sure they should be added.
- Remove the `getIds` function from `scraper.py`. Run by running `python scraper.py` in your terminal to get data for the new location (if you don't want to repeat getting existing data - comment out the other locastions).
- Once finished, you will be able to see a file created in the data directory.
- To see the results in the front-end, add an option element with the value of your location name within the `select`. Also add the name of your location to the URL params whitelist at the top of the file. (Planning to make this process more streamlined 🔜).
