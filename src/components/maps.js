import React, { Component } from 'react';
import { item } from './stitchAuth';
import { Map, CircleMarker, TileLayer, Tooltip, AttributionControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-markercluster';
require('react-leaflet-markercluster/dist/styles.min.css');

/* Adapted from https://github.com/afzalsayed96/bubbles-map by Afzal Sayed  */
/* Map tiles proudly from Stamen Design in San Francisco https://stamen.com/maps/ */
/* Additional help from http://leaflet-extras.github.io/leaflet-providers/preview/ */
/* Cluster functionality from https://www.npmjs.com/package/react-leaflet-markercluster */

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
      .find({ "isVerified": true })
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
          maxZoom={20}
          center={[37.7687477, -99.6820275]}
          attributionControl={false}>
          <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
            attribution="Map by <a href='http://stamen.com' target='_blank'>Stamen Design</a> | &copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors"
          />

          <AttributionControl position="bottomright" prefix={false} />

          <MarkerClusterGroup
            spiderfyDistanceMultiplier={1}
            showCoverageOnHover={false}
          >
            {this.state.dataMaps.map((dataItem, k) => {
              let { coordinates, company, url, loc } = dataItem;
              return (
                <CircleMarker
                  key={k}
                  center={[coordinates[0], coordinates[1]]}
                  position={[coordinates[0], coordinates[1]]}
                >
                  <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                    <span><a href={url}>{company}</a></span>
                    <span>{loc}</span>
                  </Tooltip>
                </CircleMarker>);
            })}
          </MarkerClusterGroup>

        </Map>

      </div>
    );
  }
}

export default Maps;