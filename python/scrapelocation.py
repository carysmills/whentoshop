import populartimes
import config
import json
import sys

locationsfile = 'public/locations.json'

def scrapeData(coords):
    popularresults = []

    for key in coords['ids']:
        result = populartimes.get_id(config.api_key, key)
        if "populartimes" in result:
            popularresults.append(result)

    filename = 'public/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)


def getOneLocation(location):
    with open(locationsfile) as f:
        data = json.load(f)
        locationToScrape = data[location]
        scrapeData(locationToScrape)

getOneLocation(sys.argv[1])
