# When to shop

A simple React app that displays when grocery stores are busiest in a community, according to Google's Popular Times data, via [the populartimes library](https://github.com/m-wrzr/populartimes). Made in response to COVID-19 and the extra preparation everyone has to do to go grocery shopping. Data for each location is fetched on the server every day using a cron job.

<img width="1418" alt="Screen Shot 2020-05-01 at 10 44 04 PM" src="https://user-images.githubusercontent.com/12213371/80853258-53f87500-8bfd-11ea-828a-4e6a4c9c30ff.png">

## Getting started

### To modify the UI:

- Clone this repo.
- Create a `data` directory within the `public` directory. Move over data files from https://whento.shop/data to `data`.
- run `yarn install`
- run `yarn start`
- the app will open in your browser using localhost

### To modify or add locations:

- To fetch new locations locally, you will need to create a `config.py` file in the python directory. It needs to contain the following: `api_key = “yourAPIkey”`, where `yourAPIkey` is an [API key for the Google Places API](https://developers.google.com/places/web-service/get-api-key).
- Install libraries by running `pip install -r requirements.txt`. You will need to use Python 3.
- Run `python python/scraper.py` from the top directory to fetch fresh data for the existing locations.

#### To add a new location:

- Create a new location in the the `locations.json` file in the `public directory`, with a lat and long location at the centre of where you want to search and an appropriate radius in meters.
- Run `python python/getids.py KEY_OF_YOUR_LOCATION` from the top directory. Once you get grocery store locations back, look them over before adding them to the IDs key in the locations file for your location to make sure they should be added.
- Run `python python/scraper.py` from the top directory in your terminal to get data for the new location (if you don't want to repeat getting existing data, comment out the other locations).
- Once finished, you will be able to see a file created in the data directory, and the results in the front-end.
