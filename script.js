var map = L.map('mapid').setView([38.6270,-90.1994], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Resturant": "Sauce on the Side"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2565586566925,
          38.627172226771336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Resturant": "Seoul Taco"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24987995624542,
          38.628341454584714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Resturant": "U-City Grill"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30848622322081,
          38.65663598042729
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Resturant": "Charlie Gitto's"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27347803115843,
          38.61791831050015
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Resturant": "801 Chophouse"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.33247590065001,
          38.64892763595949
        ]
      }
    }
  ]
};

var parks = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Baseball Fields": "Yes",
        "Name": "Forest"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30426979064941,
              38.6326955080123
            ],
            [
              -90.26487350463867,
              38.628940728833264
            ],
            [
              -90.2665901184082,
              38.631689782871504
            ],
            [
              -90.26693344116211,
              38.63457282385875
            ],
            [
              -90.26530265808105,
              38.64389162826271
            ],
            [
              -90.3006649017334,
              38.647377488268724
            ],
            [
              -90.30289649963379,
              38.64067376082387
            ],
            [
              -90.30426979064941,
              38.6326955080123
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Baseball Fields": "No",
        "Name": "Tower Grove"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26907920837402,
              38.6052006101789
            ],
            [
              -90.2677059173584,
              38.60540183063526
            ],
            [
              -90.24272918701172,
              38.602987147919194
            ],
            [
              -90.24187088012695,
              38.60714571762158
            ],
            [
              -90.26813507080078,
              38.60969439928821
            ],
            [
              -90.26907920837402,
              38.6052006101789
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Baseball Fields": "No",
        "Name": "Lafayette Square"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.21854639053343,
              38.614640595482015
            ],
            [
              -90.21436214447021,
              38.6141208417473
            ],
            [
              -90.2135682106018,
              38.617406963286136
            ],
            [
              -90.2178168296814,
              38.617893162361746
            ],
            [
              -90.21854639053343,
              38.614640595482015
            ]
          ]
        ]
      }
    }
  ]
}; 

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "River Name": "Mississippi River"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.274658203125,
            38.486382199392224
          ],
          [
            -90.263671875,
            38.52453288748686
          ],
          [
            -90.24856567382812,
            38.54762840618704
          ],
          [
            -90.22796630859375,
            38.57125335379479
          ],
          [
            -90.21148681640625,
            38.58145263504284
          ],
          [
            -90.19363403320312,
            38.59755381474309
          ],
          [
            -90.18058776855469,
            38.628672522795796
          ],
          [
            -90.17852783203125,
            38.64100896209024
          ],
          [
            -90.18539428710938,
            38.66835610151506
          ],
          [
            -90.20187377929688,
            38.6897975322717
          ],
          [
            -90.20942687988281,
            38.703731017420004
          ],
          [
            -90.21286010742188,
            38.716054530027485
          ],
          [
            -90.21011352539062,
            38.7283759182398
          ],
          [
            -90.19844055175781,
            38.73641046158445
          ],
          [
            -90.18745422363281,
            38.74497964505743
          ],
          [
            -90.1764678955078,
            38.75408327579141
          ],
          [
            -90.17372131347656,
            38.762114927054405
          ],
          [
            -90.16960144042969,
            38.76853959726423
          ],
          [
            -90.16685485839844,
            38.77068102544212
          ],
          [
            -90.1593017578125,
            38.77603431465469
          ],
          [
            -90.15449523925781,
            38.77871080859691
          ],
          [
            -90.14213562011719,
            38.7872749142083
          ],
          [
            -90.13458251953125,
            38.79102138696157
          ],
          [
            -90.12702941894531,
            38.79476766282312
          ],
          [
            -90.12222290039062,
            38.799584013897054
          ],
          [
            -90.12016296386719,
            38.80440003947544
          ],
          [
            -90.11604309082031,
            38.81296105899589
          ],
          [
            -90.11329650878905,
            38.819916129801314
          ],
          [
            -90.10986328125,
            38.82580065919523
          ],
          [
            -90.11054992675781,
            38.832219591146746
          ],
          [
            -90.11054992675781,
            38.8407772667165
          ],
          [
            -90.11054992675781,
            38.84826438869913
          ]
        ]
      }
    }
  ]
};

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "party": "Democrat"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -114.60937499999999,
              35.137879119634185
            ],
            [
              -113.90625,
              36.421282443649496
            ],
            [
              -113.9501953125,
              42.16340342422401
            ],
            [
              -119.970703125,
              42.09822241118974
            ],
            [
              -119.970703125,
              38.85682013474361
            ],
            [
              -114.697265625,
              35.35321610123823
            ],
            [
              -114.60937499999999,
              35.137879119634185
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "party": "Republican"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -114.06005859375,
              41.983994270935625
            ],
            [
              -113.51074218749999,
              40.613952441166596
            ],
            [
              -113.73046875,
              36.98500309285596
            ],
            [
              -108.96240234375,
              37.142803443716836
            ],
            [
              -109.248046875,
              40.91351257612758
            ],
            [
              -111.005859375,
              40.94671366508002
            ],
            [
              -110.9619140625,
              41.918628865183045
            ],
            [
              -114.06005859375,
              41.983994270935625
            ]
          ]
        ]
      }
    }
  ]
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(parks, {
    style: function(feature) {
        switch (feature.properties["Baseball Fields"]) {
            case 'Yes': return {color: "#49A078"};
            case 'No':   return {color: "#E9B44C"};
        }
    }
}).addTo(map);
