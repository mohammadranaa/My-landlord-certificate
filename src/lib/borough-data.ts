import { SITE_URL } from "@/lib/constants";
import { getBoroughLocal } from "@/data/borough-local";

export interface BoroughData {
  slug: string;
  name: string;
  displayName: string;
  postcodes: string[];
  propertyContext: string;
  landlordContext: string;
  nearbyBoroughs: string[];
  /** All 33 entries below are "borough" — reserved for future towns outside London. */
  type: "borough" | "town";
  /** TfL Congestion Charge Zone coverage, from content-research/locations/congestion-zone.md
   *  (TfL CCZ GIS layer + ONS boundaries). Wording only: customers still tick the surcharge in booking. */
  congestionZone: "all" | "part" | "none";
  /** For "part": which area is inside the zone. */
  congestionArea?: string;
  insideM25: true;
}

/** Every service with its own /[service]/[borough] page — used for the
 * "Other services in [Borough]" cross-link block on each borough page. */
export interface BoroughService {
  slug: string;
  label: string;
}

export const BOROUGH_SERVICES: BoroughService[] = [
  { slug: "eicr", label: "EICR Certificate" },
  { slug: "gas-safety-certificate", label: "Gas Safety Certificate" },
  { slug: "epc", label: "EPC Certificate" },
  { slug: "fire-risk-assessment", label: "Fire Risk Assessment" },
  { slug: "pat-testing", label: "PAT Testing" },
];

export const BOROUGH_DATA: Record<string, BoroughData> = {
  "barking-dagenham": {
    slug: "barking-dagenham",
    name: "Barking & Dagenham",
    displayName: "Barking and Dagenham",
    postcodes: ["IG11", "RM8", "RM10", "RM9", "RM6", "RM7"],
    propertyContext:
      "Barking and Dagenham has a high proportion of terraced and semi-detached houses built between the 1930s and 1960s, many of which are now in the private rented sector. Former council estates and post-war housing developments make up a significant portion of the borough's rental stock, and many properties pre-date modern electrical and gas safety standards.",
    landlordContext:
      "The borough has one of the highest concentrations of private landlords in outer East London, with strong demand from working families and NHS staff.",
    nearbyBoroughs: ["havering", "redbridge", "newham"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "barnet": {
    slug: "barnet",
    name: "Barnet",
    displayName: "Barnet",
    postcodes: ["EN5", "NW9", "HA8", "NW11", "NW4", "N12", "NW7", "N3", "N2", "EN4", "N20", "NW2", "N11"],
    propertyContext:
      "Barnet is one of London's largest boroughs by area and contains a mix of Victorian and Edwardian terraces in areas like East Finchley and High Barnet, 1930s semi-detached homes in the suburbs, and purpose-built flat developments. The borough has significant HMO activity around Finchley, Golders Green, and Hendon.",
    landlordContext:
      "A large private rented sector driven by proximity to the Northern line and good schools, with strong demand from young professionals and families.",
    nearbyBoroughs: ["enfield", "haringey", "brent"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "bexley": {
    slug: "bexley",
    name: "Bexley",
    displayName: "Bexley",
    postcodes: ["DA8", "DA7", "DA16", "DA15", "DA14", "DA17", "DA5", "DA1", "DA6", "SE2", "SE28", "DA18"],
    propertyContext:
      "Bexley is predominantly suburban, with a large stock of 1930s and post-war semi-detached and terraced houses. The borough has seen significant growth in its private rented sector as landlords have acquired ex-owner-occupier stock. Many properties in the western parts of the borough — particularly Abbey Wood and Thamesmead — are ex-council homes now in private hands.",
    landlordContext:
      "Bexley attracts landlords targeting families and working professionals commuting into central London via the Elizabeth line from Abbey Wood.",
    nearbyBoroughs: ["greenwich", "bromley", "havering"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "brent": {
    slug: "brent",
    name: "Brent",
    displayName: "Brent",
    postcodes: ["NW10", "HA9", "NW2", "HA0", "NW6", "NW9", "HA3", "HA8"],
    propertyContext:
      "Brent has one of London's most diverse housing stocks, ranging from large Victorian terraces in Kilburn and Willesden to post-war flat developments and newer builds near Wembley. The borough has a very high rate of HMO activity, particularly in the Harlesden, Stonebridge, and Kilburn areas. Many properties are Victorian conversions split into flats.",
    landlordContext:
      "One of the highest HMO densities in London. Strong demand from students, NHS workers, and professionals working at Wembley and along the Jubilee line.",
    nearbyBoroughs: ["barnet", "camden", "ealing"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "bromley": {
    slug: "bromley",
    name: "Bromley",
    displayName: "Bromley",
    postcodes: ["BR3", "BR2", "BR5", "BR6", "BR1", "SE20", "BR4", "BR7", "TN16", "SE9", "SE26", "SE19"],
    propertyContext:
      "Bromley is London's largest borough and contains a wide mix of property types — Victorian and Edwardian terraces in Beckenham and Penge, 1930s and post-war semis across the suburbs, and modern developments closer to the town centre. The rental market has grown significantly in recent years as house prices have pushed first-time buyers into renting.",
    landlordContext:
      "A strong commuter market serving City workers via Thameslink and Southeastern services, with good demand for family homes.",
    nearbyBoroughs: ["lewisham", "croydon", "greenwich"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "camden": {
    slug: "camden",
    name: "Camden",
    displayName: "Camden",
    postcodes: ["NW3", "NW1", "NW6", "NW5", "WC1", "NW2", "NW8", "EC1", "N6", "WC2"],
    propertyContext:
      "Few Camden households live in houses. At the 2021 Census, 8.1% of households lived in a terraced house, 3.6% in a semi-detached and 1.7% in a detached house, with most of the rest in flats. Camden's October 2024 licensing review found additional HMOs spread fairly evenly across the borough, apart from the parkland of Regent's Park, Primrose Hill and Hampstead Heath.",
    landlordContext:
      "BRE modelling from 2020, quoted by Camden, estimates about 6,200 properties meet its additional HMO definition, against about 1,250 mandatory HMOs. In October 2024, 2,566 additional licences were in force.",
    nearbyBoroughs: ["islington", "barnet", "brent"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "south of Euston Road, including Bloomsbury, Holborn and the Camden side of Fitzrovia and Covent Garden",
    insideM25: true,
  },
  "city-of-london": {
    slug: "city-of-london",
    name: "City of London",
    displayName: "City of London",
    postcodes: ["EC2", "EC1", "EC4", "E1", "EC3"],
    propertyContext:
      "The City of London has a small residential population relative to its commercial footprint, with housing concentrated in the Barbican Estate and a small number of conversion apartments. However, surrounding commercial properties frequently require electrical and fire safety compliance, particularly for landlords converting office space.",
    landlordContext:
      "Primarily a commercial compliance market. Residential landlords are few but high-value, with premium rents reflecting central location.",
    nearbyBoroughs: ["islington", "hackney", "tower-hamlets"],
    type: "borough",
    congestionZone: "all",
    insideM25: true,
  },
  "croydon": {
    slug: "croydon",
    name: "Croydon",
    displayName: "Croydon",
    postcodes: ["CR0", "CR2", "CR7", "SE25", "CR8", "CR5", "SE19", "SW16"],
    propertyContext:
      "Croydon is one of London's most active rental markets, with a large stock of Victorian terraces, 1930s semis, and post-war estates. The borough has significant HMO activity, particularly in the South Norwood, Thornton Heath, and Addiscombe areas. Many Victorian properties have original or partially-updated electrical installations that benefit from EICR inspection.",
    landlordContext:
      "One of the most active buy-to-let markets in South London, with strong yields and high tenant demand driven by Thameslink, Overground, and Tramlink connections.",
    nearbyBoroughs: ["bromley", "sutton", "lambeth"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "ealing": {
    slug: "ealing",
    name: "Ealing",
    displayName: "Ealing",
    postcodes: ["W3", "W5", "UB6", "UB5", "W13", "UB1", "W7", "UB2", "W4", "NW10"],
    propertyContext:
      "Ealing has a large stock of Edwardian and inter-war semi-detached houses alongside flat conversions and purpose-built developments. The Elizabeth line has significantly increased rental demand in areas like Southall, Hanwell, and Acton. HMO activity is concentrated in the south of the borough.",
    landlordContext:
      "Strong and growing rental market driven by Elizabeth line connections into the City and Heathrow. High demand from professionals and international tenants.",
    nearbyBoroughs: ["brent", "hounslow", "hillingdon"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "enfield": {
    slug: "enfield",
    name: "Enfield",
    displayName: "Enfield",
    postcodes: ["EN3", "N9", "EN1", "EN2", "N13", "N18", "N14", "N21", "N11", "EN4"],
    propertyContext:
      "Enfield is a large outer London borough with a varied housing stock — Victorian and Edwardian terraces in Edmonton and Palmers Green, inter-war semis across the suburbs, and newer developments in the south. The Edmonton and Ponders End areas have a high concentration of older properties now in the private rented sector.",
    landlordContext:
      "A growing rental market with improving transport links. Good yields compared to inner London boroughs.",
    nearbyBoroughs: ["barnet", "haringey", "waltham-forest"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "greenwich": {
    slug: "greenwich",
    name: "Greenwich",
    displayName: "Greenwich",
    postcodes: ["SE18", "SE9", "SE10", "SE3", "SE28", "SE7", "SE2", "SE12", "SE8"],
    propertyContext:
      "Greenwich combines historic Georgian and Victorian housing stock in the town centre with large post-war and 1960s estates in Woolwich, Thamesmead, and Eltham. The borough has seen significant new development along the Thames waterfront, creating a split market between older converted and new-build properties.",
    landlordContext:
      "Strong demand driven by Elizabeth line at Woolwich and Canary Wharf proximity. Increasing interest from buy-to-let investors following the Crossrail effect.",
    nearbyBoroughs: ["lewisham", "bexley", "newham"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "hackney": {
    slug: "hackney",
    name: "Hackney",
    displayName: "Hackney",
    postcodes: ["N16", "E8", "E5", "E9", "N1", "N4", "E2"],
    propertyContext:
      "Hackney has a large stock of Victorian and early Edwardian terraced houses, many of which have been converted into flats. The borough also contains significant post-war estate housing now in both the social and private sectors. HMO activity is particularly high in Stoke Newington, Dalston, and Clapton. Victorian properties in Hackney frequently have older wiring systems requiring EICR attention.",
    landlordContext:
      "One of London's most active rental markets with very high tenant demand from young professionals, creatives, and tech workers.",
    nearbyBoroughs: ["islington", "tower-hamlets", "waltham-forest"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "a small corner of south Shoreditch, south of Old Street and west of Great Eastern Street",
    insideM25: true,
  },
  "hammersmith-fulham": {
    slug: "hammersmith-fulham",
    name: "Hammersmith & Fulham",
    displayName: "Hammersmith and Fulham",
    postcodes: ["SW6", "W12", "W6", "W14"],
    propertyContext:
      "Hammersmith and Fulham is dominated by Victorian and Edwardian terraces and purpose-built mansion blocks, particularly in Fulham, Barons Court, and Shepherd's Bush. Flat conversions from large Victorian houses are common throughout the borough, with many properties having complex original electrical installations.",
    landlordContext:
      "A premium rental market with high rents and strong demand from professionals and media workers near the BBC and White City.",
    nearbyBoroughs: ["kensington-chelsea", "ealing", "wandsworth"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "haringey": {
    slug: "haringey",
    name: "Haringey",
    displayName: "Haringey",
    postcodes: ["N17", "N15", "N8", "N22", "N10", "N4", "N6", "N11"],
    propertyContext:
      "Haringey has a large stock of Victorian and Edwardian terraces, particularly in Tottenham, Wood Green, and Hornsey. The borough has very high HMO activity, with many Victorian houses converted into multiple units. Properties in Tottenham and Seven Sisters often have older electrical systems that require updating.",
    landlordContext:
      "A high-volume rental market with strong yields driven by good transport links on the Victoria and Piccadilly lines.",
    nearbyBoroughs: ["barnet", "enfield", "hackney"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "harrow": {
    slug: "harrow",
    name: "Harrow",
    displayName: "Harrow",
    postcodes: ["HA2", "HA3", "HA1", "HA7", "HA5", "HA8"],
    propertyContext:
      "Harrow is predominantly suburban with a large stock of 1930s semi-detached houses and inter-war terraces. The area around Harrow town centre has a higher concentration of purpose-built flat developments and HMOs. The borough has significant South Asian community ownership, with many family homes now let to multiple households.",
    landlordContext:
      "A stable outer London rental market with good demand from families and professionals commuting via the Metropolitan line.",
    nearbyBoroughs: ["brent", "hillingdon", "barnet"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "havering": {
    slug: "havering",
    name: "Havering",
    displayName: "Havering",
    postcodes: ["RM3", "RM12", "RM11", "RM13", "RM14", "RM7", "RM1", "RM5", "RM2"],
    propertyContext:
      "Havering is an outer East London borough with a predominantly suburban housing stock of inter-war and post-war semi-detached houses. Romford town centre has higher-density flat developments and conversions. The Rainham and Elm Park areas contain 1960s and 1970s housing that may have older electrical installations.",
    landlordContext:
      "A growing rental market boosted by Elizabeth line connectivity from Romford and Harold Wood, attracting commuters seeking better value than inner London.",
    nearbyBoroughs: ["redbridge", "barking-dagenham", "bexley"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "hillingdon": {
    slug: "hillingdon",
    name: "Hillingdon",
    displayName: "Hillingdon",
    postcodes: ["HA4", "UB3", "UB10", "UB4", "UB8", "UB7", "HA6", "HA5", "UB9"],
    propertyContext:
      "Hillingdon is London's second largest borough and contains diverse housing — Victorian terraces in Hayes and Southall borders, inter-war semis across Ruislip and Northwood, and significant post-war estate housing in the east. Proximity to Heathrow creates strong rental demand from airport workers.",
    landlordContext:
      "A strong rental market driven by Heathrow employment and good Tube connections. High demand from airport and logistics workers.",
    nearbyBoroughs: ["ealing", "harrow", "hounslow"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "hounslow": {
    slug: "hounslow",
    name: "Hounslow",
    displayName: "Hounslow",
    postcodes: ["TW7", "TW3", "W4", "TW13", "TW14", "TW8", "TW5", "TW4", "UB2"],
    propertyContext:
      "Hounslow has a mix of Victorian terraces in Chiswick and Brentford, inter-war semis in Hounslow and Heston, and significant estate housing. The borough has high HMO density, particularly in Hounslow Central and Isleworth. Many properties within the Heathrow flight path have had noise insulation works carried out, sometimes affecting the electrical installation.",
    landlordContext:
      "Strong rental demand from Heathrow, Sky, and logistics employers. Good Elizabeth line and District line connections.",
    nearbyBoroughs: ["ealing", "hillingdon", "richmond-upon-thames"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "islington": {
    slug: "islington",
    name: "Islington",
    displayName: "Islington",
    postcodes: ["N1", "N7", "N19", "N5", "EC1", "N4"],
    propertyContext:
      "Islington is dominated by Georgian and Victorian terraces, many converted into flats, particularly in Highbury, Canonbury, and Barnsbury. The borough has one of the highest rental market proportions in London. Many Georgian properties have complex original or partially updated electrical installations, and terraced conversions frequently have shared fuse boxes and old wiring.",
    landlordContext:
      "A premium rental market with very high demand from professionals, media workers, and City commuters. One of London's most active buy-to-let markets.",
    nearbyBoroughs: ["camden", "hackney", "haringey"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "south of Pentonville Road and City Road, including Clerkenwell, Finsbury and Exmouth Market",
    insideM25: true,
  },
  "kensington-chelsea": {
    slug: "kensington-chelsea",
    name: "Kensington & Chelsea",
    displayName: "Kensington and Chelsea",
    postcodes: ["W11", "W10", "SW3", "W8", "SW10", "SW5", "SW7", "W14", "SW1X"],
    propertyContext:
      "The Royal Borough of Kensington and Chelsea has some of the most valuable residential property in the world — predominantly stucco-fronted Victorian and Georgian terraces and mansion blocks. Many properties are subdivided into high-value flats, and older electrical installations in these buildings often require specialist assessment. The Grenfell Tower disaster of 2017 originated in this borough, making fire safety compliance particularly significant here.",
    landlordContext:
      "London's most premium rental market. Landlords typically have high-value, well-maintained portfolios serving international and high-net-worth tenants.",
    nearbyBoroughs: ["westminster", "hammersmith-fulham", "wandsworth"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "kingston-upon-thames": {
    slug: "kingston-upon-thames",
    name: "Kingston upon Thames",
    displayName: "Kingston upon Thames",
    postcodes: ["KT2", "KT3", "KT6", "KT5", "KT9", "KT1", "KT4"],
    propertyContext:
      "Kingston upon Thames has a mix of Victorian terraces in Kingston Hill and Surbiton, inter-war semis across New Malden and Chessington, and modern developments near the town centre. The borough has a well-established student rental market around Kingston University and demand from families seeking good schools.",
    landlordContext:
      "A stable South West London market with strong family and student demand. Good National Rail connections to Waterloo.",
    nearbyBoroughs: ["merton", "richmond-upon-thames", "sutton"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "lambeth": {
    slug: "lambeth",
    name: "Lambeth",
    displayName: "Lambeth",
    postcodes: ["SW2", "SW9", "SW16", "SW4", "SW8", "SE27", "SE11", "SE24", "SE1", "SE5", "SW12", "SE21", "SE19"],
    propertyContext:
      "Lambeth is one of London's most active rental boroughs, with large stocks of Victorian terraces in Brixton, Stockwell, and Clapham, converted mansion blocks in Streatham, and significant estate housing throughout. HMO activity is very high across the borough. Many Victorian conversions have ageing electrical systems, and EICR inspections frequently identify missing RCD protection.",
    landlordContext:
      "One of the highest rental yields in inner South London. Very high tenant demand driven by Northern line and Victoria line access.",
    nearbyBoroughs: ["southwark", "wandsworth", "croydon"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "north of Kennington Lane, including Waterloo, the South Bank and Lambeth North",
    insideM25: true,
  },
  "lewisham": {
    slug: "lewisham",
    name: "Lewisham",
    displayName: "Lewisham",
    postcodes: ["SE6", "SE13", "SE23", "SE8", "SE4", "SE14", "SE26", "SE12", "BR1", "SE3"],
    propertyContext:
      "Lewisham has a large stock of Victorian and Edwardian terraces, many converted into flats, in areas like Catford, Forest Hill, and Honor Oak. Post-war estate housing is common in the north of the borough. Lewisham has seen significant gentrification pressure, with many landlords bringing older properties up to modern compliance standards.",
    landlordContext:
      "At the 2021 Census, 33,289 Lewisham households rented privately. As of October 2026, selective licensing covers the borough except Telegraph Hill and part of Blackheath, and HMO licensing covers all of it.",
    nearbyBoroughs: ["greenwich", "bromley", "southwark"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "merton": {
    slug: "merton",
    name: "Merton",
    displayName: "Merton",
    postcodes: ["SW19", "CR4", "SM4", "SW20", "SW16", "KT3", "SW17"],
    propertyContext:
      "Merton is a predominantly residential borough with large stocks of Victorian and Edwardian terraces in Wimbledon, Colliers Wood, and Mitcham, alongside significant inter-war semi-detached housing. Many properties are family homes with long tenancy histories, and some older installations have not been updated since original construction.",
    landlordContext:
      "A stable family rental market with good schools and Northern line access from Wimbledon. Lower HMO density than inner boroughs.",
    nearbyBoroughs: ["sutton", "kingston-upon-thames", "wandsworth"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "newham": {
    slug: "newham",
    name: "Newham",
    displayName: "Newham",
    postcodes: ["E6", "E16", "E15", "E13", "E7", "E12", "E20"],
    propertyContext:
      "Newham has been significantly transformed by the 2012 Olympics and continued regeneration, with new build developments alongside older Victorian and post-war terraced housing. The borough has very high HMO activity, particularly in Forest Gate, Manor Park, and Plaistow. Elizabeth line access from Stratford has increased rental demand and landlord investment significantly.",
    landlordContext:
      "One of London's fastest-growing rental markets with strong yields and high demand driven by Stratford's connectivity and Queen Elizabeth Olympic Park.",
    nearbyBoroughs: ["hackney", "tower-hamlets", "barking-dagenham"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "redbridge": {
    slug: "redbridge",
    name: "Redbridge",
    displayName: "Redbridge",
    postcodes: ["IG1", "IG8", "IG3", "IG6", "IG2", "E18", "E11", "RM6", "IG5", "IG7", "IG4"],
    propertyContext:
      "Redbridge has a large stock of Edwardian and inter-war semi-detached houses, particularly in Ilford, Wanstead, and South Woodford. The borough has high HMO activity in Ilford and Seven Kings. Many properties have been subdivided for multiple tenancies, and older installations in Edwardian properties are a common area of focus for EICR inspections.",
    landlordContext:
      "A strong East London market boosted by Elizabeth line access from Ilford and Manor Park. High demand from City workers and families.",
    nearbyBoroughs: ["waltham-forest", "barking-dagenham", "havering"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "richmond-upon-thames": {
    slug: "richmond-upon-thames",
    name: "Richmond upon Thames",
    displayName: "Richmond upon Thames",
    postcodes: ["TW2", "TW1", "TW11", "TW9", "TW12", "TW10", "SW14", "SW13"],
    propertyContext:
      "Richmond upon Thames is London's only borough straddling the Thames and has some of the most desirable residential addresses in the capital — from Victorian terraces in Twickenham to Georgian houses in Richmond Hill and family homes in Barnes and East Sheen. Properties tend to be well-maintained and high-value, but many older homes still carry outdated electrical systems.",
    landlordContext:
      "A premium and family-focused rental market. High rents and relatively affluent tenant base. Strong demand from professionals in the media and tech sectors.",
    nearbyBoroughs: ["hounslow", "merton", "kingston-upon-thames"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "southwark": {
    slug: "southwark",
    name: "Southwark",
    displayName: "Southwark",
    postcodes: ["SE1", "SE15", "SE16", "SE5", "SE17", "SE22", "SE21", "SE24"],
    propertyContext:
      "Southwark combines some of London's most sought-after postcodes — Bermondsey, London Bridge, and Peckham — with significant post-war and estate housing. The borough has very high HMO activity across Peckham and Nunhead, and significant flat conversion stock in Victorian terraces throughout. Many properties near the Bermondsey waterfront are modern builds with high compliance requirements.",
    landlordContext:
      "A premium inner South London market with some of the highest rental demand in the capital, driven by Jubilee line and Overground connectivity.",
    nearbyBoroughs: ["lambeth", "lewisham", "tower-hamlets"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "north of New Kent Road and west of Tower Bridge Road, including Bankside, Borough and London Bridge",
    insideM25: true,
  },
  "sutton": {
    slug: "sutton",
    name: "Sutton",
    displayName: "Sutton",
    postcodes: ["SM1", "SM6", "SM5", "SM2", "SM3", "KT4", "CR0"],
    propertyContext:
      "Sutton is a predominantly suburban outer London borough with large stocks of inter-war semi-detached houses and Edwardian terraces. The borough has lower HMO density than inner London but a steady family rental market. Properties in older parts of the borough — particularly Carshalton and Cheam — sometimes have electrical systems that have not been updated in several decades.",
    landlordContext:
      "A stable family rental market with good schools and Thameslink connections. Lower yields than inner London but reliable long-term tenancies.",
    nearbyBoroughs: ["merton", "croydon", "kingston-upon-thames"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "tower-hamlets": {
    slug: "tower-hamlets",
    name: "Tower Hamlets",
    displayName: "Tower Hamlets",
    postcodes: ["E14", "E1", "E3", "E2", "E1W"],
    propertyContext:
      "Tower Hamlets has one of the most diverse housing stocks in London — Victorian terraces and warehouse conversions in Bethnal Green and Whitechapel, large post-war estates in Poplar and Bow, and extensive modern high-rise developments in Canary Wharf and Wapping. The borough has very high HMO activity in Whitechapel and Stepney. New build compliance requirements are common alongside older residential stock.",
    landlordContext:
      "One of London's most active rental markets driven by Canary Wharf employment and strong student demand from Queen Mary University.",
    nearbyBoroughs: ["hackney", "newham", "southwark"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "a thin strip west of Commercial Street and Mansell Street, around Spitalfields Market and the Tower of London",
    insideM25: true,
  },
  "waltham-forest": {
    slug: "waltham-forest",
    name: "Waltham Forest",
    displayName: "Waltham Forest",
    postcodes: ["E17", "E4", "E10", "E11", "IG8", "E15"],
    propertyContext:
      "Waltham Forest has a large stock of Victorian and Edwardian terraces, particularly in Walthamstow, Leyton, and Leytonstone — areas that have seen significant gentrification since the Victoria line's Walthamstow Central terminus made them accessible. Many older terraced properties have been converted into flats and have ageing electrical installations that benefit from EICR inspection.",
    landlordContext:
      "One of London's fastest-growing rental markets following the Walthamstow 'hipster effect'. Strong demand from young professionals priced out of Hackney and Islington.",
    nearbyBoroughs: ["hackney", "redbridge", "enfield"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "wandsworth": {
    slug: "wandsworth",
    name: "Wandsworth",
    displayName: "Wandsworth",
    postcodes: ["SW11", "SW18", "SW15", "SW17", "SW12", "SW19", "SW16", "SW8"],
    propertyContext:
      "Wandsworth is one of London's most popular rental boroughs, encompassing Battersea, Clapham Junction, Tooting, and Balham. The borough has large stocks of Victorian and Edwardian terraces converted into flats, alongside purpose-built mansion blocks and modern riverside developments. HMO activity is high across Balham and Tooting, and Victorian conversions frequently have older wiring.",
    landlordContext:
      "One of London's most competitive and desirable rental markets. Very high tenant demand from young professionals using Northern and District lines.",
    nearbyBoroughs: ["lambeth", "merton", "hammersmith-fulham"],
    type: "borough",
    congestionZone: "none",
    insideM25: true,
  },
  "westminster": {
    slug: "westminster",
    name: "Westminster",
    displayName: "Westminster",
    postcodes: ["SW1", "W2", "W9", "W1", "NW8", "NW1", "W10", "WC2"],
    propertyContext:
      "Westminster encompasses some of London's most valuable addresses — Mayfair, Marylebone, Pimlico, and Paddington — alongside significant social and private rented housing. The borough contains Georgian townhouses, Victorian mansion blocks, Edwardian purpose-built flats, and modern high-rises. Electrical installations vary enormously from original Victorian wiring in heritage properties to modern systems in Paddington Basin developments.",
    landlordContext:
      "London's most central and premium residential borough. Rents are among the highest in the capital, with a sophisticated and international tenant base.",
    nearbyBoroughs: ["camden", "kensington-chelsea", "islington"],
    type: "borough",
    congestionZone: "part",
    congestionArea: "inside Marylebone Road, Edgware Road, Park Lane and Vauxhall Bridge Road, including Mayfair, Soho, Covent Garden, St James's and Victoria Street",
    insideM25: true,
  },
};

export function getBoroughData(slug: string): BoroughData | null {
  const base = BOROUGH_DATA[slug];
  if (!base) return null;
  const override = getBoroughLocal(slug)?.contextOverride;
  return override ? { ...base, ...override } : base;
}

export const ALL_BOROUGHS = Object.values(BOROUGH_DATA).sort((a, b) =>
  a.name.localeCompare(b.name),
);
