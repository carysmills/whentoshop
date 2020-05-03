import populartimes
import config
import json
import googlemaps
import locations

def getIds(coords):
    gmaps = googlemaps.Client(key=config.api_key)
    stores = gmaps.places_nearby(keyword=coords['search'], type=coords['type'], location=coords['location'], radius=coords['radius'])
    print(stores['results'])


def scrapeData(coords):
    popularresults = []

    for key in coords['ids']:
        result = populartimes.get_id(config.api_key, key)
        try:
            result = populartimes.get_id(config.api_key, key)
        except Exception:
            logging.exception("Could not get place id `%s`", key)
            continue
        if "populartimes" in result:
            popularresults.append(result)

    filename = 'public/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)


for key in locations.locations:
    scrapeData(locations.locations[key])
