import populartimes
import geopy
import config
import json
import googlemaps
import locations

def scrapeData(coords):
    gmaps = googlemaps.Client(key=config.api_key)
    stores = gmaps.places(query=coords['search'], type=coords['type'], location=coords['location'], radius=coords['radius'])
    results = stores['results']
    popularresults = []

    for key in results:
        result = populartimes.get_id(config.api_key, key['place_id'])
        if "populartimes" in result:
            popularresults.append(result)

    filename = 'src/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)

scrapeData(coords=locations.glebe)
scrapeData(coords=locations.sandyhill)
scrapeData(coords=locations.hintonburg)
scrapeData(coords=locations.downtownottawa)
scrapeData(coords=locations.downtowntoronto)
scrapeData(coords=locations.northyork)
scrapeData(coords=locations.downtowntoronto)
scrapeData(coords=locations.hamilton)
