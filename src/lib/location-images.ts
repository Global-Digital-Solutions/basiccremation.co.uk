// Location photography for location, region and county pages.
export type LocationImage = {
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  /** Wikimedia Commons file page (source and full licence details) */
  page: string;
};

/**
 * Freely licensed photos of each place, from Wikimedia Commons, served from
 * Wikimedia's own image CDN. Each photo must be shown with its credit
 * (see PhotoCredit). Keys are city slugs, `county-<slug>` and `region-<slug>`.
 */
export const LOCATION_IMAGES: Record<string, LocationImage[]> = {
  "aberdeen": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Union_Bridge%2C_Aberdeen.jpg/1920px-Union_Bridge%2C_Aberdeen.jpg",
      "alt": "Union Bridge in Aberdeen city centre",
      "author": "Lucas Kendall",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Union_Bridge%2C_Aberdeen.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Aberdeen_from_Tollohill_Woods.JPG/1920px-Aberdeen_from_Tollohill_Woods.JPG",
      "alt": "View over Aberdeen from Tollohill Woods",
      "author": "Ragazzi99",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Aberdeen_from_Tollohill_Woods.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Union_Terrace_Gardens_September_2025.jpg/1920px-Union_Terrace_Gardens_September_2025.jpg",
      "alt": "Union Terrace Gardens, Aberdeen",
      "author": "Lucas Kendall",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Union_Terrace_Gardens_September_2025.jpg"
    }
  ],
  "barnsley": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/The_Town_Hall_of_Barnsley.JPG/1920px-The_Town_Hall_of_Barnsley.JPG",
      "alt": "Barnsley Town Hall",
      "author": "Badics",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:The_Town_Hall_of_Barnsley.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Floral_Town_Hall.JPG/1920px-Floral_Town_Hall.JPG",
      "alt": "Barnsley Town Hall with floral displays",
      "author": "Badics",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Floral_Town_Hall.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/A_Distant_View_of_Barnsley.JPG/1920px-A_Distant_View_of_Barnsley.JPG",
      "alt": "Distant view of Barnsley",
      "author": "Badics",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:A_Distant_View_of_Barnsley.JPG"
    }
  ],
  "bath": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bath_2014_02_-_Pulteney_Bridge_and_Bath_Weir.jpg/1920px-Bath_2014_02_-_Pulteney_Bridge_and_Bath_Weir.jpg",
      "alt": "Pulteney Bridge and the weir on the River Avon, Bath",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bath_2014_02_-_Pulteney_Bridge_and_Bath_Weir.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bath_Abbey_2024_01.jpg/1920px-Bath_Abbey_2024_01.jpg",
      "alt": "Bath Abbey",
      "author": "Julian Herzog",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bath_Abbey_2024_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puente_Pulteney%2C_Bath%2C_Inglaterra%2C_2014-08-12%2C_DD_51.JPG/1920px-Puente_Pulteney%2C_Bath%2C_Inglaterra%2C_2014-08-12%2C_DD_51.JPG",
      "alt": "Pulteney Bridge, Bath",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Puente_Pulteney%2C_Bath%2C_Inglaterra%2C_2014-08-12%2C_DD_51.JPG"
    }
  ],
  "birmingham": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Victoria_Square.jpg/1920px-Victoria_Square.jpg",
      "alt": "Victoria Square and the Council House, Birmingham",
      "author": "Peter_Glyn",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Victoria_Square.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Town_Hall_with_Commonwealth_Games_banners%2C_Victoria_Square%2C_Birmingham_-_July_2022.jpg/1920px-Town_Hall_with_Commonwealth_Games_banners%2C_Victoria_Square%2C_Birmingham_-_July_2022.jpg",
      "alt": "Birmingham Town Hall on Victoria Square",
      "author": "Mutney",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Town_Hall_with_Commonwealth_Games_banners%2C_Victoria_Square%2C_Birmingham_-_July_2022.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IM1282_%27Youth%27_and_%27The_River%27_by_Dhruva_Mistry_on_Victoria_Square_C.JPG/1920px-IM1282_%27Youth%27_and_%27The_River%27_by_Dhruva_Mistry_on_Victoria_Square_C.JPG",
      "alt": "Sculptures on Victoria Square, Birmingham",
      "author": "Anneli Salo",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:IM1282_%27Youth%27_and_%27The_River%27_by_Dhruva_Mistry_on_Victoria_Square_C.JPG"
    }
  ],
  "blackburn": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blackburn_cathedral_-_panoramio_%282%29.jpg/1920px-Blackburn_cathedral_-_panoramio_%282%29.jpg",
      "alt": "Blackburn Cathedral",
      "author": "jim walton",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Blackburn_cathedral_-_panoramio_%282%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Corporation_Park_-_geograph.org.uk_-_3896561.jpg/1920px-Corporation_Park_-_geograph.org.uk_-_3896561.jpg",
      "alt": "Corporation Park, Blackburn",
      "author": "Ian Greig",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Corporation_Park_-_geograph.org.uk_-_3896561.jpg"
    }
  ],
  "blackpool": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Blackpool_Beach_Sunset.jpg/1920px-Blackpool_Beach_Sunset.jpg",
      "alt": "Blackpool beach and tower at sunset",
      "author": "Michael D Beckwith",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Blackpool_Beach_Sunset.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Blackpool_tower_and_ballroom.jpg/1920px-Blackpool_tower_and_ballroom.jpg",
      "alt": "Blackpool Tower",
      "author": "Beep boop beep",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Blackpool_tower_and_ballroom.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Blackpool_%2C_Sandy_Beach_-_geograph.org.uk_-_4205888.jpg/1920px-Blackpool_%2C_Sandy_Beach_-_geograph.org.uk_-_4205888.jpg",
      "alt": "Sandy beach at Blackpool",
      "author": "Lewis Clarke",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Blackpool_%2C_Sandy_Beach_-_geograph.org.uk_-_4205888.jpg"
    }
  ],
  "bolton": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bolton_Town_Hall%2C_Victoria_Square%2C_Bolton_%28506284%29_%2836532643240%29.jpg/1920px-Bolton_Town_Hall%2C_Victoria_Square%2C_Bolton_%28506284%29_%2836532643240%29.jpg",
      "alt": "Bolton Town Hall on Victoria Square",
      "author": "Robert Linsdell",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bolton_Town_Hall%2C_Victoria_Square%2C_Bolton_%28506284%29_%2836532643240%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bolton_Arch_and_Town_Hall.jpg/1920px-Bolton_Arch_and_Town_Hall.jpg",
      "alt": "Bolton Town Hall seen through an archway",
      "author": "Ian Roberts",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bolton_Arch_and_Town_Hall.jpg"
    }
  ],
  "bournemouth": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Central_Beach%2C_Bournemouth%2C_Dorset_%2815718529260%29.jpg/1920px-Central_Beach%2C_Bournemouth%2C_Dorset_%2815718529260%29.jpg",
      "alt": "Central Beach, Bournemouth",
      "author": "JackPeasePhotography",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Central_Beach%2C_Bournemouth%2C_Dorset_%2815718529260%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/View_from_the_pier_%281%29_-_geograph.org.uk_-_5261852.jpg/1920px-View_from_the_pier_%281%29_-_geograph.org.uk_-_5261852.jpg",
      "alt": "View from Bournemouth Pier",
      "author": "Barry Shimmon",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_from_the_pier_%281%29_-_geograph.org.uk_-_5261852.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bournemouth_Beach%2C_Dorset_%28460697%29_%289453882645%29.jpg/1920px-Bournemouth_Beach%2C_Dorset_%28460697%29_%289453882645%29.jpg",
      "alt": "Bournemouth beach and cliffs",
      "author": "Robert Linsdell",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bournemouth_Beach%2C_Dorset_%28460697%29_%289453882645%29.jpg"
    }
  ],
  "bradford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bradford_%27City_Park%27_%286691498583%29.jpg/1920px-Bradford_%27City_Park%27_%286691498583%29.jpg",
      "alt": "City Park and Bradford City Hall",
      "author": "vagueonthehow",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bradford_%27City_Park%27_%286691498583%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/City_Park_%287217109234%29.jpg/1920px-City_Park_%287217109234%29.jpg",
      "alt": "Mirror pool in City Park, Bradford",
      "author": "Tim Green",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:City_Park_%287217109234%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bradford_Town_Hall.jpg/1920px-Bradford_Town_Hall.jpg",
      "alt": "Bradford City Hall",
      "author": "Jon Farman",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:Bradford_Town_Hall.jpg"
    }
  ],
  "brighton": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Brighton_2023_1.jpg/1920px-Brighton_2023_1.jpg",
      "alt": "Brighton seafront",
      "author": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Brighton_2023_1.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brighton_West_Pier_March_2017_01.jpg/1920px-Brighton_West_Pier_March_2017_01.jpg",
      "alt": "The West Pier, Brighton",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Brighton_West_Pier_March_2017_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Shelter_Opposite_The_Metropole_Hotel_April_2018_01.jpg/1920px-Shelter_Opposite_The_Metropole_Hotel_April_2018_01.jpg",
      "alt": "Seafront shelter on Brighton promenade",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Shelter_Opposite_The_Metropole_Hotel_April_2018_01.jpg"
    }
  ],
  "burnley": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Towneley_Hall.jpg/1280px-Towneley_Hall.jpg",
      "alt": "Towneley Hall, Burnley",
      "author": "Humphrey Bolton",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Towneley_Hall.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/River_Calder_from_the_Burnley_Way.jpg/1920px-River_Calder_from_the_Burnley_Way.jpg",
      "alt": "River Calder from the Burnley Way",
      "author": "Trappedinburnley",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:River_Calder_from_the_Burnley_Way.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Gawthorpe_Hall_exterior.jpg/1920px-Gawthorpe_Hall_exterior.jpg",
      "alt": "Gawthorpe Hall near Burnley",
      "author": "Michael D Beckwith",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Gawthorpe_Hall_exterior.jpg"
    }
  ],
  "cambridge": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/20130215_Kings_College_Chapel_Hi-res_01.jpg/1920px-20130215_Kings_College_Chapel_Hi-res_01.jpg",
      "alt": "King's College Chapel, Cambridge",
      "author": "Dmitry Tonkonog",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:20130215_Kings_College_Chapel_Hi-res_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mathematical_Bridge_in_Cambridge%2C_UK.jpg/1920px-Mathematical_Bridge_in_Cambridge%2C_UK.jpg",
      "alt": "The Mathematical Bridge over the River Cam, Cambridge",
      "author": "TheKaphox",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Mathematical_Bridge_in_Cambridge%2C_UK.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cambridge_MMB_13_%22Fort_St_George%22_and_River_Cam.jpg/1920px-Cambridge_MMB_13_%22Fort_St_George%22_and_River_Cam.jpg",
      "alt": "The River Cam at Cambridge",
      "author": "mattbuck",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cambridge_MMB_13_%22Fort_St_George%22_and_River_Cam.jpg"
    }
  ],
  "cardiff": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cardiff_Castle_keep_with_Christmas_trees.jpg/1920px-Cardiff_Castle_keep_with_Christmas_trees.jpg",
      "alt": "Cardiff Castle keep",
      "author": "Dominic Nelson",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cardiff_Castle_keep_with_Christmas_trees.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/View_of_Penarth_Head_from_Cardiff_Bay.jpg/1920px-View_of_Penarth_Head_from_Cardiff_Bay.jpg",
      "alt": "Cardiff Bay looking towards Penarth Head",
      "author": "Dominic Nelson",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_of_Penarth_Head_from_Cardiff_Bay.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Boats_in_Cardiff_Bay_Harbour%2C_July_2023_01.jpg/1920px-Boats_in_Cardiff_Bay_Harbour%2C_July_2023_01.jpg",
      "alt": "Boats in Cardiff Bay harbour",
      "author": "Dominic Nelson",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Boats_in_Cardiff_Bay_Harbour%2C_July_2023_01.jpg"
    }
  ],
  "carlisle": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Carlisle_Castle_-_geograph.org.uk_-_6977039.jpg/1920px-Carlisle_Castle_-_geograph.org.uk_-_6977039.jpg",
      "alt": "Carlisle Castle",
      "author": "Brian Deegan",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Carlisle_Castle_-_geograph.org.uk_-_6977039.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Half-moon_battery%2C_Carlisle_Castle_-_geograph.org.uk_-_6311799.jpg/1920px-Half-moon_battery%2C_Carlisle_Castle_-_geograph.org.uk_-_6311799.jpg",
      "alt": "The half-moon battery at Carlisle Castle",
      "author": "Bill Harrison",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Half-moon_battery%2C_Carlisle_Castle_-_geograph.org.uk_-_6311799.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Carlisle_Castle_02.jpg/1920px-Carlisle_Castle_02.jpg",
      "alt": "Carlisle Castle walls",
      "author": "Kai Kühne",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Carlisle_Castle_02.jpg"
    }
  ],
  "chelmsford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chelmsford_Cathedral_-_geograph.org.uk_-_6734763.jpg/1920px-Chelmsford_Cathedral_-_geograph.org.uk_-_6734763.jpg",
      "alt": "Chelmsford Cathedral",
      "author": "Jonathan Hutchins",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Chelmsford_Cathedral_-_geograph.org.uk_-_6734763.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lake_and_railway_viaduct%2C_Central_Park%2C_Chelmsford_-_geograph.org.uk_-_8009346.jpg/1920px-Lake_and_railway_viaduct%2C_Central_Park%2C_Chelmsford_-_geograph.org.uk_-_8009346.jpg",
      "alt": "Lake in Central Park, Chelmsford",
      "author": "Chris Holifield",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Lake_and_railway_viaduct%2C_Central_Park%2C_Chelmsford_-_geograph.org.uk_-_8009346.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Parkway%2C_Chelmsford_-_geograph.org.uk_-_7966602.jpg/1280px-Parkway%2C_Chelmsford_-_geograph.org.uk_-_7966602.jpg",
      "alt": "Parkway, Chelmsford",
      "author": "David Howard",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Parkway%2C_Chelmsford_-_geograph.org.uk_-_7966602.jpg"
    }
  ],
  "cheltenham": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Imperial_Square%2C_Cheltenham.jpg/1920px-Imperial_Square%2C_Cheltenham.jpg",
      "alt": "Imperial Square, Cheltenham",
      "author": "Simon Burchell",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Imperial_Square%2C_Cheltenham.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Award_winner%5E_-_geograph.org.uk_-_4118654.jpg/1920px-Award_winner%5E_-_geograph.org.uk_-_4118654.jpg",
      "alt": "Floral gardens in Cheltenham",
      "author": "Anthony O'Neil",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Award_winner%5E_-_geograph.org.uk_-_4118654.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Cheltenham.from.leckhampton.arp.jpg/1920px-Cheltenham.from.leckhampton.arp.jpg",
      "alt": "View over Cheltenham from Leckhampton Hill",
      "author": "Arpingstone",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:Cheltenham.from.leckhampton.arp.jpg"
    }
  ],
  "colchester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Colchester_Castle_-_geograph.org.uk_-_2764371.jpg/1920px-Colchester_Castle_-_geograph.org.uk_-_2764371.jpg",
      "alt": "Colchester Castle",
      "author": "Peter Stack",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Colchester_Castle_-_geograph.org.uk_-_2764371.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Colchester_Castle%2C_2016.jpg/1920px-Colchester_Castle%2C_2016.jpg",
      "alt": "Colchester Castle in its park",
      "author": "Alexis Ip",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Colchester_Castle%2C_2016.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Colchester_Castle_side_view_2023.jpg/1920px-Colchester_Castle_side_view_2023.jpg",
      "alt": "Colchester Castle from the side",
      "author": "Jonathan Dann",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Colchester_Castle_side_view_2023.jpg"
    }
  ],
  "coventry": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Coventry_Cathedral_2018.jpg/1920px-Coventry_Cathedral_2018.jpg",
      "alt": "Coventry Cathedral",
      "author": "DeFacto",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Coventry_Cathedral_2018.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Coventry_Cathedral_Ruins_with_Rainbow_edit.jpg/1920px-Coventry_Cathedral_Ruins_with_Rainbow_edit.jpg",
      "alt": "Ruins of the old Coventry Cathedral",
      "author": "Andrew Walker",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Coventry_Cathedral_Ruins_with_Rainbow_edit.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Coventry_skyline.jpg/1920px-Coventry_skyline.jpg",
      "alt": "Coventry skyline",
      "author": "Si (mintchociecream)",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Coventry_skyline.jpg"
    }
  ],
  "doncaster": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Doncaster_Minster_and_skyline.jpg/1920px-Doncaster_Minster_and_skyline.jpg",
      "alt": "Doncaster Minster and skyline",
      "author": "The joy of all things",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Doncaster_Minster_and_skyline.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Danum_Hotel%2C_High_Street%2C_Doncaster_%2817th_February_2024%29.jpg/1920px-Danum_Hotel%2C_High_Street%2C_Doncaster_%2817th_February_2024%29.jpg",
      "alt": "High Street, Doncaster",
      "author": "Mtaylor848",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Danum_Hotel%2C_High_Street%2C_Doncaster_%2817th_February_2024%29.jpg"
    }
  ],
  "dundee": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/V%5EA%2C_Riverside_Esplanade%2C_Dundee_-_geograph.org.uk_-_7645059.jpg/1920px-V%5EA%2C_Riverside_Esplanade%2C_Dundee_-_geograph.org.uk_-_7645059.jpg",
      "alt": "V&A Dundee on the Riverside Esplanade",
      "author": "Andrew Diack",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:V%5EA%2C_Riverside_Esplanade%2C_Dundee_-_geograph.org.uk_-_7645059.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Abend_in_Dundee%2C_Tay_Bridge_%2826840853949%29.jpg/1280px-Abend_in_Dundee%2C_Tay_Bridge_%2826840853949%29.jpg",
      "alt": "The Tay Bridge at Dundee in the evening",
      "author": "Herbert Frank",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Abend_in_Dundee%2C_Tay_Bridge_%2826840853949%29.jpg"
    }
  ],
  "eastbourne": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Eastbourne_Pier_April_2018_01.jpg/1920px-Eastbourne_Pier_April_2018_01.jpg",
      "alt": "Eastbourne Pier",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Eastbourne_Pier_April_2018_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Eastbourne_Bandstand_April_2018_03.jpg/1920px-Eastbourne_Bandstand_April_2018_03.jpg",
      "alt": "Eastbourne Bandstand on the seafront",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Eastbourne_Bandstand_April_2018_03.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Eastbourne_Pier_March_2017_08.jpg/1920px-Eastbourne_Pier_March_2017_08.jpg",
      "alt": "Eastbourne Pier from the beach",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Eastbourne_Pier_March_2017_08.jpg"
    }
  ],
  "edinburgh": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Edinburgh_Castle_Rock.jpg/1920px-Edinburgh_Castle_Rock.jpg",
      "alt": "Edinburgh Castle on Castle Rock",
      "author": "Saffron Blaze",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Edinburgh_Castle_Rock.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2010-11-04_13-43-15_United_Kingdom_Scotland_Edinburgh_HDR.jpg/1920px-2010-11-04_13-43-15_United_Kingdom_Scotland_Edinburgh_HDR.jpg",
      "alt": "Edinburgh Old Town skyline",
      "author": "Hansueli Krapf",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:2010-11-04_13-43-15_United_Kingdom_Scotland_Edinburgh_HDR.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Edinburgh_Salisbury_Crags-20110904-RM-122306.jpg/1920px-Edinburgh_Salisbury_Crags-20110904-RM-122306.jpg",
      "alt": "Salisbury Crags above Edinburgh",
      "author": "Ermell",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Edinburgh_Salisbury_Crags-20110904-RM-122306.jpg"
    }
  ],
  "exeter": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cathedral_of_Exeter_edit.jpg/1920px-Cathedral_of_Exeter_edit.jpg",
      "alt": "Exeter Cathedral west front",
      "author": "Markus Koljo",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cathedral_of_Exeter_edit.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Exeter_%28Devon%2C_UK%29%2C_Quay_--_2013_--_4.jpg/1920px-Exeter_%28Devon%2C_UK%29%2C_Quay_--_2013_--_4.jpg",
      "alt": "Exeter Quay on the River Exe",
      "author": "Dietmar Rabich",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Exeter_%28Devon%2C_UK%29%2C_Quay_--_2013_--_4.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Richard_Hooker_Monument_near_the_Cathedral._Exeter%2C_UK.jpg/1920px-Richard_Hooker_Monument_near_the_Cathedral._Exeter%2C_UK.jpg",
      "alt": "Cathedral Green, Exeter",
      "author": "Ввласенко",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Richard_Hooker_Monument_near_the_Cathedral._Exeter%2C_UK.jpg"
    }
  ],
  "guildford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Guildford_High_Street_-_geograph.org.uk_-_4707637.jpg/1920px-Guildford_High_Street_-_geograph.org.uk_-_4707637.jpg",
      "alt": "Guildford High Street",
      "author": "Alan Hunt",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Guildford_High_Street_-_geograph.org.uk_-_4707637.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Guildford_%26_Cathedral_of_Surrey.JPG/1920px-Guildford_%26_Cathedral_of_Surrey.JPG",
      "alt": "Guildford and Guildford Cathedral from above",
      "author": "Himar Santana Hernández",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:Guildford_%26_Cathedral_of_Surrey.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Guildford_High_Street_-_geograph.org.uk_-_8361347.jpg/1920px-Guildford_High_Street_-_geograph.org.uk_-_8361347.jpg",
      "alt": "Guildford High Street on a sunny day",
      "author": "Jonathan Billinger",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Guildford_High_Street_-_geograph.org.uk_-_8361347.jpg"
    }
  ],
  "halifax": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Halifax_view_from_Beacon_Hill.jpg/1920px-Halifax_view_from_Beacon_Hill.jpg",
      "alt": "View over Halifax from Beacon Hill",
      "author": "Mr Barndoor",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Halifax_view_from_Beacon_Hill.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halifax_Flickr_10_October_2021.jpg/1920px-Halifax_Flickr_10_October_2021.jpg",
      "alt": "Halifax town centre",
      "author": "Tim Green",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Halifax_Flickr_10_October_2021.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Former_Post_Office%2C_Commercial_Street%2C_Halifax%2C_West_Yorkshire_%2811th_February_2023%29.jpg/1920px-Former_Post_Office%2C_Commercial_Street%2C_Halifax%2C_West_Yorkshire_%2811th_February_2023%29.jpg",
      "alt": "Commercial Street, Halifax",
      "author": "Mtaylor848",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Former_Post_Office%2C_Commercial_Street%2C_Halifax%2C_West_Yorkshire_%2811th_February_2023%29.jpg"
    }
  ],
  "hastings": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hastings_beach.jpg/1920px-Hastings_beach.jpg",
      "alt": "Hastings Old Town beach and East Hill",
      "author": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Hastings_beach.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hastings_Seafront_-_July_2014_-_Primrose_House.jpg/1920px-Hastings_Seafront_-_July_2014_-_Primrose_House.jpg",
      "alt": "Hastings seafront",
      "author": "Gareth Williams",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Hastings_Seafront_-_July_2014_-_Primrose_House.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Old_Town_Beach%2C_Hastings%2C_Sussex_-_geograph.org.uk_-_1768389.jpg/1920px-Old_Town_Beach%2C_Hastings%2C_Sussex_-_geograph.org.uk_-_1768389.jpg",
      "alt": "Fishing boats on the Old Town beach, Hastings",
      "author": "Peter Trimming",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Old_Town_Beach%2C_Hastings%2C_Sussex_-_geograph.org.uk_-_1768389.jpg"
    }
  ],
  "huddersfield": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Victoria_Tower_Castle_Hill_Almondbury.jpg/1920px-Victoria_Tower_Castle_Hill_Almondbury.jpg",
      "alt": "Victoria Tower on Castle Hill, Huddersfield",
      "author": "Eric A. Bell",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Victoria_Tower_Castle_Hill_Almondbury.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Castle_Hill_and_the_Victoria_Tower_from_Emley_Moor_-_geograph.org.uk_-_3644955.jpg/1280px-Castle_Hill_and_the_Victoria_Tower_from_Emley_Moor_-_geograph.org.uk_-_3644955.jpg",
      "alt": "Castle Hill and Victoria Tower above Huddersfield",
      "author": "Andy Stephenson",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Castle_Hill_and_the_Victoria_Tower_from_Emley_Moor_-_geograph.org.uk_-_3644955.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Castle_Hill_Side_Road_towards_Lumb_Lane_-_geograph.org.uk_-_4466162.jpg/1920px-Castle_Hill_Side_Road_towards_Lumb_Lane_-_geograph.org.uk_-_4466162.jpg",
      "alt": "Country road near Castle Hill, Huddersfield",
      "author": "Ian S",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Castle_Hill_Side_Road_towards_Lumb_Lane_-_geograph.org.uk_-_4466162.jpg"
    }
  ],
  "ipswich": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/3-5_Silent_street%2C_Ipswich.jpg/1920px-3-5_Silent_street%2C_Ipswich.jpg",
      "alt": "Historic buildings on Silent Street, Ipswich",
      "author": "Sumit Surai",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:3-5_Silent_street%2C_Ipswich.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ipswich_School.jpg/1920px-Ipswich_School.jpg",
      "alt": "Ipswich School",
      "author": "Sumit Surai",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Ipswich_School.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gippeswyk_Hall%2C_Ipswich.jpg/1920px-Gippeswyk_Hall%2C_Ipswich.jpg",
      "alt": "Gippeswyk Hall, Ipswich",
      "author": "Sumit Surai",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Gippeswyk_Hall%2C_Ipswich.jpg"
    }
  ],
  "leicester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Leicester_Cathedral_%2810805059823%29.jpg/1920px-Leicester_Cathedral_%2810805059823%29.jpg",
      "alt": "Leicester Cathedral",
      "author": "Peter Broster",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Leicester_Cathedral_%2810805059823%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/High_Street%2C_Leicester_-_geograph.org.uk_-_4718750.jpg/1920px-High_Street%2C_Leicester_-_geograph.org.uk_-_4718750.jpg",
      "alt": "High Street, Leicester",
      "author": "David P Howard",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:High_Street%2C_Leicester_-_geograph.org.uk_-_4718750.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Leicester_Cathedral_%2826781284551%29.jpg/1920px-Leicester_Cathedral_%2826781284551%29.jpg",
      "alt": "Leicester Cathedral spire",
      "author": "Jules & Jenny",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Leicester_Cathedral_%2826781284551%29.jpg"
    }
  ],
  "lincoln": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lincoln_Cathedral_drone_photo_25-07-2024.jpg/1920px-Lincoln_Cathedral_drone_photo_25-07-2024.jpg",
      "alt": "Lincoln Cathedral from the air",
      "author": "Remkog",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Lincoln_Cathedral_drone_photo_25-07-2024.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Steep_Hill_in_Lincoln_%28UK%29.jpg/1920px-Steep_Hill_in_Lincoln_%28UK%29.jpg",
      "alt": "Steep Hill, Lincoln",
      "author": "Roland Arhelger",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Steep_Hill_in_Lincoln_%28UK%29.jpg"
    }
  ],
  "london": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/City_of_London_skyline_from_London_City_Hall_-_Oct_2008.jpg/1920px-City_of_London_skyline_from_London_City_Hall_-_Oct_2008.jpg",
      "alt": "City of London skyline across the River Thames",
      "author": "Diliff",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:City_of_London_skyline_from_London_City_Hall_-_Oct_2008.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/London%2C_Palace_of_Westminster_--_2016_--_4800.jpg/1920px-London%2C_Palace_of_Westminster_--_2016_--_4800.jpg",
      "alt": "Palace of Westminster, London",
      "author": "Dietmar Rabich",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:London%2C_Palace_of_Westminster_--_2016_--_4800.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/London_November_2013-23a.jpg/1920px-London_November_2013-23a.jpg",
      "alt": "The River Thames in central London",
      "author": "Alvesgaspar",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:London_November_2013-23a.jpg"
    }
  ],
  "maidstone": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/River_Medway_Maidstone_Reflections.jpg/1920px-River_Medway_Maidstone_Reflections.jpg",
      "alt": "River Medway at Maidstone",
      "author": "John K Thorne",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:River_Medway_Maidstone_Reflections.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/River_Medway%2C_Maidstone_-_geograph.org.uk_-_2100969.jpg/1920px-River_Medway%2C_Maidstone_-_geograph.org.uk_-_2100969.jpg",
      "alt": "River Medway, Maidstone",
      "author": "Stephen McKay",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:River_Medway%2C_Maidstone_-_geograph.org.uk_-_2100969.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jubilee_Square%2C_High_Street%2C_Maidstone_-_geograph.org.uk_-_5241030.jpg/1920px-Jubilee_Square%2C_High_Street%2C_Maidstone_-_geograph.org.uk_-_5241030.jpg",
      "alt": "Jubilee Square, Maidstone High Street",
      "author": "Chris Whippet",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Jubilee_Square%2C_High_Street%2C_Maidstone_-_geograph.org.uk_-_5241030.jpg"
    }
  ],
  "manchester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ashton_Canal_Piccadilly_Village.jpg/1920px-Ashton_Canal_Piccadilly_Village.jpg",
      "alt": "Ashton Canal in Manchester city centre",
      "author": "Benjamin Shaw",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Ashton_Canal_Piccadilly_Village.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Cranes_over_the_Manchester_Skyline%2C_geograph_5726997_by_Anthony_Parkes.jpg/1920px-Cranes_over_the_Manchester_Skyline%2C_geograph_5726997_by_Anthony_Parkes.jpg",
      "alt": "Manchester skyline",
      "author": "Anthony Parkes",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cranes_over_the_Manchester_Skyline%2C_geograph_5726997_by_Anthony_Parkes.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Castlefield%2C_Manchester%2C_UK_-_panoramio_-_IIya_Kuzhekin_%281%29.jpg/1920px-Castlefield%2C_Manchester%2C_UK_-_panoramio_-_IIya_Kuzhekin_%281%29.jpg",
      "alt": "Castlefield canal basin, Manchester",
      "author": "IIya Kuzhekin",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Castlefield%2C_Manchester%2C_UK_-_panoramio_-_IIya_Kuzhekin_%281%29.jpg"
    }
  ],
  "middlesbrough": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/R_Tees_%5E_Teesdale_Way%2C_downstream_from_Tees_%28Newport%29_Bridge_-_geograph.org.uk_-_7379404.jpg/1920px-R_Tees_%5E_Teesdale_Way%2C_downstream_from_Tees_%28Newport%29_Bridge_-_geograph.org.uk_-_7379404.jpg",
      "alt": "River Tees in Middlesbrough",
      "author": "Colin Park",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:R_Tees_%5E_Teesdale_Way%2C_downstream_from_Tees_%28Newport%29_Bridge_-_geograph.org.uk_-_7379404.jpg"
    }
  ],
  "newcastle": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Newcastle_upon_Tyne_-_Gateshead_Millennium_Bridge_-_1.jpg/1920px-Newcastle_upon_Tyne_-_Gateshead_Millennium_Bridge_-_1.jpg",
      "alt": "Gateshead Millennium Bridge and Newcastle Quayside",
      "author": "Benjamin Smith",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Newcastle_upon_Tyne_-_Gateshead_Millennium_Bridge_-_1.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Newcastle_upon_Tyne_-_High_Level_Bridge_-_2.jpg/1920px-Newcastle_upon_Tyne_-_High_Level_Bridge_-_2.jpg",
      "alt": "High Level Bridge over the Tyne, Newcastle",
      "author": "Benjamin Smith",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Newcastle_upon_Tyne_-_High_Level_Bridge_-_2.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Gateshead_-_Baltic_Flour_Mill_and_Millennium_Bridge.jpg/1920px-Gateshead_-_Baltic_Flour_Mill_and_Millennium_Bridge.jpg",
      "alt": "Baltic and the Millennium Bridge on the Tyne",
      "author": "Benjamin Smith",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Gateshead_-_Baltic_Flour_Mill_and_Millennium_Bridge.jpg"
    }
  ],
  "norwich": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Catedral%2C_Norwich%2C_Inglaterra%2C_2022-11-19%2C_DD_49.jpg/1920px-Catedral%2C_Norwich%2C_Inglaterra%2C_2022-11-19%2C_DD_49.jpg",
      "alt": "Norwich Cathedral",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Catedral%2C_Norwich%2C_Inglaterra%2C_2022-11-19%2C_DD_49.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Catedral_de_San_Juan_Bautista%2C_Norwich%2C_Inglaterra%2C_2022-11-20%2C_DD_33.jpg/1920px-Catedral_de_San_Juan_Bautista%2C_Norwich%2C_Inglaterra%2C_2022-11-20%2C_DD_33.jpg",
      "alt": "Norwich city centre",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Catedral_de_San_Juan_Bautista%2C_Norwich%2C_Inglaterra%2C_2022-11-20%2C_DD_33.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/The_Mischief%2C_Fye_Bridge_Street%2C_Norwich_-_geograph.org.uk_-_6996692.jpg/1920px-The_Mischief%2C_Fye_Bridge_Street%2C_Norwich_-_geograph.org.uk_-_6996692.jpg",
      "alt": "Fye Bridge Street, Norwich",
      "author": "habiloid",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:The_Mischief%2C_Fye_Bridge_Street%2C_Norwich_-_geograph.org.uk_-_6996692.jpg"
    }
  ],
  "nottingham": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Mini_beach_at_nottingham_old_market_square_%2820427004496%29.jpg/1920px-Mini_beach_at_nottingham_old_market_square_%2820427004496%29.jpg",
      "alt": "Old Market Square, Nottingham",
      "author": "tshrinivasan",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Mini_beach_at_nottingham_old_market_square_%2820427004496%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Standard_Hill%2C_Nottingham_-_geograph.org.uk_-_6485290.jpg/1920px-Standard_Hill%2C_Nottingham_-_geograph.org.uk_-_6485290.jpg",
      "alt": "Standard Hill, Nottingham",
      "author": "Andrew Abbott",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Standard_Hill%2C_Nottingham_-_geograph.org.uk_-_6485290.jpg"
    }
  ],
  "oldham": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oldham_town_centre_closeup_from_Hartshead_Pike.jpg/1920px-Oldham_town_centre_closeup_from_Hartshead_Pike.jpg",
      "alt": "Oldham town centre from Hartshead Pike",
      "author": "G-13114",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Oldham_town_centre_closeup_from_Hartshead_Pike.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Oldham_Town_Centre_-_geograph.org.uk_-_5138949.jpg/1920px-Oldham_Town_Centre_-_geograph.org.uk_-_5138949.jpg",
      "alt": "Oldham town centre",
      "author": "Peter McDermott",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Oldham_Town_Centre_-_geograph.org.uk_-_5138949.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/North_Greater_Manchester.jpg/1920px-North_Greater_Manchester.jpg",
      "alt": "View across north Greater Manchester from Oldham",
      "author": "Tom Faulkner",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:North_Greater_Manchester.jpg"
    }
  ],
  "oxford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Merton_College_Oxford_2018_01.jpg/1920px-Merton_College_Oxford_2018_01.jpg",
      "alt": "Merton College, Oxford",
      "author": "Julian Herzog",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Merton_College_Oxford_2018_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Oxford_magdalen_college_new_building.jpg/1920px-Oxford_magdalen_college_new_building.jpg",
      "alt": "Magdalen College, Oxford",
      "author": "Velvet",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Oxford_magdalen_college_new_building.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Magdalen_College_Oxford_2023_02.jpg/1920px-Magdalen_College_Oxford_2023_02.jpg",
      "alt": "Magdalen College tower, Oxford",
      "author": "Julian Herzog",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Magdalen_College_Oxford_2023_02.jpg"
    }
  ],
  "plymouth": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Smeatons_tower_-_Plymouth_Hoe.jpg/1920px-Smeatons_tower_-_Plymouth_Hoe.jpg",
      "alt": "Smeaton's Tower on Plymouth Hoe",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Smeatons_tower_-_Plymouth_Hoe.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/RFA_Gold_Rover_%28A271%29_P_sound.jpg/1920px-RFA_Gold_Rover_%28A271%29_P_sound.jpg",
      "alt": "Plymouth Sound",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:RFA_Gold_Rover_%28A271%29_P_sound.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Elliot_Terrace%2C_Plymouth_Hoe.jpg/1920px-Elliot_Terrace%2C_Plymouth_Hoe.jpg",
      "alt": "Elliot Terrace on Plymouth Hoe",
      "author": "Nilfanion",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Elliot_Terrace%2C_Plymouth_Hoe.jpg"
    }
  ],
  "preston": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/The_Harris_Museum%2C_Art_Gallery_%26_Library.jpg/1920px-The_Harris_Museum%2C_Art_Gallery_%26_Library.jpg",
      "alt": "Harris Museum and Art Gallery, Preston",
      "author": "Michael D Beckwith",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:The_Harris_Museum%2C_Art_Gallery_%26_Library.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Miller_Arcade_Preston.jpg/1920px-Miller_Arcade_Preston.jpg",
      "alt": "Miller Arcade, Preston",
      "author": "Francis Franklin",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Miller_Arcade_Preston.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Albert_Edward_Dock%2C_Preston_-_geograph.org.uk_-_1758264.jpg/1920px-Albert_Edward_Dock%2C_Preston_-_geograph.org.uk_-_1758264.jpg",
      "alt": "Albert Edward Dock, Preston",
      "author": "Andrew Mathewson",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Albert_Edward_Dock%2C_Preston_-_geograph.org.uk_-_1758264.jpg"
    }
  ],
  "rotherham": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rotherham_town_centre%2C_September_2016.jpg/1920px-Rotherham_town_centre%2C_September_2016.jpg",
      "alt": "Rotherham town centre",
      "author": "happymillerman",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Rotherham_town_centre%2C_September_2016.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rotherham%2C_England%2C_2_May_2010_%2817%29%2C_the_New_County_pub_and_Rotherham_town_centre.jpg/1920px-Rotherham%2C_England%2C_2_May_2010_%2817%29%2C_the_New_County_pub_and_Rotherham_town_centre.jpg",
      "alt": "Rotherham town centre and Minster",
      "author": "Ben Sutherland",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Rotherham%2C_England%2C_2_May_2010_%2817%29%2C_the_New_County_pub_and_Rotherham_town_centre.jpg"
    }
  ],
  "salford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Millennium_Bridge%2C_Salford_Quays%2C_Manchester.jpg/1920px-Millennium_Bridge%2C_Salford_Quays%2C_Manchester.jpg",
      "alt": "Millennium Bridge at Salford Quays",
      "author": "Rosser1954",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Millennium_Bridge%2C_Salford_Quays%2C_Manchester.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Salford_Quays_4_%286300326593%29.jpg/1920px-Salford_Quays_4_%286300326593%29.jpg",
      "alt": "Salford Quays",
      "author": "Tony Hisgett",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Salford_Quays_4_%286300326593%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Ordsall_Hall_2014_01.jpg/1920px-Ordsall_Hall_2014_01.jpg",
      "alt": "Ordsall Hall, Salford",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Ordsall_Hall_2014_01.jpg"
    }
  ],
  "salisbury": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Catedral_de_Salisbury%2C_Salisbury%2C_Inglaterra%2C_2014-08-12%2C_DD_03.JPG/1920px-Catedral_de_Salisbury%2C_Salisbury%2C_Inglaterra%2C_2014-08-12%2C_DD_03.JPG",
      "alt": "Salisbury Cathedral",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Catedral_de_Salisbury%2C_Salisbury%2C_Inglaterra%2C_2014-08-12%2C_DD_03.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Catedral_de_Salisbury%2C_Salisbury%2C_Inglaterra%2C_2014-08-12%2C_DD_58.JPG/1920px-Catedral_de_Salisbury%2C_Salisbury%2C_Inglaterra%2C_2014-08-12%2C_DD_58.JPG",
      "alt": "Salisbury Cathedral spire",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Catedral_de_Salisbury%2C_Salisbury%2C_Inglaterra%2C_2014-08-12%2C_DD_58.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Salisbury_High_Street_-_geograph.org.uk_-_6979778.jpg/1920px-Salisbury_High_Street_-_geograph.org.uk_-_6979778.jpg",
      "alt": "Salisbury High Street",
      "author": "Michael Garlick",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Salisbury_High_Street_-_geograph.org.uk_-_6979778.jpg"
    }
  ],
  "southampton": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/View_from_Oceana_-_2_-_geograph.org.uk_-_2667819.jpg/1920px-View_from_Oceana_-_2_-_geograph.org.uk_-_2667819.jpg",
      "alt": "Southampton waterfront",
      "author": "Terry Robinson",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_from_Oceana_-_2_-_geograph.org.uk_-_2667819.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/The_Itchen_Bridge_lower_itchen_and_lower_southampton_water.jpg/1920px-The_Itchen_Bridge_lower_itchen_and_lower_southampton_water.jpg",
      "alt": "Itchen Bridge and Southampton Water",
      "author": "Henry Burrows",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:The_Itchen_Bridge_lower_itchen_and_lower_southampton_water.jpg"
    }
  ],
  "stockport": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bramall_Hall_2016_006.jpg/1920px-Bramall_Hall_2016_006.jpg",
      "alt": "Bramall Hall, Stockport",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bramall_Hall_2016_006.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bramall_Hall_2016_010.jpg/1920px-Bramall_Hall_2016_010.jpg",
      "alt": "Bramall Hall gardens, Stockport",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bramall_Hall_2016_010.jpg"
    }
  ],
  "stoke-on-trent": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Trent_%5E_Mersey_canal_towards_bridge_%5E104A_-_geograph.org.uk_-_7097308.jpg/1920px-Trent_%5E_Mersey_canal_towards_bridge_%5E104A_-_geograph.org.uk_-_7097308.jpg",
      "alt": "Trent and Mersey Canal in Stoke-on-Trent",
      "author": "Ian S",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Trent_%5E_Mersey_canal_towards_bridge_%5E104A_-_geograph.org.uk_-_7097308.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hanley_Park_Bandstand_and_Pavilion_-_geograph.org.uk_-_6758938.jpg/1920px-Hanley_Park_Bandstand_and_Pavilion_-_geograph.org.uk_-_6758938.jpg",
      "alt": "Hanley Park bandstand, Stoke-on-Trent",
      "author": "Brian Deegan",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Hanley_Park_Bandstand_and_Pavilion_-_geograph.org.uk_-_6758938.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Trent_%5E_Mersey_canal_towards_bridge_%5E104A_-_geograph.org.uk_-_7097310.jpg/1920px-Trent_%5E_Mersey_canal_towards_bridge_%5E104A_-_geograph.org.uk_-_7097310.jpg",
      "alt": "Trent and Mersey Canal, Stoke-on-Trent",
      "author": "Ian S",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Trent_%5E_Mersey_canal_towards_bridge_%5E104A_-_geograph.org.uk_-_7097310.jpg"
    }
  ],
  "sunderland": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Keel_Square.jpg/1920px-Keel_Square.jpg",
      "alt": "Keel Square, Sunderland",
      "author": "John Lord",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Keel_Square.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sunderland%2C_UK_-_panoramio_%281%29.jpg/1920px-Sunderland%2C_UK_-_panoramio_%281%29.jpg",
      "alt": "River Wear at Sunderland",
      "author": "jim field",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Sunderland%2C_UK_-_panoramio_%281%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Church_Street_East%2C_Sunderland.jpg/1920px-Church_Street_East%2C_Sunderland.jpg",
      "alt": "Church Street East, Sunderland",
      "author": "Reading Tom",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Church_Street_East%2C_Sunderland.jpg"
    }
  ],
  "swansea": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/River_Tawe_estuary_marina.JPG/1920px-River_Tawe_estuary_marina.JPG",
      "alt": "Swansea marina on the River Tawe",
      "author": "Sloman",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:River_Tawe_estuary_marina.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Swansea%2C_general_view_04.jpg/1920px-Swansea%2C_general_view_04.jpg",
      "alt": "View over Swansea",
      "author": "Palickap",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Swansea%2C_general_view_04.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Wreck_of_the_Helvetia_03.jpg/1920px-Wreck_of_the_Helvetia_03.jpg",
      "alt": "Rhossili beach on the Gower, Swansea",
      "author": "Suntooooth",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Wreck_of_the_Helvetia_03.jpg"
    }
  ],
  "swindon": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/View_over_Lawns_Park_and_Old_Walcot_%28Jun_2016%29.jpg/1920px-View_over_Lawns_Park_and_Old_Walcot_%28Jun_2016%29.jpg",
      "alt": "Lawns Park and Old Walcot, Swindon",
      "author": "Icantthinkofausernames",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_over_Lawns_Park_and_Old_Walcot_%28Jun_2016%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2016-06-01_Faringdon_Road_Park%2C_Swindon.jpg/1920px-2016-06-01_Faringdon_Road_Park%2C_Swindon.jpg",
      "alt": "Faringdon Road Park, Swindon",
      "author": "Alexey Komarov",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:2016-06-01_Faringdon_Road_Park%2C_Swindon.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Evergreen_trees%2C_Shaw_Forest_Park%2C_Swindon_-_geograph.org.uk_-_1705791.jpg/1920px-Evergreen_trees%2C_Shaw_Forest_Park%2C_Swindon_-_geograph.org.uk_-_1705791.jpg",
      "alt": "Shaw Forest Park, Swindon",
      "author": "Brian Robert Marshall",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Evergreen_trees%2C_Shaw_Forest_Park%2C_Swindon_-_geograph.org.uk_-_1705791.jpg"
    }
  ],
  "telford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ironbridge002.JPG/1920px-Ironbridge002.JPG",
      "alt": "The Iron Bridge, Telford",
      "author": "Jasonjsmith",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:Ironbridge002.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ironbridge_-_panoramio_%281%29.jpg/1920px-Ironbridge_-_panoramio_%281%29.jpg",
      "alt": "Ironbridge Gorge, Telford",
      "author": "JCNazza",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Ironbridge_-_panoramio_%281%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/River_Severn_at_Ironbridge_%288525%29.jpg/1920px-River_Severn_at_Ironbridge_%288525%29.jpg",
      "alt": "River Severn at Ironbridge, Telford",
      "author": "Nilfanion",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:River_Severn_at_Ironbridge_%288525%29.jpg"
    }
  ],
  "wakefield": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wakefield_Cathedral_from_east.JPG/1920px-Wakefield_Cathedral_from_east.JPG",
      "alt": "Wakefield Cathedral",
      "author": "Poliphilo",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Wakefield_Cathedral_from_east.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Wakefield-1.jpg/1920px-Wakefield-1.jpg",
      "alt": "Wakefield city centre",
      "author": "Tim Green",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Wakefield-1.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Exterior_of_Wakefield_Cathedral_%2831st_May_2024%29_003.jpg/1920px-Exterior_of_Wakefield_Cathedral_%2831st_May_2024%29_003.jpg",
      "alt": "Wakefield Cathedral exterior",
      "author": "Mtaylor848",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Exterior_of_Wakefield_Cathedral_%2831st_May_2024%29_003.jpg"
    }
  ],
  "warrington": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Warrington_town_hall.jpg/1920px-Warrington_town_hall.jpg",
      "alt": "Warrington Town Hall and Golden Gates",
      "author": "Racklever",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:Warrington_town_hall.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Warrington_Town_Hall1_JShipley_20150829.jpg/1920px-Warrington_Town_Hall1_JShipley_20150829.jpg",
      "alt": "Warrington Town Hall",
      "author": "John Shipley",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Warrington_Town_Hall1_JShipley_20150829.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/A_footbridge_over_the_St_Helens_Canal_-_geograph.org.uk_-_2962347.jpg/1920px-A_footbridge_over_the_St_Helens_Canal_-_geograph.org.uk_-_2962347.jpg",
      "alt": "Footbridge over the St Helens Canal, Warrington",
      "author": "Ian Greig",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:A_footbridge_over_the_St_Helens_Canal_-_geograph.org.uk_-_2962347.jpg"
    }
  ],
  "watford": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cassiobury_Park_-_Flickr_-_flashcurd.jpg/1920px-Cassiobury_Park_-_Flickr_-_flashcurd.jpg",
      "alt": "Cassiobury Park, Watford",
      "author": "Dom Crossley",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cassiobury_Park_-_Flickr_-_flashcurd.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Grand_Union_Canal%2C_north_of_Cassio_Bridge_Lock_-_geograph.org.uk_-_7070493.jpg/1920px-Grand_Union_Canal%2C_north_of_Cassio_Bridge_Lock_-_geograph.org.uk_-_7070493.jpg",
      "alt": "Grand Union Canal near Watford",
      "author": "Stephen McKay",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Grand_Union_Canal%2C_north_of_Cassio_Bridge_Lock_-_geograph.org.uk_-_7070493.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Oxhey_Park_by_River_Colne.jpg/1920px-Oxhey_Park_by_River_Colne.jpg",
      "alt": "Oxhey Park by the River Colne, Watford",
      "author": "Bucktrout",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Oxhey_Park_by_River_Colne.jpg"
    }
  ],
  "wolverhampton": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Canal_boat_entering_Lock_19_on_the_Birmingham_Canal_-_geograph.org.uk_-_2439131.jpg/1920px-Canal_boat_entering_Lock_19_on_the_Birmingham_Canal_-_geograph.org.uk_-_2439131.jpg",
      "alt": "Lock on the Birmingham Canal, Wolverhampton",
      "author": "Bill Boaden",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Canal_boat_entering_Lock_19_on_the_Birmingham_Canal_-_geograph.org.uk_-_2439131.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Birmingham_Canal_old_main_line_beside_railway_in_1980_-_geograph.org.uk_-_6723383.jpg/1920px-Birmingham_Canal_old_main_line_beside_railway_in_1980_-_geograph.org.uk_-_6723383.jpg",
      "alt": "Birmingham Canal in Wolverhampton",
      "author": "Trevor Littlewood",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Birmingham_Canal_old_main_line_beside_railway_in_1980_-_geograph.org.uk_-_6723383.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Canal_boat_Evelyn_Elizabeth%2C_Old_Main_Line_Canal_-_geograph.org.uk_-_6985892.jpg/1920px-Canal_boat_Evelyn_Elizabeth%2C_Old_Main_Line_Canal_-_geograph.org.uk_-_6985892.jpg",
      "alt": "Narrowboat on the canal, Wolverhampton",
      "author": "Ian S",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Canal_boat_Evelyn_Elizabeth%2C_Old_Main_Line_Canal_-_geograph.org.uk_-_6985892.jpg"
    }
  ],
  "worcester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cathedral_Church_of_Christ_and_St_Mary_Worcester_1389728_20230819_0095.jpg/1920px-Cathedral_Church_of_Christ_and_St_Mary_Worcester_1389728_20230819_0095.jpg",
      "alt": "Worcester Cathedral across the River Severn",
      "author": "Tilman2007",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cathedral_Church_of_Christ_and_St_Mary_Worcester_1389728_20230819_0095.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cathedral_Church_of_Christ_and_St_Mary_Worcester_1389728_20230819_0098.jpg/1920px-Cathedral_Church_of_Christ_and_St_Mary_Worcester_1389728_20230819_0098.jpg",
      "alt": "Worcester Cathedral",
      "author": "Tilman2007",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cathedral_Church_of_Christ_and_St_Mary_Worcester_1389728_20230819_0098.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Worcester_Cathedral%2C_Worcester.jpg/1920px-Worcester_Cathedral%2C_Worcester.jpg",
      "alt": "Worcester Cathedral tower",
      "author": "Edward Swift",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Worcester_Cathedral%2C_Worcester.jpg"
    }
  ],
  "york": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/1257222_Cathedral_Church_of_St_Peter%2C_York_Minster%2C_seen_from_the_northeast_York_20240520_0083.jpg/1920px-1257222_Cathedral_Church_of_St_Peter%2C_York_Minster%2C_seen_from_the_northeast_York_20240520_0083.jpg",
      "alt": "York Minster",
      "author": "Tilman2007",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:1257222_Cathedral_Church_of_St_Peter%2C_York_Minster%2C_seen_from_the_northeast_York_20240520_0083.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Skeldergate_Bridge_and_the_Ouse_-_geograph.org.uk_-_4130254.jpg/1920px-Skeldergate_Bridge_and_the_Ouse_-_geograph.org.uk_-_4130254.jpg",
      "alt": "Skeldergate Bridge and the River Ouse, York",
      "author": "Peter Bond",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Skeldergate_Bridge_and_the_Ouse_-_geograph.org.uk_-_4130254.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/York_MMB_05_York_Minster.jpg/1920px-York_MMB_05_York_Minster.jpg",
      "alt": "York Minster from the city streets",
      "author": "mattbuck",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:York_MMB_05_York_Minster.jpg"
    }
  ],
  "belfast": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Belfast_City_Hall_front.jpg/1280px-Belfast_City_Hall_front.jpg",
      "alt": "Belfast City Hall",
      "author": "Volant1987",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Belfast_City_Hall_front.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Waterfront_and_Hilton%2C_Belfast%2C_April_2010.JPG/1920px-Waterfront_and_Hilton%2C_Belfast%2C_April_2010.JPG",
      "alt": "Belfast waterfront on the River Lagan",
      "author": "Ardfern",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Waterfront_and_Hilton%2C_Belfast%2C_April_2010.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Taitanic.JPG/1920px-Taitanic.JPG",
      "alt": "Titanic Belfast",
      "author": "Skytouch",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Taitanic.JPG"
    }
  ],
  "bristol": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clifton_Suspension_Bridge_2012.jpg/1920px-Clifton_Suspension_Bridge_2012.jpg",
      "alt": "Clifton Suspension Bridge, Bristol",
      "author": "Nic Trott",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Clifton_Suspension_Bridge_2012.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Dockside_cottages_-_now_home_of_the_Sea_Cadets_-_Bristol_Harbour_-_geograph.org.uk_-_1859537.jpg/1920px-Dockside_cottages_-_now_home_of_the_Sea_Cadets_-_Bristol_Harbour_-_geograph.org.uk_-_1859537.jpg",
      "alt": "Bristol Harbour",
      "author": "Anthony O'Neil",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Dockside_cottages_-_now_home_of_the_Sea_Cadets_-_Bristol_Harbour_-_geograph.org.uk_-_1859537.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bristol_Cathedral_%28Dec2010%29.jpg/1920px-Bristol_Cathedral_%28Dec2010%29.jpg",
      "alt": "Bristol Cathedral",
      "author": "NotFromUtrecht",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bristol_Cathedral_%28Dec2010%29.jpg"
    }
  ],
  "chester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Queens_Park_Bridge%2C_River_Dee%2C_Chester.jpg/1280px-Queens_Park_Bridge%2C_River_Dee%2C_Chester.jpg",
      "alt": "Queens Park Bridge over the River Dee, Chester",
      "author": "Rosser1954",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Queens_Park_Bridge%2C_River_Dee%2C_Chester.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/1376398_Cathedral_Church_of_Christ_and_the_Blessed_Virgin_Mary%2C_West_Front_Chester_20240528_0011.jpg/1920px-1376398_Cathedral_Church_of_Christ_and_the_Blessed_Virgin_Mary%2C_West_Front_Chester_20240528_0011.jpg",
      "alt": "Chester Cathedral",
      "author": "Tilman2007",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:1376398_Cathedral_Church_of_Christ_and_the_Blessed_Virgin_Mary%2C_West_Front_Chester_20240528_0011.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Launches_on_The_Dee_-_geograph.org.uk_-_3537066.jpg/1920px-Launches_on_The_Dee_-_geograph.org.uk_-_3537066.jpg",
      "alt": "Boats on the River Dee, Chester",
      "author": "Jeff Pearson",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Launches_on_The_Dee_-_geograph.org.uk_-_3537066.jpg"
    }
  ],
  "crawley": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tilgate_Park_%2816%29_-_geograph.org.uk_-_4731254.jpg/1920px-Tilgate_Park_%2816%29_-_geograph.org.uk_-_4731254.jpg",
      "alt": "Tilgate Park, Crawley",
      "author": "Barry Shimmon",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Tilgate_Park_%2816%29_-_geograph.org.uk_-_4731254.jpg"
    }
  ],
  "derby": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Derby_-_Museum_of_Making_%26_River_Derwent_%28geograph_6937249%29.jpg/1920px-Derby_-_Museum_of_Making_%26_River_Derwent_%28geograph_6937249%29.jpg",
      "alt": "Museum of Making and the River Derwent, Derby",
      "author": "Colin Park",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Derby_-_Museum_of_Making_%26_River_Derwent_%28geograph_6937249%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Derby_Cathedral_from_St_Mary%27s_Gate_%281%29.JPG/1920px-Derby_Cathedral_from_St_Mary%27s_Gate_%281%29.JPG",
      "alt": "Derby Cathedral",
      "author": "Harry Mitchell",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Derby_Cathedral_from_St_Mary%27s_Gate_%281%29.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Derby_Cathedral_England.JPG/1920px-Derby_Cathedral_England.JPG",
      "alt": "Derby Cathedral tower",
      "author": "Nick Moyes",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Derby_Cathedral_England.JPG"
    }
  ],
  "glasgow": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/George_Square_and_Glasgow_City_Chambers.jpg/1920px-George_Square_and_Glasgow_City_Chambers.jpg",
      "alt": "George Square and Glasgow City Chambers",
      "author": "TomZoy",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:George_Square_and_Glasgow_City_Chambers.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Glasgow_Necropolis_016.jpg/1920px-Glasgow_Necropolis_016.jpg",
      "alt": "View from the Glasgow Necropolis",
      "author": "Postdlf",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Glasgow_Necropolis_016.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/00_104_0403_Glasgow_-_Rathaus.jpg/1920px-00_104_0403_Glasgow_-_Rathaus.jpg",
      "alt": "Glasgow City Chambers",
      "author": "W. Bulach",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:00_104_0403_Glasgow_-_Rathaus.jpg"
    }
  ],
  "gloucester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gloucester_Cathedral_Exterior.jpg/1920px-Gloucester_Cathedral_Exterior.jpg",
      "alt": "Gloucester Cathedral",
      "author": "Michael D Beckwith",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Gloucester_Cathedral_Exterior.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Docks_in_Gloucester.JPG/1920px-Docks_in_Gloucester.JPG",
      "alt": "Gloucester Docks",
      "author": "Nessy",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Docks_in_Gloucester.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Gloucester_Cathedral_exterior_2019.JPG/1920px-Gloucester_Cathedral_exterior_2019.JPG",
      "alt": "Gloucester Cathedral exterior",
      "author": "Geni",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Gloucester_Cathedral_exterior_2019.JPG"
    }
  ],
  "leeds": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Leeds_Civic_Hall_view.jpg/1920px-Leeds_Civic_Hall_view.jpg",
      "alt": "Leeds Civic Hall",
      "author": "Secretary2006",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Leeds_Civic_Hall_view.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/View_of_Leeds_City_Centre_from_Richmond_Street%2C_Leeds_%2826th_October_2024%29.jpg/1920px-View_of_Leeds_City_Centre_from_Richmond_Street%2C_Leeds_%2826th_October_2024%29.jpg",
      "alt": "Leeds city centre skyline",
      "author": "Mtaylor848",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_of_Leeds_City_Centre_from_Richmond_Street%2C_Leeds_%2826th_October_2024%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kirkstall_Abbey_in_the_late_afternoon.jpg/1920px-Kirkstall_Abbey_in_the_late_afternoon.jpg",
      "alt": "Kirkstall Abbey, Leeds",
      "author": "Minda",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Kirkstall_Abbey_in_the_late_afternoon.jpg"
    }
  ],
  "liverpool": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Liverbird_building_02.jpg/1920px-Liverbird_building_02.jpg",
      "alt": "Royal Liver Building, Liverpool",
      "author": "Jonjobaker",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Liverbird_building_02.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Liverpool_Waterfront_from_Mersey_Ferry_-_scan01.jpg/1920px-Liverpool_Waterfront_from_Mersey_Ferry_-_scan01.jpg",
      "alt": "Liverpool waterfront from the Mersey Ferry",
      "author": "Rept0n1x",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Liverpool_Waterfront_from_Mersey_Ferry_-_scan01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Royal_Liver_Building_East_Clock_Tower_Liver_Bird.jpg/1920px-Royal_Liver_Building_East_Clock_Tower_Liver_Bird.jpg",
      "alt": "Royal Liver Building clock tower, Liverpool",
      "author": "Mmcdade",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Royal_Liver_Building_East_Clock_Tower_Liver_Bird.jpg"
    }
  ],
  "luton": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Luton%2C_St._Mary%27s_Church_-_geograph.org.uk_-_1712196.jpg/1920px-Luton%2C_St._Mary%27s_Church_-_geograph.org.uk_-_1712196.jpg",
      "alt": "St Mary's Church, Luton",
      "author": "Dr Neil Clifton",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Luton%2C_St._Mary%27s_Church_-_geograph.org.uk_-_1712196.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Luton_Hoo%2C_Bedfordshire%2C_England%2C_19_Sept._2010_-_Flickr_-_PhillipC_%281%29.jpg/1920px-Luton_Hoo%2C_Bedfordshire%2C_England%2C_19_Sept._2010_-_Flickr_-_PhillipC_%281%29.jpg",
      "alt": "Luton Hoo near Luton",
      "author": "Phillip Capper",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Luton_Hoo%2C_Bedfordshire%2C_England%2C_19_Sept._2010_-_Flickr_-_PhillipC_%281%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Luton_Hoo%2C_Bedfordshire%2C_England%2C_19_Sept._2010_-_Flickr_-_PhillipC_%282%29.jpg/1920px-Luton_Hoo%2C_Bedfordshire%2C_England%2C_19_Sept._2010_-_Flickr_-_PhillipC_%282%29.jpg",
      "alt": "Luton Hoo house and grounds",
      "author": "Phillip Capper",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Luton_Hoo%2C_Bedfordshire%2C_England%2C_19_Sept._2010_-_Flickr_-_PhillipC_%282%29.jpg"
    }
  ],
  "milton-keynes": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/MK%2C_Willen_Lake_-_panoramio.jpg/1920px-MK%2C_Willen_Lake_-_panoramio.jpg",
      "alt": "Willen Lake, Milton Keynes",
      "author": "stone40",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:MK%2C_Willen_Lake_-_panoramio.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pagoda_and_Venus_%2832136180221%29.jpg/1920px-Pagoda_and_Venus_%2832136180221%29.jpg",
      "alt": "Peace Pagoda at Willen, Milton Keynes",
      "author": "Brian Tomlinson",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Pagoda_and_Venus_%2832136180221%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Campbell_Park%2C_UK_-_panoramio_%285%29.jpg/1920px-Campbell_Park%2C_UK_-_panoramio_%285%29.jpg",
      "alt": "Campbell Park, Milton Keynes",
      "author": "Dmitrij M",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Campbell_Park%2C_UK_-_panoramio_%285%29.jpg"
    }
  ],
  "hull": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/At_Kingston_upon_Hull_2024_01.jpg/1920px-At_Kingston_upon_Hull_2024_01.jpg",
      "alt": "Kingston upon Hull",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:At_Kingston_upon_Hull_2024_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/At_Kingston_upon_Hull_2024_08.jpg/1920px-At_Kingston_upon_Hull_2024_08.jpg",
      "alt": "Kingston upon Hull",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:At_Kingston_upon_Hull_2024_08.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/At_Kingston_upon_Hull_2024_02.jpg/1920px-At_Kingston_upon_Hull_2024_02.jpg",
      "alt": "Kingston upon Hull",
      "author": "Mike Peel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:At_Kingston_upon_Hull_2024_02.jpg"
    }
  ],
  "newport": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Transporter_Bridge%2C_from_Coronation_Park.jpg/1920px-Transporter_Bridge%2C_from_Coronation_Park.jpg",
      "alt": "Newport Transporter Bridge from Coronation Park",
      "author": "WelshDave",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Transporter_Bridge%2C_from_Coronation_Park.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Newport_Transporter_Bridge_2013.JPG/1920px-Newport_Transporter_Bridge_2013.JPG",
      "alt": "Newport Transporter Bridge over the River Usk",
      "author": "Lewis Hulbert",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Newport_Transporter_Bridge_2013.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Tredegar_House_1_%2816984431737%29.jpg/1920px-Tredegar_House_1_%2816984431737%29.jpg",
      "alt": "Tredegar House, Newport",
      "author": "Tony Hisgett",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Tredegar_House_1_%2816984431737%29.jpg"
    }
  ],
  "northampton": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Northampton_Guildhall_-_geograph.org.uk_-_5363976.jpg/1920px-Northampton_Guildhall_-_geograph.org.uk_-_5363976.jpg",
      "alt": "Northampton Guildhall",
      "author": "Malcolm Neal",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Northampton_Guildhall_-_geograph.org.uk_-_5363976.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/DelapreAbbey.jpg/1920px-DelapreAbbey.jpg",
      "alt": "Delapré Abbey, Northampton",
      "author": "Brookie",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:DelapreAbbey.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/DelapreStableBlock.jpg/1920px-DelapreStableBlock.jpg",
      "alt": "Delapré Abbey stable block, Northampton",
      "author": "StJaBe",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:DelapreStableBlock.jpg"
    }
  ],
  "peterborough": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Guildhall%2C_Cathedral_Square%2C_Peterborough.jpg/1920px-Guildhall%2C_Cathedral_Square%2C_Peterborough.jpg",
      "alt": "Guildhall on Cathedral Square, Peterborough",
      "author": "Poliphilo",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Guildhall%2C_Cathedral_Square%2C_Peterborough.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Guild_Hall%2C_Peterborough_-_geograph.org.uk_-_5008780.jpg/1920px-Guild_Hall%2C_Peterborough_-_geograph.org.uk_-_5008780.jpg",
      "alt": "The Guildhall, Peterborough",
      "author": "John Winder",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Guild_Hall%2C_Peterborough_-_geograph.org.uk_-_5008780.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Peterborough_Guildhall_02.jpg/1920px-Peterborough_Guildhall_02.jpg",
      "alt": "Peterborough Guildhall",
      "author": "Immanuel Giel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Peterborough_Guildhall_02.jpg"
    }
  ],
  "portsmouth": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Portsmouth_waterfront_at_Spinnaker_Tower.jpg/1920px-Portsmouth_waterfront_at_Spinnaker_Tower.jpg",
      "alt": "Portsmouth waterfront and Spinnaker Tower",
      "author": "Michael D. Turnbull",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Portsmouth_waterfront_at_Spinnaker_Tower.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Old_Portsmouth.jpg/1920px-Old_Portsmouth.jpg",
      "alt": "Old Portsmouth",
      "author": "eNil",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Old_Portsmouth.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Portsmouth_Harbour_-_geograph.org.uk_-_6156203.jpg/1920px-Portsmouth_Harbour_-_geograph.org.uk_-_6156203.jpg",
      "alt": "Portsmouth Harbour",
      "author": "Peter Trimming",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Portsmouth_Harbour_-_geograph.org.uk_-_6156203.jpg"
    }
  ],
  "reading": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Forbury_Gardens%2C_Reading_-_Berkshire.jpg/1920px-Forbury_Gardens%2C_Reading_-_Berkshire.jpg",
      "alt": "Forbury Gardens, Reading",
      "author": "Flickr user brighton",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Forbury_Gardens%2C_Reading_-_Berkshire.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Raading_Abbey_Ruins_01.jpg/1920px-Raading_Abbey_Ruins_01.jpg",
      "alt": "Reading Abbey ruins",
      "author": "Rodw",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Raading_Abbey_Ruins_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Forbury_Gardens_2015-05-10_16.44.52.jpg/1920px-Forbury_Gardens_2015-05-10_16.44.52.jpg",
      "alt": "Forbury Gardens in spring, Reading",
      "author": "Chris j wood",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Forbury_Gardens_2015-05-10_16.44.52.jpg"
    }
  ],
  "sheffield": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Sheffield_Town_Hall_%2827475677653%29.jpg/1920px-Sheffield_Town_Hall_%2827475677653%29.jpg",
      "alt": "Sheffield Town Hall",
      "author": "Tim Green",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Sheffield_Town_Hall_%2827475677653%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sheffield_Winter_Gardens_%26_St._Paul%27s_Tower.jpg/1920px-Sheffield_Winter_Gardens_%26_St._Paul%27s_Tower.jpg",
      "alt": "Winter Garden and St Paul's Tower, Sheffield",
      "author": "Shanerounce",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Sheffield_Winter_Gardens_%26_St._Paul%27s_Tower.jpg"
    }
  ],
  "slough": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Salt_Hill_Park_rose_garden_-_geograph.org.uk_-_3157391.jpg/1920px-Salt_Hill_Park_rose_garden_-_geograph.org.uk_-_3157391.jpg",
      "alt": "Salt Hill Park rose garden, Slough",
      "author": "don cload",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Salt_Hill_Park_rose_garden_-_geograph.org.uk_-_3157391.jpg"
    }
  ],
  "southend": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Southend_Pier_Autumn_2007_-_crop.jpg/1920px-Southend_Pier_Autumn_2007_-_crop.jpg",
      "alt": "Southend Pier",
      "author": "Damian Dukarski",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Southend_Pier_Autumn_2007_-_crop.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Southend_Old_Pier_Head_-_geograph.org.uk_-_4782038.jpg/1920px-Southend_Old_Pier_Head_-_geograph.org.uk_-_4782038.jpg",
      "alt": "Southend Pier head",
      "author": "Chris Morgan",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Southend_Old_Pier_Head_-_geograph.org.uk_-_4782038.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/View_of_boats_moored_up_at_the_old_town_-_geograph.org.uk_-_4218048.jpg/1920px-View_of_boats_moored_up_at_the_old_town_-_geograph.org.uk_-_4218048.jpg",
      "alt": "Boats at Leigh-on-Sea old town, Southend",
      "author": "Robert Lamb",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_of_boats_moored_up_at_the_old_town_-_geograph.org.uk_-_4218048.jpg"
    }
  ],
  "worthing": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Worthing_Pier_Pavilion_Theatre.jpg/1920px-Worthing_Pier_Pavilion_Theatre.jpg",
      "alt": "Worthing Pier Pavilion",
      "author": "The wub",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Worthing_Pier_Pavilion_Theatre.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Eastward_view_along_Worthing_Seafront_%28April_2011%29_%282%29.jpg/1920px-Eastward_view_along_Worthing_Seafront_%28April_2011%29_%282%29.jpg",
      "alt": "Worthing seafront looking east",
      "author": "Hassocks5489",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Eastward_view_along_Worthing_Seafront_%28April_2011%29_%282%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Worthing_Seafront.jpg/1920px-Worthing_Seafront.jpg",
      "alt": "Worthing seafront",
      "author": "RoverTheBendInSussex",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Worthing_Seafront.jpg"
    }
  ],
  "wrexham": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/St_Giles_Church_Tree.jpg/1920px-St_Giles_Church_Tree.jpg",
      "alt": "St Giles' Church, Wrexham",
      "author": "WelshDave",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:St_Giles_Church_Tree.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Erddig%2C_Wrecsam_%28lansiwyd_y_dron_y_tu_allan_i%27r_eiddo%29_May_2023_18.jpg/1920px-Erddig%2C_Wrecsam_%28lansiwyd_y_dron_y_tu_allan_i%27r_eiddo%29_May_2023_18.jpg",
      "alt": "Erddig near Wrexham",
      "author": "Llywelyn2000",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Erddig%2C_Wrecsam_%28lansiwyd_y_dron_y_tu_allan_i%27r_eiddo%29_May_2023_18.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pontcysyllte_aqueduct_arp.jpg/1920px-Pontcysyllte_aqueduct_arp.jpg",
      "alt": "Pontcysyllte Aqueduct near Wrexham",
      "author": "Adrian Pingstone",
      "license": "Public domain",
      "licenseUrl": "",
      "page": "https://commons.wikimedia.org/wiki/File:Pontcysyllte_aqueduct_arp.jpg"
    }
  ],
  "county-hampshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/NewForestPonies_sunrise.jpg/1920px-NewForestPonies_sunrise.jpg",
      "alt": "New Forest ponies at sunrise, Hampshire",
      "author": "Joana Kruse",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:NewForestPonies_sunrise.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/View_from_Portsdown_Hill_-_geograph.org.uk_-_952681.jpg/1920px-View_from_Portsdown_Hill_-_geograph.org.uk_-_952681.jpg",
      "alt": "View from Portsdown Hill, Hampshire",
      "author": "Barry Shimmon",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_from_Portsdown_Hill_-_geograph.org.uk_-_952681.jpg"
    }
  ],
  "county-kent": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/View_of_the_Kent_countryside_from_Chartwell_-_geograph.org.uk_-_4378820.jpg/1920px-View_of_the_Kent_countryside_from_Chartwell_-_geograph.org.uk_-_4378820.jpg",
      "alt": "Kent countryside from Chartwell",
      "author": "David Hillas",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_of_the_Kent_countryside_from_Chartwell_-_geograph.org.uk_-_4378820.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Canterbury_Cathedral_%288636098050%29.jpg/1920px-Canterbury_Cathedral_%288636098050%29.jpg",
      "alt": "Canterbury Cathedral, Kent",
      "author": "John Fielding",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Canterbury_Cathedral_%288636098050%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kent_Countryside_-_panoramio_%284%29.jpg/1920px-Kent_Countryside_-_panoramio_%284%29.jpg",
      "alt": "Kent countryside",
      "author": "ogwen",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Kent_Countryside_-_panoramio_%284%29.jpg"
    }
  ],
  "county-surrey": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Box_Hill_-_geograph.org.uk_-_864037.jpg/1280px-Box_Hill_-_geograph.org.uk_-_864037.jpg",
      "alt": "Box Hill, Surrey",
      "author": "Barry Shimmon",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Box_Hill_-_geograph.org.uk_-_864037.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Norbury_Park_House_from_Box_Hill.jpg/1920px-Norbury_Park_House_from_Box_Hill.jpg",
      "alt": "View from Box Hill, Surrey",
      "author": "AndyScott",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Norbury_Park_House_from_Box_Hill.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Roothill_lane-Park_Pale_lane_-_geograph.org.uk_-_662276.jpg/1280px-Roothill_lane-Park_Pale_lane_-_geograph.org.uk_-_662276.jpg",
      "alt": "Country lane in the Surrey Hills",
      "author": "Barry Shimmon",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Roothill_lane-Park_Pale_lane_-_geograph.org.uk_-_662276.jpg"
    }
  ],
  "county-sussex": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Seven_Sisters_March_2017_01.jpg/1920px-Seven_Sisters_March_2017_01.jpg",
      "alt": "Seven Sisters cliffs, Sussex",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Seven_Sisters_March_2017_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Meads_April_2018_01.jpg/1920px-Meads_April_2018_01.jpg",
      "alt": "Meads, Eastbourne, Sussex",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Meads_April_2018_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Litlington_April_2018_01.jpg/1920px-Litlington_April_2018_01.jpg",
      "alt": "Litlington in the Cuckmere Valley, Sussex",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Litlington_April_2018_01.jpg"
    }
  ],
  "county-essex": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dedham_Vale_-_River_Stour.jpg/1920px-Dedham_Vale_-_River_Stour.jpg",
      "alt": "River Stour in Dedham Vale, Essex",
      "author": "Sumit Surai",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Dedham_Vale_-_River_Stour.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Essex_Countryside_-_geograph.org.uk_-_2176521.jpg/1920px-Essex_Countryside_-_geograph.org.uk_-_2176521.jpg",
      "alt": "Essex countryside",
      "author": "terry joyce",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Essex_Countryside_-_geograph.org.uk_-_2176521.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cmglee_Manningtree_River_Stour.jpg/1920px-Cmglee_Manningtree_River_Stour.jpg",
      "alt": "River Stour at Manningtree, Essex",
      "author": "Cmglee",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cmglee_Manningtree_River_Stour.jpg"
    }
  ],
  "county-hertfordshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/St_Albans_Cathedral_Exterior_from_west%2C_Herfordshire%2C_UK_-_Diliff.jpg/1920px-St_Albans_Cathedral_Exterior_from_west%2C_Herfordshire%2C_UK_-_Diliff.jpg",
      "alt": "St Albans Cathedral, Hertfordshire",
      "author": "Diliff",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:St_Albans_Cathedral_Exterior_from_west%2C_Herfordshire%2C_UK_-_Diliff.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Countryside-Hertfordshire-20050613-014.jpg/1920px-Countryside-Hertfordshire-20050613-014.jpg",
      "alt": "Hertfordshire countryside",
      "author": "Gary Houston",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Countryside-Hertfordshire-20050613-014.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GOC_Much_Hadham_063_Widford_%2814874324558%29.jpg/1920px-GOC_Much_Hadham_063_Widford_%2814874324558%29.jpg",
      "alt": "Widford, Hertfordshire",
      "author": "Peter O'Connor",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:GOC_Much_Hadham_063_Widford_%2814874324558%29.jpg"
    }
  ],
  "county-berkshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Windsor_Castle_Upper_Ward_Quadrangle_2_-_Nov_2006.jpg/1920px-Windsor_Castle_Upper_Ward_Quadrangle_2_-_Nov_2006.jpg",
      "alt": "Windsor Castle, Berkshire",
      "author": "Diliff",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Windsor_Castle_Upper_Ward_Quadrangle_2_-_Nov_2006.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Windsor_MMB_05_Castle.jpg/1920px-Windsor_MMB_05_Castle.jpg",
      "alt": "Windsor Castle, Berkshire",
      "author": "mattbuck",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Windsor_MMB_05_Castle.jpg"
    }
  ],
  "county-oxfordshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/New_Street%2C_Chipping_Norton_-_geograph.org.uk_-_6082502.jpg/1920px-New_Street%2C_Chipping_Norton_-_geograph.org.uk_-_6082502.jpg",
      "alt": "New Street, Chipping Norton, Oxfordshire",
      "author": "Des Blenkinsopp",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:New_Street%2C_Chipping_Norton_-_geograph.org.uk_-_6082502.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/West_Oxfordshire_%2C_Countryside_Scenery_-_geograph.org.uk_-_6113452.jpg/1920px-West_Oxfordshire_%2C_Countryside_Scenery_-_geograph.org.uk_-_6113452.jpg",
      "alt": "West Oxfordshire countryside",
      "author": "Lewis Clarke",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:West_Oxfordshire_%2C_Countryside_Scenery_-_geograph.org.uk_-_6113452.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/The_Ridgeway_National_Trail_ascending_Whitehorse_Hill_from_the_east.jpg/1920px-The_Ridgeway_National_Trail_ascending_Whitehorse_Hill_from_the_east.jpg",
      "alt": "The Ridgeway at White Horse Hill, Oxfordshire",
      "author": "JimChampion",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:The_Ridgeway_National_Trail_ascending_Whitehorse_Hill_from_the_east.jpg"
    }
  ],
  "county-buckinghamshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Marlow_Bridge_from_the_Thames_Path_-_geograph.org.uk_-_5309763.jpg/1920px-Marlow_Bridge_from_the_Thames_Path_-_geograph.org.uk_-_5309763.jpg",
      "alt": "Marlow Bridge on the Thames, Buckinghamshire",
      "author": "Robert Eva",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Marlow_Bridge_from_the_Thames_Path_-_geograph.org.uk_-_5309763.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Buckinghamshire_%2C_countryside_near_Abbey_Park_Farm_-_geograph.org.uk_-_8194701.jpg/1920px-Buckinghamshire_%2C_countryside_near_Abbey_Park_Farm_-_geograph.org.uk_-_8194701.jpg",
      "alt": "Buckinghamshire countryside",
      "author": "Jim Osley",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Buckinghamshire_%2C_countryside_near_Abbey_Park_Farm_-_geograph.org.uk_-_8194701.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/High_Street%2C_Marlow_-_geograph.org.uk_-_7363006.jpg/1280px-High_Street%2C_Marlow_-_geograph.org.uk_-_7363006.jpg",
      "alt": "High Street, Marlow, Buckinghamshire",
      "author": "David Howard",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:High_Street%2C_Marlow_-_geograph.org.uk_-_7363006.jpg"
    }
  ],
  "county-norfolk": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cromer_Pier_-_geograph.org.uk_-_6920053.jpg/1920px-Cromer_Pier_-_geograph.org.uk_-_6920053.jpg",
      "alt": "Cromer Pier, Norfolk",
      "author": "Chris Morgan",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cromer_Pier_-_geograph.org.uk_-_6920053.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Norfolk_Broads_-_Converted_HelterSkelter_%2823029458409%29.jpg/1920px-Norfolk_Broads_-_Converted_HelterSkelter_%2823029458409%29.jpg",
      "alt": "Norfolk Broads",
      "author": "Andrew Bone",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Norfolk_Broads_-_Converted_HelterSkelter_%2823029458409%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/East_beach%2C_Cromer_-_geograph.org.uk_-_7147067.jpg/1920px-East_beach%2C_Cromer_-_geograph.org.uk_-_7147067.jpg",
      "alt": "East beach, Cromer, Norfolk",
      "author": "Carroll Pierce",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:East_beach%2C_Cromer_-_geograph.org.uk_-_7147067.jpg"
    }
  ],
  "county-suffolk": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lavenham%2C_Suffolk_-_The_Swan_Hotel_-_geograph.org.uk_-_6403721.jpg/1280px-Lavenham%2C_Suffolk_-_The_Swan_Hotel_-_geograph.org.uk_-_6403721.jpg",
      "alt": "The Swan, Lavenham, Suffolk",
      "author": "Colin Park",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Lavenham%2C_Suffolk_-_The_Swan_Hotel_-_geograph.org.uk_-_6403721.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/The_beach_at_Aldeburgh_-_geograph.org.uk_-_4413376.jpg/1920px-The_beach_at_Aldeburgh_-_geograph.org.uk_-_4413376.jpg",
      "alt": "Aldeburgh beach, Suffolk",
      "author": "Jim Osley",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:The_beach_at_Aldeburgh_-_geograph.org.uk_-_4413376.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Snape_Maltings_on_the_River_Alde_in_Suffolk_-_Flickr_-_John_D_Fielding.jpg/1920px-Snape_Maltings_on_the_River_Alde_in_Suffolk_-_Flickr_-_John_D_Fielding.jpg",
      "alt": "Snape Maltings on the River Alde, Suffolk",
      "author": "John Fielding",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Snape_Maltings_on_the_River_Alde_in_Suffolk_-_Flickr_-_John_D_Fielding.jpg"
    }
  ],
  "county-yorkshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2014_Fields_Swaledale_Gunnerside.jpg/1920px-2014_Fields_Swaledale_Gunnerside.jpg",
      "alt": "Swaledale fields near Gunnerside, Yorkshire",
      "author": "Kreuzschnabel",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:2014_Fields_Swaledale_Gunnerside.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/2013_Surrender_Bridge_Healaugh_North_Yorkshire.jpg/1920px-2013_Surrender_Bridge_Healaugh_North_Yorkshire.jpg",
      "alt": "Surrender Bridge, Swaledale, Yorkshire",
      "author": "Kreuzschnabel",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:2013_Surrender_Bridge_Healaugh_North_Yorkshire.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Reeth_Bridge.jpg/1920px-Reeth_Bridge.jpg",
      "alt": "Reeth Bridge, Yorkshire Dales",
      "author": "Kreuzschnabel",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Reeth_Bridge.jpg"
    }
  ],
  "county-lancashire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pendle_Hill_-_view_from_Weets_Hill_-_Feb_2025.jpg/1920px-Pendle_Hill_-_view_from_Weets_Hill_-_Feb_2025.jpg",
      "alt": "Pendle Hill from Weets Hill, Lancashire",
      "author": "Dominic Nelson",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Pendle_Hill_-_view_from_Weets_Hill_-_Feb_2025.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pendle_Hill_01.JPG/1920px-Pendle_Hill_01.JPG",
      "alt": "Pendle Hill, Lancashire",
      "author": "Immanuel Giel",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Pendle_Hill_01.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hapton_Castle.jpg/1920px-Hapton_Castle.jpg",
      "alt": "Hapton Castle, Lancashire",
      "author": "Trappedinburnley",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Hapton_Castle.jpg"
    }
  ],
  "county-greater-manchester": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Manchester_skyline_from_above_Uppermill.jpg/1920px-Manchester_skyline_from_above_Uppermill.jpg",
      "alt": "Manchester skyline from above Uppermill",
      "author": "Rcsprinter123",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Manchester_skyline_from_above_Uppermill.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Salford_Quays_4_%286300326593%29.jpg/1920px-Salford_Quays_4_%286300326593%29.jpg",
      "alt": "Salford Quays, Greater Manchester",
      "author": "Tony Hisgett",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Salford_Quays_4_%286300326593%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Cranes_over_the_Manchester_Skyline%2C_geograph_5726997_by_Anthony_Parkes.jpg/1920px-Cranes_over_the_Manchester_Skyline%2C_geograph_5726997_by_Anthony_Parkes.jpg",
      "alt": "Manchester skyline, Greater Manchester",
      "author": "Anthony Parkes",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Cranes_over_the_Manchester_Skyline%2C_geograph_5726997_by_Anthony_Parkes.jpg"
    }
  ],
  "county-merseyside": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tall_buildings_on_Liverpool_Waterfront.jpg/1920px-Tall_buildings_on_Liverpool_Waterfront.jpg",
      "alt": "Liverpool waterfront, Merseyside",
      "author": "Rodhullandemu",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Tall_buildings_on_Liverpool_Waterfront.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Wallasey_and_Crosby_Beach_%285479%29.jpg/1920px-Wallasey_and_Crosby_Beach_%285479%29.jpg",
      "alt": "Crosby Beach, Merseyside",
      "author": "Nilfanion",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Wallasey_and_Crosby_Beach_%285479%29.jpg"
    }
  ],
  "county-west-midlands": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Coventry_Cathedral_2018.jpg/1920px-Coventry_Cathedral_2018.jpg",
      "alt": "Coventry Cathedral, West Midlands",
      "author": "DeFacto",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Coventry_Cathedral_2018.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Black_Country_Living_Museum%2C_August_2025_28.jpg/1920px-Black_Country_Living_Museum%2C_August_2025_28.jpg",
      "alt": "Black Country Living Museum, West Midlands",
      "author": "HJ Mitchell",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Black_Country_Living_Museum%2C_August_2025_28.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Coventry_skyline.jpg/1920px-Coventry_skyline.jpg",
      "alt": "Coventry skyline, West Midlands",
      "author": "Si (mintchociecream)",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Coventry_skyline.jpg"
    }
  ],
  "county-cheshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bridge_Street_and_the_Rows_at_Chester_-_geograph.org.uk_-_4385853.jpg/1920px-Bridge_Street_and_the_Rows_at_Chester_-_geograph.org.uk_-_4385853.jpg",
      "alt": "The Rows on Bridge Street, Chester, Cheshire",
      "author": "Jeff Buck",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bridge_Street_and_the_Rows_at_Chester_-_geograph.org.uk_-_4385853.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Alderley_Edge_%2817498592429%29.jpg/1920px-Alderley_Edge_%2817498592429%29.jpg",
      "alt": "Alderley Edge, Cheshire",
      "author": "Riik@mctr",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Alderley_Edge_%2817498592429%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mow_Cop_Castle%2C_Sep_2023.jpg/1920px-Mow_Cop_Castle%2C_Sep_2023.jpg",
      "alt": "Mow Cop Castle, Cheshire",
      "author": "Dominic Nelson",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Mow_Cop_Castle%2C_Sep_2023.jpg"
    }
  ],
  "county-devon": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Westcombe_beach_3.jpg/1920px-Westcombe_beach_3.jpg",
      "alt": "Westcombe beach, Devon",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Westcombe_beach_3.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/O_Brook.jpg/1920px-O_Brook.jpg",
      "alt": "Dartmoor stream, Devon",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:O_Brook.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Towards_Wembury_%26_Plymouth_2.jpg/1920px-Towards_Wembury_%26_Plymouth_2.jpg",
      "alt": "South Devon coast towards Wembury",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Towards_Wembury_%26_Plymouth_2.jpg"
    }
  ],
  "county-dorset": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Durdle_Door_Dorset_Sunset.jpg/1920px-Durdle_Door_Dorset_Sunset.jpg",
      "alt": "Durdle Door at sunset, Dorset",
      "author": "Saffron Blaze",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Durdle_Door_Dorset_Sunset.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Corfe_Castle_and_Greyhound_Inn_Dorset_England.jpg/1920px-Corfe_Castle_and_Greyhound_Inn_Dorset_England.jpg",
      "alt": "Corfe Castle village, Dorset",
      "author": "JimChampion",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Corfe_Castle_and_Greyhound_Inn_Dorset_England.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/West_Dorset_%2C_Countryside_Scenery_-_geograph.org.uk_-_3555414.jpg/1920px-West_Dorset_%2C_Countryside_Scenery_-_geograph.org.uk_-_3555414.jpg",
      "alt": "West Dorset countryside",
      "author": "Lewis Clarke",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:West_Dorset_%2C_Countryside_Scenery_-_geograph.org.uk_-_3555414.jpg"
    }
  ],
  "county-cornwall": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/N_Cornwall_coast_and_GCHQ_Bude.jpg/1920px-N_Cornwall_coast_and_GCHQ_Bude.jpg",
      "alt": "North Cornwall coast near Bude",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:N_Cornwall_coast_and_GCHQ_Bude.jpg"
    }
  ],
  "county-somerset": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/West_Somerset_%2C_Quantock_Hills_-_geograph.org.uk_-_6014548.jpg/1920px-West_Somerset_%2C_Quantock_Hills_-_geograph.org.uk_-_6014548.jpg",
      "alt": "Quantock Hills, Somerset",
      "author": "Lewis Clarke",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:West_Somerset_%2C_Quantock_Hills_-_geograph.org.uk_-_6014548.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/SomersetLevelsViewfromparrett.jpg/1280px-SomersetLevelsViewfromparrett.jpg",
      "alt": "Somerset Levels from the River Parrett",
      "author": "Celia Kozlowski",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:SomersetLevelsViewfromparrett.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/West_Somerset_%2C_Quantock_Hills_-_geograph.org.uk_-_6014544.jpg/1920px-West_Somerset_%2C_Quantock_Hills_-_geograph.org.uk_-_6014544.jpg",
      "alt": "Quantock Hills, Somerset",
      "author": "Lewis Clarke",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:West_Somerset_%2C_Quantock_Hills_-_geograph.org.uk_-_6014544.jpg"
    }
  ],
  "county-tyne-and-wear": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Tyne_Bridge%2C_16_September_2010_%281%29.jpg/1920px-Tyne_Bridge%2C_16_September_2010_%281%29.jpg",
      "alt": "Tyne Bridge, Tyne and Wear",
      "author": "James Cridland",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Tyne_Bridge%2C_16_September_2010_%281%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Newcastle_Gateshead_Quayside.jpg/1920px-Newcastle_Gateshead_Quayside.jpg",
      "alt": "Newcastle and Gateshead Quayside",
      "author": "Chris Thomson",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Newcastle_Gateshead_Quayside.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Quayside%2C_Newcastle_upon_Tyne.jpg/1920px-Quayside%2C_Newcastle_upon_Tyne.jpg",
      "alt": "Quayside, Newcastle upon Tyne",
      "author": "Tom Page",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Quayside%2C_Newcastle_upon_Tyne.jpg"
    }
  ],
  "region-london": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/London_-_London_Tower_Bridge_-_140806_171049.jpg/1920px-London_-_London_Tower_Bridge_-_140806_171049.jpg",
      "alt": "Tower Bridge, London",
      "author": "Barcex",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:London_-_London_Tower_Bridge_-_140806_171049.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Palace_of_Westminster_seen_from_the_north_bank_of_the_Thames%2C_London.jpg/1920px-Palace_of_Westminster_seen_from_the_north_bank_of_the_Thames%2C_London.jpg",
      "alt": "Palace of Westminster from the Thames, London",
      "author": "Christian David",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Palace_of_Westminster_seen_from_the_north_bank_of_the_Thames%2C_London.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/River_Thames_-_London%2C_England_2023-10-27_%2802%29.jpg/1920px-River_Thames_-_London%2C_England_2023-10-27_%2802%29.jpg",
      "alt": "The River Thames, London",
      "author": "Ryan Hodnett",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:River_Thames_-_London%2C_England_2023-10-27_%2802%29.jpg"
    }
  ],
  "region-north-west": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Glenridding%2C_Cumbria%2C_England_-_June_2009.jpg/1920px-Glenridding%2C_Cumbria%2C_England_-_June_2009.jpg",
      "alt": "Glenridding and Ullswater, Cumbria",
      "author": "Diliff",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Glenridding%2C_Cumbria%2C_England_-_June_2009.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Friars%27_Crag_Derwentwater_Lake_District_2022_01.jpg/1920px-Friars%27_Crag_Derwentwater_Lake_District_2022_01.jpg",
      "alt": "Friar's Crag on Derwentwater, Lake District",
      "author": "Julian Herzog",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Friars%27_Crag_Derwentwater_Lake_District_2022_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ullswater_MMB_09.jpg/1920px-Ullswater_MMB_09.jpg",
      "alt": "Ullswater, Lake District",
      "author": "mattbuck",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Ullswater_MMB_09.jpg"
    }
  ],
  "region-yorkshire": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2015_Ribblehead_Viaduct_1.jpg/1920px-2015_Ribblehead_Viaduct_1.jpg",
      "alt": "Ribblehead Viaduct, Yorkshire Dales",
      "author": "Kreuzschnabel",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:2015_Ribblehead_Viaduct_1.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2014_River_Swale.jpg/1920px-2014_River_Swale.jpg",
      "alt": "River Swale, Yorkshire Dales",
      "author": "Kreuzschnabel",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:2014_River_Swale.jpg"
    }
  ],
  "region-midlands": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Malvern_Hills_British_Fort.jpg/1920px-Malvern_Hills_British_Fort.jpg",
      "alt": "Malvern Hills",
      "author": "Saffron Blaze",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Malvern_Hills_British_Fort.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Howden_Dam_Upper_Derwent_Reservoir_2023_01.jpg/1920px-Howden_Dam_Upper_Derwent_Reservoir_2023_01.jpg",
      "alt": "Howden Dam in the Peak District",
      "author": "Julian Herzog",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Howden_Dam_Upper_Derwent_Reservoir_2023_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Malvern_Hills_AONB.jpg/1920px-Malvern_Hills_AONB.jpg",
      "alt": "Malvern Hills landscape",
      "author": "Saffron Blaze",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Malvern_Hills_AONB.jpg"
    }
  ],
  "region-south-east": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Seven_Sisters_9.jpg/1920px-Seven_Sisters_9.jpg",
      "alt": "Seven Sisters cliffs, East Sussex",
      "author": "kallerna",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Seven_Sisters_9.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Meads_April_2018_01.jpg/1920px-Meads_April_2018_01.jpg",
      "alt": "Meads, East Sussex",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Meads_April_2018_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Litlington_April_2018_01.jpg/1920px-Litlington_April_2018_01.jpg",
      "alt": "Litlington, East Sussex",
      "author": "Arild Vågen",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Litlington_April_2018_01.jpg"
    }
  ],
  "region-south-west": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Durdle_Door_Overview.jpg/1920px-Durdle_Door_Overview.jpg",
      "alt": "Durdle Door, Dorset",
      "author": "Saffron Blaze",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Durdle_Door_Overview.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Corndon_Tor-4.jpg/1920px-Corndon_Tor-4.jpg",
      "alt": "Dartmoor tors, Devon",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Corndon_Tor-4.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/N_Cornwall_coast_and_GCHQ_Bude.jpg/1920px-N_Cornwall_coast_and_GCHQ_Bude.jpg",
      "alt": "North Cornwall coast",
      "author": "Herbythyme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:N_Cornwall_coast_and_GCHQ_Bude.jpg"
    }
  ],
  "region-north-east": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Bamburgh_MMB_55_Bamburgh_Castle.jpg/1920px-Bamburgh_MMB_55_Bamburgh_Castle.jpg",
      "alt": "Bamburgh Castle, Northumberland",
      "author": "mattbuck",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bamburgh_MMB_55_Bamburgh_Castle.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bamburgh_MMB_43_Bamburgh_Castle.jpg/1920px-Bamburgh_MMB_43_Bamburgh_Castle.jpg",
      "alt": "Bamburgh Castle and beach, Northumberland",
      "author": "mattbuck",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bamburgh_MMB_43_Bamburgh_Castle.jpg"
    }
  ],
  "region-scotland": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Glencoe_Lochan_reflections_1_20211022.jpg/1920px-Glencoe_Lochan_reflections_1_20211022.jpg",
      "alt": "Lochan reflections in Glencoe, Scotland",
      "author": "Daniel Kraft",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Glencoe_Lochan_reflections_1_20211022.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/A_small_loch_in_the_saddle_between_Beinn_an_Dothaidh_and_Beinn_Dorain%2C_Scotland_01.jpg/1920px-A_small_loch_in_the_saddle_between_Beinn_an_Dothaidh_and_Beinn_Dorain%2C_Scotland_01.jpg",
      "alt": "Highland loch below Beinn Dorain, Scotland",
      "author": "Michal Klajban",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:A_small_loch_in_the_saddle_between_Beinn_an_Dothaidh_and_Beinn_Dorain%2C_Scotland_01.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/River_Orchy_landscape_20211022.jpg/1920px-River_Orchy_landscape_20211022.jpg",
      "alt": "River Orchy, Scottish Highlands",
      "author": "Daniel Kraft",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:River_Orchy_landscape_20211022.jpg"
    }
  ],
  "region-wales": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Bannau_Brycheiniog_Lake_and_Fields.jpg/1920px-Bannau_Brycheiniog_Lake_and_Fields.jpg",
      "alt": "Lake and fields in Bannau Brycheiniog, Wales",
      "author": "UserAlbert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Bannau_Brycheiniog_Lake_and_Fields.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Green_Bridge_of_Wales_1_-_Pembrokeshire_%282010%29.jpg/1280px-Green_Bridge_of_Wales_1_-_Pembrokeshire_%282010%29.jpg",
      "alt": "Green Bridge of Wales, Pembrokeshire",
      "author": "JKMMX",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Green_Bridge_of_Wales_1_-_Pembrokeshire_%282010%29.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/View_from_the_top_of_Pen_y_Fan%2C_Bannau_Brycheiniog.jpg/1920px-View_from_the_top_of_Pen_y_Fan%2C_Bannau_Brycheiniog.jpg",
      "alt": "View from Pen y Fan, Wales",
      "author": "Georgia119",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:View_from_the_top_of_Pen_y_Fan%2C_Bannau_Brycheiniog.jpg"
    }
  ],
  "region-northern-ireland": [
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Giant%27s_Causeway_%2814%29.JPG/1920px-Giant%27s_Causeway_%2814%29.JPG",
      "alt": "Giant's Causeway, Northern Ireland",
      "author": "Chmee2",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Giant%27s_Causeway_%2814%29.JPG"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/20180408_133652_Giants_Causeway.jpg/1920px-20180408_133652_Giants_Causeway.jpg",
      "alt": "Giant's Causeway coast, Northern Ireland",
      "author": "Bernard Ladenthin",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:20180408_133652_Giants_Causeway.jpg"
    },
    {
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Giant%E2%80%99s_Causeway_Shore_01.jpg/1920px-Giant%E2%80%99s_Causeway_Shore_01.jpg",
      "alt": "Giant's Causeway shoreline, Northern Ireland",
      "author": "XaetaRhythm",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "page": "https://commons.wikimedia.org/wiki/File:Giant%E2%80%99s_Causeway_Shore_01.jpg"
    }
  ]
};

/** Generic English countryside, used where no photo of the place is available. */
export const COUNTRYSIDE_IMAGES: LocationImage[] = [
  {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Oxfordshire_countryside_-_geograph.org.uk_-_1933340.jpg/1920px-Oxfordshire_countryside_-_geograph.org.uk_-_1933340.jpg",
    "alt": "Oxfordshire countryside",
    "author": "Michael Dibb",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
    "page": "https://commons.wikimedia.org/wiki/File:Oxfordshire_countryside_-_geograph.org.uk_-_1933340.jpg"
  },
  {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/West_Oxfordshire_%2C_Countryside_Scenery_-_geograph.org.uk_-_6113444.jpg/1920px-West_Oxfordshire_%2C_Countryside_Scenery_-_geograph.org.uk_-_6113444.jpg",
    "alt": "English countryside",
    "author": "Lewis Clarke",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
    "page": "https://commons.wikimedia.org/wiki/File:West_Oxfordshire_%2C_Countryside_Scenery_-_geograph.org.uk_-_6113444.jpg"
  },
  {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Kent_countryside_in_summer_-_geograph.org.uk_-_4565427.jpg/1920px-The_Kent_countryside_in_summer_-_geograph.org.uk_-_4565427.jpg",
    "alt": "English countryside in summer",
    "author": "Marathon",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
    "page": "https://commons.wikimedia.org/wiki/File:The_Kent_countryside_in_summer_-_geograph.org.uk_-_4565427.jpg"
  },
  {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kent_countryside_near_Hazelwood.jpg/1920px-Kent_countryside_near_Hazelwood.jpg",
    "alt": "Rolling English countryside",
    "author": "Amakuru",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "page": "https://commons.wikimedia.org/wiki/File:Kent_countryside_near_Hazelwood.jpg"
  }
];

/**
 * Photo `index` for a place, cycling through what is available; falls back to
 * generic countryside when there is no photo of that place.
 */
export function locationImage(key: string | undefined | null, index = 0): LocationImage {
  const list = (key && LOCATION_IMAGES[key]) || [];
  if (list.length) return list[index % list.length];
  return COUNTRYSIDE_IMAGES[index % COUNTRYSIDE_IMAGES.length];
}

/** Same as locationImage but only returns a photo of the place itself, never the fallback. */
export function placeImage(key: string | undefined | null, index = 0): LocationImage | undefined {
  const list = (key && LOCATION_IMAGES[key]) || [];
  return list.length ? list[index % list.length] : undefined;
}

export function countrysideImage(index = 0): LocationImage {
  return COUNTRYSIDE_IMAGES[index % COUNTRYSIDE_IMAGES.length];
}
