import config
import sys
import googlemaps
import locations

def getIds(location):
    currentlocation = locations.locations[location]
    gmaps = googlemaps.Client(key=config.api_key)
    stores = gmaps.places_nearby(keyword=currentlocation['search'], type=currentlocation['type'], location=currentlocation['location'], radius=currentlocation['radius'])
    return stores['results']

print(getIds(sys.argv[1]))
