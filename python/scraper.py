import populartimes
import config
import json

allLocations = []
locationNumber = 0
locationsfile = 'public/locations.json'
allresultsfile = 'public/data/allresults.json'

def scrapeData(coords):
    popularresults = []

    for key in coords['ids']:
        result = populartimes.get_id(config.api_key, key)
        if "populartimes" in result:
            popularresults.append(result)
            allLocations.append(result)

    filename = 'public/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)

with open(locationsfile) as f:
  data = json.load(f)
  for key in data:
      location = data[key]
      scrapeData(location)
      locationNumber = locationNumber + 1
      locationsLength = len(data)
      if locationNumber is locationsLength:
        with open(allresultsfile, 'w') as outfile:
            json.dump(allLocations, outfile)
