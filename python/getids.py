import config
import sys
import googlemaps
import json

gmaps = googlemaps.Client(key=config.api_key)

def getIds(location):
    with open('public/locations.json') as f:
        data = json.load(f)
        currentlocation = data[location]
        stores = gmaps.places_nearby(keyword=currentlocation['search'], type=currentlocation['type'], location=currentlocation['location'], radius=currentlocation['radius'])
        return stores['results']

print(getIds(sys.argv[1]))
