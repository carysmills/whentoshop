export function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function getLocationParam(search) {
  const params =
    search.length &&
    search
      .replace("?", "")
      .split("&")
      .map(param => param.split("="));

  const locationParam =
    params.length > 0
      ? params.filter(param => param[0] === "location")[0][1]
      : null;

  return locationParam;
}

export const legacyParams = {
  ontario_toronto_upperjarvis: "toronto-upperjarvis",
  ontario_northumberland: "northumberland-northumberland",
  ontario_ottawa_nepean: "ottawa-nepean",
  bc_vancouver_oakridge: "vancouver-oakridge",
  ontario_mississauga_streetsville: "mississauga-streetsville",
  ontario_mississauga_meadowvale: "mississauga-meadowvale",
  downtownottawa: "ottawa-centretown",
  glebe: "ottawa-glebe",
  hintonburg: "ottawa-hintonburg",
  sandyhill: "ottawa-sandyhill",
  downtowntoronto: "toronto-downtown",
  eastyork: "toronto-eastyork",
  northyork: "toronto-northyork",
  hamilton: "hamilton-hamilton",
  barrhaven: "ottawa-barrhaven",
  beechwood: "ottawa-beechwood",
  kanata: "ottawa-kanata",
  orleans: "ottawa-orleans",
  southkeys: "ottawa-southkeys",
  westboro: "ottawa-westboro",
  littleportugaltoronto: "toronto-littleportugal",
  ontario_burlington: "burlington-burlington",
  ontario_kingston: "kingston-kingston",
  hastingssunrise: "vancouver-hastingssunrise",
  bc_whiterocksouthsurrey: "surrey-whiterocksouthsurrey",
  ontario_peterborough: "peterborough-peterborough",
  ontario_hamilton_waterdown: "hamilton-waterdown",
  bc_vancouver_champlainheights: "vancouver-champlainheights",
  ontario_waterloo: "waterloo-waterloo",
  ontario_toronto_annex: "toronto-annex",
  ontario_toronto_etobicoke: "toronto-etobicoke",
  ontario_toronto_midtown: "toronto-midtown",
  ontario_toronto_scarboroughvillage: "toronto-scarborough",
  ontario_toronto_yorkdistrict: "toronto-yorkdistrict",
  ontario_ottawa_gloucester: "ottawa-gloucester",
  ontario_ottawa_altavista: "ottawa-altavista",
  ontario_ottawa_vanier: "ottawa-vanier",
  ontario_ottawa_trainyards: "ottawa-trainyards",
  ontario_ottawa_bellscorners: "ottawa-bellscorners",
  ontario_ottawa_manotick: "ottawa-manotick",
  ontario_cornwall: "ottawa-cornwall",
  ontario_ancaster: "ancaster-ancaster",
  ontario_simcoe: "simcoe-simcoe",
  quebec_gatineau_aylmer: "gatineau-aylmer",
  quebec_gatineau_hull: "gatineau-hull",
  quebec_gatineau_gatineau: "gatineau-gatineau",
  ontario_ottawa_findlaycreek: "ottawa-findlaycreek",
  ontario_ottawa_greely: "ottawa-greely",
  ontario_ottawa_stittsville: "ottawa-stittsville",
  ontario_ottawa_rideauview: "ottawa-rideauview",
  ontario_ottawa_britannia: "ottawa-britannia",
  ontario_rockland: "rockland-rockland"
};
