import { SITE_URL } from "@/lib/constants";

export interface BoroughData {
  slug: string;
  name: string;
  displayName: string;
  postcodes: string[];
  propertyContext: string;
  landlordContext: string;
  nearbyBoroughs: string[];
}

export const BOROUGH_DATA: Record<string, BoroughData> = {
  "barking-dagenham": {
    slug: "barking-dagenham",
    name: "Barking & Dagenham",
    displayName: "Barking and Dagenham",
    postcodes: ["IG11", "RM8", "RM9", "RM10"],
    propertyContext:
      "Barking and Dagenham has a high proportion of terraced and semi-detached houses built between the 1930s and 1960s, many of which are now in the private rented sector. Former council estates and post-war housing developments make up a significant portion of the borough's rental stock, and many properties pre-date modern electrical and gas safety standards.",
    landlordContext:
      "The borough has one of the highest concentrations of private landlords in outer East London, with strong demand from working families and NHS staff.",
    nearbyBoroughs: ["havering", "redbridge", "newham"],
  },
  "barnet": {
    slug: "barnet",
    name: "Barnet",
    displayName: "Barnet",
    postcodes: ["EN4", "EN5", "N2", "N3", "N11", "N12", "N14", "N20", "NW4", "NW7", "NW9"],
    propertyContext:
      "Barnet is one of London's largest boroughs by area and contains a mix of Victorian and Edwardian terraces in areas like East Finchley and High Barnet, 1930s semi-detached homes in the suburbs, and purpose-built flat developments. The borough has significant HMO activity around Finchley, Golders Green, and Hendon.",
    landlordContext:
      "A large private rented sector driven by proximity to the Northern line and good schools, with strong demand from young professionals and families.",
    nearbyBoroughs: ["enfield", "haringey", "brent"],
  },
  "bexley": {
    slug: "bexley",
    name: "Bexley",
    displayName: "Bexley",
    postcodes: ["DA1", "DA5", "DA6", "DA7", "DA8", "DA14", "DA15", "DA16", "SE2", "SE28"],
    propertyContext:
      "Bexley is predominantly suburban, with a large stock of 1930s and post-war semi-detached and terraced houses. The borough has seen significant growth in its private rented sector as landlords have acquired ex-owner-occupier stock. Many properties in the western parts of the borough — particularly Abbey Wood and Thamesmead — are ex-council homes now in private hands.",
    landlordContext:
      "Bexley attracts landlords targeting families and working professionals commuting into central London via the Elizabeth line from Abbey Wood.",
    nearbyBoroughs: ["greenwich", "bromley", "havering"],
  },
  "brent": {
    slug: "brent",
    name: "Brent",
    displayName: "Brent",
    postcodes: ["HA0", "HA9", "NW2", "NW6", "NW10"],
    propertyContext:
      "Brent has one of London's most diverse housing stocks, ranging from large Victorian terraces in Kilburn and Willesden to post-war flat developments and newer builds near Wembley. The borough has a very high rate of HMO activity, particularly in the Harlesden, Stonebridge, and Kilburn areas. Many properties are Victorian conversions split into flats.",
    landlordContext:
      "One of the highest HMO densities in London. Strong demand from students, NHS workers, and professionals working at Wembley and along the Jubilee line.",
    nearbyBoroughs: ["barnet", "camden", "ealing"],
  },
  "bromley": {
    slug: "bromley",
    name: "Bromley",
    displayName: "Bromley",
    postcodes: ["BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "BR7", "SE20"],
    propertyContext:
      "Bromley is London's largest borough and contains a wide mix of property types — Victorian and Edwardian terraces in Beckenham and Penge, 1930s and post-war semis across the suburbs, and modern developments closer to the town centre. The rental market has grown significantly in recent years as house prices have pushed first-time buyers into renting.",
    landlordContext:
      "A strong commuter market serving City workers via Thameslink and Southeastern services, with good demand for family homes.",
    nearbyBoroughs: ["lewisham", "croydon", "greenwich"],
  },
  "camden": {
    slug: "camden",
    name: "Camden",
    displayName: "Camden",
    postcodes: ["NW1", "NW3", "NW5", "NW6", "N6", "N19", "WC1", "WC2"],
    propertyContext:
      "Camden has some of the most varied and valuable housing stock in London — from Georgian and Victorian terraces in Hampstead and Belsize Park to purpose-built mansion blocks in Swiss Cottage and flat conversions across Kentish Town and Kilburn. HMO density is high across the south of the borough, and many older Victorian properties have complex, multi-generation electrical installations.",
    landlordContext:
      "A premium rental market with high rents and demand from professionals, academics, and international tenants near UCL and the Royal Free Hospital.",
    nearbyBoroughs: ["islington", "barnet", "brent"],
  },
  "city-of-london": {
    slug: "city-of-london",
    name: "City of London",
    displayName: "City of London",
    postcodes: ["EC1", "EC2", "EC3", "EC4"],
    propertyContext:
      "The City of London has a small residential population relative to its commercial footprint, with housing concentrated in the Barbican Estate and a small number of conversion apartments. However, surrounding commercial properties frequently require electrical and fire safety compliance, particularly for landlords converting office space.",
    landlordContext:
      "Primarily a commercial compliance market. Residential landlords are few but high-value, with premium rents reflecting central location.",
    nearbyBoroughs: ["islington", "hackney", "tower-hamlets"],
  },
  "croydon": {
    slug: "croydon",
    name: "Croydon",
    displayName: "Croydon",
    postcodes: ["CR0", "CR2", "CR7", "SE25"],
    propertyContext:
      "Croydon is one of London's most active rental markets, with a large stock of Victorian terraces, 1930s semis, and post-war estates. The borough has significant HMO activity, particularly in the South Norwood, Thornton Heath, and Addiscombe areas. Many Victorian properties have original or partially-updated electrical installations that benefit from EICR inspection.",
    landlordContext:
      "One of the most active buy-to-let markets in South London, with strong yields and high tenant demand driven by Thameslink, Overground, and Tramlink connections.",
    nearbyBoroughs: ["bromley", "sutton", "lambeth"],
  },
  "ealing": {
    slug: "ealing",
    name: "Ealing",
    displayName: "Ealing",
    postcodes: ["UB2", "UB5", "UB6", "W3", "W5", "W7", "W13"],
    propertyContext:
      "Ealing has a large stock of Edwardian and inter-war semi-detached houses alongside flat conversions and purpose-built developments. The Elizabeth line has significantly increased rental demand in areas like Southall, Hanwell, and Acton. HMO activity is concentrated in the south of the borough.",
    landlordContext:
      "Strong and growing rental market driven by Elizabeth line connections into the City and Heathrow. High demand from professionals and international tenants.",
    nearbyBoroughs: ["brent", "hounslow", "hillingdon"],
  },
  "enfield": {
    slug: "enfield",
    name: "Enfield",
    displayName: "Enfield",
    postcodes: ["EN1", "EN2", "EN3", "N9", "N13", "N14", "N18", "N21"],
    propertyContext:
      "Enfield is a large outer London borough with a varied housing stock — Victorian and Edwardian terraces in Edmonton and Palmers Green, inter-war semis across the suburbs, and newer developments in the south. The Edmonton and Ponders End areas have a high concentration of older properties now in the private rented sector.",
    landlordContext:
      "A growing rental market with improving transport links. Good yields compared to inner London boroughs.",
    nearbyBoroughs: ["barnet", "haringey", "waltham-forest"],
  },
  "greenwich": {
    slug: "greenwich",
    name: "Greenwich",
    displayName: "Greenwich",
    postcodes: ["SE3", "SE7", "SE9", "SE10", "SE12", "SE18", "SE28", "DA16"],
    propertyContext:
      "Greenwich combines historic Georgian and Victorian housing stock in the town centre with large post-war and 1960s estates in Woolwich, Thamesmead, and Eltham. The borough has seen significant new development along the Thames waterfront, creating a split market between older converted and new-build properties.",
    landlordContext:
      "Strong demand driven by Elizabeth line at Woolwich and Canary Wharf proximity. Increasing interest from buy-to-let investors following the Crossrail effect.",
    nearbyBoroughs: ["lewisham", "bexley", "newham"],
  },
  "hackney": {
    slug: "hackney",
    name: "Hackney",
    displayName: "Hackney",
    postcodes: ["E2", "E5", "E8", "E9", "N1", "N4", "N16"],
    propertyContext:
      "Hackney has a large stock of Victorian and early Edwardian terraced houses, many of which have been converted into flats. The borough also contains significant post-war estate housing now in both the social and private sectors. HMO activity is particularly high in Stoke Newington, Dalston, and Clapton. Victorian properties in Hackney frequently have older wiring systems requiring EICR attention.",
    landlordContext:
      "One of London's most active rental markets with very high tenant demand from young professionals, creatives, and tech workers.",
    nearbyBoroughs: ["islington", "tower-hamlets", "waltham-forest"],
  },
  "hammersmith-fulham": {
    slug: "hammersmith-fulham",
    name: "Hammersmith & Fulham",
    displayName: "Hammersmith and Fulham",
    postcodes: ["SW6", "W6", "W12", "W14"],
    propertyContext:
      "Hammersmith and Fulham is dominated by Victorian and Edwardian terraces and purpose-built mansion blocks, particularly in Fulham, Barons Court, and Shepherd's Bush. Flat conversions from large Victorian houses are common throughout the borough, with many properties having complex original electrical installations.",
    landlordContext:
      "A premium rental market with high rents and strong demand from professionals and media workers near the BBC and White City.",
    nearbyBoroughs: ["kensington-chelsea", "ealing", "wandsworth"],
  },
  "haringey": {
    slug: "haringey",
    name: "Haringey",
    displayName: "Haringey",
    postcodes: ["N4", "N8", "N10", "N11", "N15", "N17", "N22"],
    propertyContext:
      "Haringey has a large stock of Victorian and Edwardian terraces, particularly in Tottenham, Wood Green, and Hornsey. The borough has very high HMO activity, with many Victorian houses converted into multiple units. Properties in Tottenham and Seven Sisters often have older electrical systems that require updating.",
    landlordContext:
      "A high-volume rental market with strong yields driven by good transport links on the Victoria and Piccadilly lines.",
    nearbyBoroughs: ["barnet", "enfield", "hackney"],
  },
  "harrow": {
    slug: "harrow",
    name: "Harrow",
    displayName: "Harrow",
    postcodes: ["HA1", "HA2", "HA3", "HA7"],
    propertyContext:
      "Harrow is predominantly suburban with a large stock of 1930s semi-detached houses and inter-war terraces. The area around Harrow town centre has a higher concentration of purpose-built flat developments and HMOs. The borough has significant South Asian community ownership, with many family homes now let to multiple households.",
    landlordContext:
      "A stable outer London rental market with good demand from families and professionals commuting via the Metropolitan line.",
    nearbyBoroughs: ["brent", "hillingdon", "barnet"],
  },
  "havering": {
    slug: "havering",
    name: "Havering",
    displayName: "Havering",
    postcodes: ["RM1", "RM2", "RM3", "RM4", "RM5", "RM6", "RM7", "RM11", "RM12", "RM13", "RM14"],
    propertyContext:
      "Havering is an outer East London borough with a predominantly suburban housing stock of inter-war and post-war semi-detached houses. Romford town centre has higher-density flat developments and conversions. The Rainham and Elm Park areas contain 1960s and 1970s housing that may have older electrical installations.",
    landlordContext:
      "A growing rental market boosted by Elizabeth line connectivity from Romford and Harold Wood, attracting commuters seeking better value than inner London.",
    nearbyBoroughs: ["redbridge", "barking-dagenham", "bexley"],
  },
  "hillingdon": {
    slug: "hillingdon",
    name: "Hillingdon",
    displayName: "Hillingdon",
    postcodes: ["UB1", "UB2", "UB3", "UB4", "UB7", "UB8", "UB10", "HA4"],
    propertyContext:
      "Hillingdon is London's second largest borough and contains diverse housing — Victorian terraces in Hayes and Southall borders, inter-war semis across Ruislip and Northwood, and significant post-war estate housing in the east. Proximity to Heathrow creates strong rental demand from airport workers.",
    landlordContext:
      "A strong rental market driven by Heathrow employment and good Tube connections. High demand from airport and logistics workers.",
    nearbyBoroughs: ["ealing", "harrow", "hounslow"],
  },
  "hounslow": {
    slug: "hounslow",
    name: "Hounslow",
    displayName: "Hounslow",
    postcodes: ["TW3", "TW4", "TW5", "TW7", "TW8", "W4"],
    propertyContext:
      "Hounslow has a mix of Victorian terraces in Chiswick and Brentford, inter-war semis in Hounslow and Heston, and significant estate housing. The borough has high HMO density, particularly in Hounslow Central and Isleworth. Many properties within the Heathrow flight path have had noise insulation works carried out, sometimes affecting the electrical installation.",
    landlordContext:
      "Strong rental demand from Heathrow, Sky, and logistics employers. Good Elizabeth line and District line connections.",
    nearbyBoroughs: ["ealing", "hillingdon", "richmond-upon-thames"],
  },
  "islington": {
    slug: "islington",
    name: "Islington",
    displayName: "Islington",
    postcodes: ["EC1", "N1", "N4", "N5", "N7", "N19"],
    propertyContext:
      "Islington is dominated by Georgian and Victorian terraces, many converted into flats, particularly in Highbury, Canonbury, and Barnsbury. The borough has one of the highest rental market proportions in London. Many Georgian properties have complex original or partially updated electrical installations, and terraced conversions frequently have shared fuse boxes and old wiring.",
    landlordContext:
      "A premium rental market with very high demand from professionals, media workers, and City commuters. One of London's most active buy-to-let markets.",
    nearbyBoroughs: ["camden", "hackney", "haringey"],
  },
  "kensington-chelsea": {
    slug: "kensington-chelsea",
    name: "Kensington & Chelsea",
    displayName: "Kensington and Chelsea",
    postcodes: ["SW1X", "SW3", "SW5", "SW7", "SW10", "W1", "W8", "W10", "W11"],
    propertyContext:
      "The Royal Borough of Kensington and Chelsea has some of the most valuable residential property in the world — predominantly stucco-fronted Victorian and Georgian terraces and mansion blocks. Many properties are subdivided into high-value flats, and older electrical installations in these buildings often require specialist assessment. The Grenfell Tower disaster of 2017 originated in this borough, making fire safety compliance particularly significant here.",
    landlordContext:
      "London's most premium rental market. Landlords typically have high-value, well-maintained portfolios serving international and high-net-worth tenants.",
    nearbyBoroughs: ["westminster", "hammersmith-fulham", "wandsworth"],
  },
  "kingston-upon-thames": {
    slug: "kingston-upon-thames",
    name: "Kingston upon Thames",
    displayName: "Kingston upon Thames",
    postcodes: ["KT1", "KT2", "KT3"],
    propertyContext:
      "Kingston upon Thames has a mix of Victorian terraces in Kingston Hill and Surbiton, inter-war semis across New Malden and Chessington, and modern developments near the town centre. The borough has a well-established student rental market around Kingston University and demand from families seeking good schools.",
    landlordContext:
      "A stable South West London market with strong family and student demand. Good National Rail connections to Waterloo.",
    nearbyBoroughs: ["merton", "richmond-upon-thames", "sutton"],
  },
  "lambeth": {
    slug: "lambeth",
    name: "Lambeth",
    displayName: "Lambeth",
    postcodes: ["SE1", "SE5", "SE11", "SE24", "SE27", "SW2", "SW4", "SW8", "SW9", "SW16"],
    propertyContext:
      "Lambeth is one of London's most active rental boroughs, with large stocks of Victorian terraces in Brixton, Stockwell, and Clapham, converted mansion blocks in Streatham, and significant estate housing throughout. HMO activity is very high across the borough. Many Victorian conversions have ageing electrical systems, and EICR inspections frequently identify missing RCD protection.",
    landlordContext:
      "One of the highest rental yields in inner South London. Very high tenant demand driven by Northern line and Victoria line access.",
    nearbyBoroughs: ["southwark", "wandsworth", "croydon"],
  },
  "lewisham": {
    slug: "lewisham",
    name: "Lewisham",
    displayName: "Lewisham",
    postcodes: ["BR1", "SE4", "SE6", "SE8", "SE12", "SE13", "SE14", "SE23", "SE26"],
    propertyContext:
      "Lewisham has a large stock of Victorian and Edwardian terraces, many converted into flats, in areas like Catford, Forest Hill, and Honor Oak. Post-war estate housing is common in the north of the borough. Lewisham has seen significant gentrification pressure, with many landlords bringing older properties up to modern compliance standards.",
    landlordContext:
      "Strong rental demand from South East London professionals using Overground and DLR connections. Growing Airbnb and short-term market.",
    nearbyBoroughs: ["greenwich", "bromley", "southwark"],
  },
  "merton": {
    slug: "merton",
    name: "Merton",
    displayName: "Merton",
    postcodes: ["CR4", "SM4", "SW19", "SW20"],
    propertyContext:
      "Merton is a predominantly residential borough with large stocks of Victorian and Edwardian terraces in Wimbledon, Colliers Wood, and Mitcham, alongside significant inter-war semi-detached housing. Many properties are family homes with long tenancy histories, and some older installations have not been updated since original construction.",
    landlordContext:
      "A stable family rental market with good schools and Northern line access from Wimbledon. Lower HMO density than inner boroughs.",
    nearbyBoroughs: ["sutton", "kingston-upon-thames", "wandsworth"],
  },
  "newham": {
    slug: "newham",
    name: "Newham",
    displayName: "Newham",
    postcodes: ["E6", "E7", "E13", "E15", "E16", "E20"],
    propertyContext:
      "Newham has been significantly transformed by the 2012 Olympics and continued regeneration, with new build developments alongside older Victorian and post-war terraced housing. The borough has very high HMO activity, particularly in Forest Gate, Manor Park, and Plaistow. Elizabeth line access from Stratford has increased rental demand and landlord investment significantly.",
    landlordContext:
      "One of London's fastest-growing rental markets with strong yields and high demand driven by Stratford's connectivity and Queen Elizabeth Olympic Park.",
    nearbyBoroughs: ["hackney", "tower-hamlets", "barking-dagenham"],
  },
  "redbridge": {
    slug: "redbridge",
    name: "Redbridge",
    displayName: "Redbridge",
    postcodes: ["E11", "E18", "IG1", "IG2", "IG3", "IG4", "IG5", "IG6"],
    propertyContext:
      "Redbridge has a large stock of Edwardian and inter-war semi-detached houses, particularly in Ilford, Wanstead, and South Woodford. The borough has high HMO activity in Ilford and Seven Kings. Many properties have been subdivided for multiple tenancies, and older installations in Edwardian properties are a common area of focus for EICR inspections.",
    landlordContext:
      "A strong East London market boosted by Elizabeth line access from Ilford and Manor Park. High demand from City workers and families.",
    nearbyBoroughs: ["waltham-forest", "barking-dagenham", "havering"],
  },
  "richmond-upon-thames": {
    slug: "richmond-upon-thames",
    name: "Richmond upon Thames",
    displayName: "Richmond upon Thames",
    postcodes: ["KT9", "SW13", "SW14", "TW1", "TW2", "TW9", "TW10", "TW11", "TW12"],
    propertyContext:
      "Richmond upon Thames is London's only borough straddling the Thames and has some of the most desirable residential addresses in the capital — from Victorian terraces in Twickenham to Georgian houses in Richmond Hill and family homes in Barnes and East Sheen. Properties tend to be well-maintained and high-value, but many older homes still carry outdated electrical systems.",
    landlordContext:
      "A premium and family-focused rental market. High rents and relatively affluent tenant base. Strong demand from professionals in the media and tech sectors.",
    nearbyBoroughs: ["hounslow", "merton", "kingston-upon-thames"],
  },
  "southwark": {
    slug: "southwark",
    name: "Southwark",
    displayName: "Southwark",
    postcodes: ["SE1", "SE5", "SE14", "SE15", "SE16", "SE17", "SE21", "SE22"],
    propertyContext:
      "Southwark combines some of London's most sought-after postcodes — Bermondsey, London Bridge, and Peckham — with significant post-war and estate housing. The borough has very high HMO activity across Peckham and Nunhead, and significant flat conversion stock in Victorian terraces throughout. Many properties near the Bermondsey waterfront are modern builds with high compliance requirements.",
    landlordContext:
      "A premium inner South London market with some of the highest rental demand in the capital, driven by Jubilee line and Overground connectivity.",
    nearbyBoroughs: ["lambeth", "lewisham", "tower-hamlets"],
  },
  "sutton": {
    slug: "sutton",
    name: "Sutton",
    displayName: "Sutton",
    postcodes: ["SM1", "SM2", "SM3", "SM5", "SM6"],
    propertyContext:
      "Sutton is a predominantly suburban outer London borough with large stocks of inter-war semi-detached houses and Edwardian terraces. The borough has lower HMO density than inner London but a steady family rental market. Properties in older parts of the borough — particularly Carshalton and Cheam — sometimes have electrical systems that have not been updated in several decades.",
    landlordContext:
      "A stable family rental market with good schools and Thameslink connections. Lower yields than inner London but reliable long-term tenancies.",
    nearbyBoroughs: ["merton", "croydon", "kingston-upon-thames"],
  },
  "tower-hamlets": {
    slug: "tower-hamlets",
    name: "Tower Hamlets",
    displayName: "Tower Hamlets",
    postcodes: ["E1", "E2", "E3", "E14", "E98"],
    propertyContext:
      "Tower Hamlets has one of the most diverse housing stocks in London — Victorian terraces and warehouse conversions in Bethnal Green and Whitechapel, large post-war estates in Poplar and Bow, and extensive modern high-rise developments in Canary Wharf and Wapping. The borough has very high HMO activity in Whitechapel and Stepney. New build compliance requirements are common alongside older residential stock.",
    landlordContext:
      "One of London's most active rental markets driven by Canary Wharf employment and strong student demand from Queen Mary University.",
    nearbyBoroughs: ["hackney", "newham", "southwark"],
  },
  "waltham-forest": {
    slug: "waltham-forest",
    name: "Waltham Forest",
    displayName: "Waltham Forest",
    postcodes: ["E4", "E10", "E11", "E17", "IG8"],
    propertyContext:
      "Waltham Forest has a large stock of Victorian and Edwardian terraces, particularly in Walthamstow, Leyton, and Leytonstone — areas that have seen significant gentrification since the Victoria line's Walthamstow Central terminus made them accessible. Many older terraced properties have been converted into flats and have ageing electrical installations that benefit from EICR inspection.",
    landlordContext:
      "One of London's fastest-growing rental markets following the Walthamstow 'hipster effect'. Strong demand from young professionals priced out of Hackney and Islington.",
    nearbyBoroughs: ["hackney", "redbridge", "enfield"],
  },
  "wandsworth": {
    slug: "wandsworth",
    name: "Wandsworth",
    displayName: "Wandsworth",
    postcodes: ["SW11", "SW12", "SW15", "SW17", "SW18"],
    propertyContext:
      "Wandsworth is one of London's most popular rental boroughs, encompassing Battersea, Clapham Junction, Tooting, and Balham. The borough has large stocks of Victorian and Edwardian terraces converted into flats, alongside purpose-built mansion blocks and modern riverside developments. HMO activity is high across Balham and Tooting, and Victorian conversions frequently have older wiring.",
    landlordContext:
      "One of London's most competitive and desirable rental markets. Very high tenant demand from young professionals using Northern and District lines.",
    nearbyBoroughs: ["lambeth", "merton", "hammersmith-fulham"],
  },
  "westminster": {
    slug: "westminster",
    name: "Westminster",
    displayName: "Westminster",
    postcodes: ["NW1", "NW8", "SW1", "W1", "W2", "W9", "WC1", "WC2"],
    propertyContext:
      "Westminster encompasses some of London's most valuable addresses — Mayfair, Marylebone, Pimlico, and Paddington — alongside significant social and private rented housing. The borough contains Georgian townhouses, Victorian mansion blocks, Edwardian purpose-built flats, and modern high-rises. Electrical installations vary enormously from original Victorian wiring in heritage properties to modern systems in Paddington Basin developments.",
    landlordContext:
      "London's most central and premium residential borough. Rents are among the highest in the capital, with a sophisticated and international tenant base.",
    nearbyBoroughs: ["camden", "kensington-chelsea", "islington"],
  },
};

export function getBoroughData(slug: string): BoroughData | null {
  return BOROUGH_DATA[slug] ?? null;
}

export const ALL_BOROUGHS = Object.values(BOROUGH_DATA).sort((a, b) =>
  a.name.localeCompare(b.name),
);
