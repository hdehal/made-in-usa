import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer, Tooltip, AttributionControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import data from "./mapsData"

// Modularized component imports
import { item } from './stitchAuth';

/* Adapted from https://github.com/afzalsayed96/bubbles-map by Afzal Sayed  */
/* Map tiles proudly from Stamen Design in San Francisco https://stamen.com/maps/ */
/* Additional help from http://leaflet-extras.github.io/leaflet-providers/preview/ */

// Provider for leaflet-geosearch plugin
const provider = new OpenStreetMapProvider();

// Convert "City, State" or "ZIP" to lat/long coordinates using leaflet-geosearch plugin 
provider
  .search({ query: 'Los Angeles, CA' })
  .then(function(result) { 
    // Result should look like this for Los Angeles:
    // 34.0536909,-118.2427666
    console.log(result[0].y + ',' + result[0].x);
  });

class App extends Component {

        // Initial state
        constructor(props){
            super(props);
    
            this.state = {
              dataMaps: []
            }
          }
      
          // Find database documents
          async getData() {  
            (await item())
            .find({"isVerified":true})
              .toArray()
              .then(dataMaps => this.setState({dataMaps}))
      
              // Error logging
              .catch(err => {
                console.warn("Error:", err);
              });
          }
      
          componentDidMount(){
            this.getData();
          }

          // Wait for state to update before we grab the data
          componentDidUpdate() {
            // Array of "company" and "url" only
            var newArray = this.state.dataMaps.map(({_id, gender, loc, isVerified, tags, ...keepAttrs}) => keepAttrs)
            console.log(newArray);

            // Array of "loc" only
            var newArrayCityState = this.state.dataMaps.map(({_id, company, url, gender, isVerified, tags, ...keepAttrs}) => keepAttrs)
            const cityState = newArrayCityState.map(({ loc }) => [loc]);
            console.log(cityState);

            // Sequential for loop 
            var arrayLength = cityState.length;
            for (var i = 0; i < arrayLength; i++) {
                console.log(cityState[i]);

                // Typical search query should look like this:
                // .search({ query: 'cayucos, ca' })
                provider
                .search({ query: cityState[i] })

                .then(function(result) { 
                    // do something with result;
                    console.log(result[0].y + ',' + result[0].x);
                });

            }
          }

  render() {
    var centerLat = (data.minLat + data.maxLat) / 2;
    var distanceLat = data.maxLat - data.minLat;
    var bufferLat = distanceLat * 0.05;
    var centerLong = (data.minLong + data.maxLong) / 2;
    var distanceLong = data.maxLong - data.minLong;
    var bufferLong = distanceLong * 0.05;
    return (
      <div>
        <Map
          style={{ height: "480px", width: "100%", opacity: "0.9" }}
          zoom={1}
          center={[centerLat, centerLong]}
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]}
          attributionControl={false}>
          <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png" 
          attribution="Map by <a href='http://stamen.com' target='_blank'>Stamen Design</a> | Data &copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors"
          />

        <AttributionControl position="bottomright" prefix={false} />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}>
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                    {/* Fix Unexpected string concatenation of literals  no-useless-concat error */}
                    <span>{city["name"] + ": " + "Population" + " " + city["population"]}</span>
                    {/* <span>`${city["name"]|"Population"|city["population"]}`</span> */}
                </Tooltip>
              </CircleMarker>)
          })
          }
        </Map>
      </div>
    );
  }
}

export default App;