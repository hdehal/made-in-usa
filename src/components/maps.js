import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer, Tooltip, AttributionControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { OpenStreetMapProvider } from 'leaflet-geosearch';

// Modularized component imports
import { item } from './stitchAuth';

/* Adapted from https://github.com/afzalsayed96/bubbles-map by Afzal Sayed  */
/* Map tiles proudly from Stamen Design in San Francisco https://stamen.com/maps/ */
/* Additional help from http://leaflet-extras.github.io/leaflet-providers/preview/ */

// Provider for leaflet-geosearch plugin
// const provider = new OpenStreetMapProvider();

// Convert "City, State" or "ZIP" to lat/long coordinates using leaflet-geosearch plugin 
/* provider
  .search({ query: 'Los Angeles, CA' })
  .then(function(result) { 
    // Result should look like this for Los Angeles:
    // 34.0536909,-118.2427666
    console.log(result[0].y + ',' + result[0].x);
  }); */

class Maps extends Component {

  // Initial state
  constructor(props) {
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
      .then(dataMaps => this.setState({ dataMaps }))

      // Error logging
      .catch(err => {
        console.warn("Error:", err);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    return (
      <div>
        <Map
          style={{ height: "480px", width: "100%", opacity: "0.9" }}
          zoom={4.25}
          center={[37.7687477, -99.6820275]}
          attributionControl={false}>
          <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
            attribution="Map by <a href='http://stamen.com' target='_blank'>Stamen Design</a> | Data &copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors"
          />

          <AttributionControl position="bottomright" prefix={false} />

          {this.state.dataMaps.map((dataItem, k) => {
            let { coordinates, company, url, loc } = dataItem;
            return (
              <CircleMarker
                key={k}
                center={[coordinates[0], coordinates[1]]}
                fillOpacity={0.5}
                stroke={true}>

                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span><a href={url}>{company}</a></span>
                  <span>{loc}</span>
                </Tooltip>
              </CircleMarker>);
          })
          }
        </Map>
      </div>
    );
  }
}

export default Maps;