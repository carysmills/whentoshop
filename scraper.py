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
        if "populartimes" in result:
            popularresults.append(result)

    filename = 'public/data/' + coords['name'] + '.json'
    with open(filename, 'w') as outfile:
        json.dump(popularresults, outfile)


scrapeData(coords=locations.ontario_toronto_upperjarvis)
scrapeData(coords=locations.ontario_northumberland)
scrapeData(coords=locations.ontario_ottawa_nepean)
scrapeData(coords=locations.bc_vancouver_oakridge)
scrapeData(coords=locations.ontario_mississauga_streetsville)
scrapeData(coords=locations.ontario_mississauga_meadowvale)
scrapeData(coords=locations.littleportugaltoronto)
scrapeData(coords=locations.hastingssunrise)
scrapeData(coords=locations.kanata)
scrapeData(coords=locations.orleans)
scrapeData(coords=locations.beechwood)
scrapeData(coords=locations.westboro)
scrapeData(coords=locations.cataraquinorthkingston)
scrapeData(coords=locations.southkeys)
scrapeData(coords=locations.barrhaven)
scrapeData(coords=locations.pinedaleburlington)
scrapeData(coords=locations.downtownottawa)
scrapeData(coords=locations.glebe)
scrapeData(coords=locations.sandyhill)
scrapeData(coords=locations.hintonburg)
scrapeData(coords=locations.downtowntoronto)
scrapeData(coords=locations.hamilton)
scrapeData(coords=locations.eastyork)
scrapeData(coords=locations.northyork)
