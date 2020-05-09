import populartimes
import config
import json
import locations

allLocations = []
locationNumber = 0
locationsLength = len(locations.locations)

def scrapeData(coords):
    popularresults = []

    for key in coords['ids']:
        result = populartimes.get_id(config.api_key, key)
        print(result)
        if "populartimes" in result:
            popularresults.append(result)
            allLocations.append(result)

    filename = '../public/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)


for key in locations.locations:
    scrapeData(locations.locations[key])
    locationNumber = locationNumber + 1
    if locationNumber is locationsLength:
        filename = '../public/data/alllocations.json'
        with open(filename, 'w') as outfile:
            json.dump(allLocations, outfile)
