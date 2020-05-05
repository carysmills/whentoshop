import populartimes
import config
import json
import locations

def scrapeData(coords):
    popularresults = []

    for key in coords['ids']:
        result = populartimes.get_id(config.api_key, key)
        if "populartimes" in result:
            popularresults.append(result)

    filename = '../public/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)


for key in locations.locations:
    scrapeData(locations.locations[key])
