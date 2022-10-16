import React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

import { InfoCards } from "../utils/types";

const Map = ({ searchResults }) => {
  const [selectedMarker, setSelectedMarker] = React.useState({});

  const coordonates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));
  const center = getCenter(coordonates);
  return (
    <div className="w-full h-full">
      <MapGL
        initialViewState={{
          longitude: center ? center.longitude : 100,
          latitude: center ? center.latitude : 100,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/washtakzo/cl8x4tm94001615rm6rlnmz76"
        mapboxAccessToken={process.env.mapbox_key}
      >
        {searchResults.map((item) => (
          <div key={item.img}>
            <Marker
              longitude={item.long}
              latitude={item.lat}
              onClick={() => {
                setSelectedMarker(item);
              }}
            >
              <p className="cursor-pointer text-2xl animate-bounce">📌</p>
            </Marker>
            {item.long === selectedMarker.long ? (
              <Popup
                longitude={item.long}
                latitude={item.lat}
                closeOnClick={false}
                onClose={() => {
                  setSelectedMarker({});
                }}
              >
                {selectedMarker.title}
              </Popup>
            ) : null}
          </div>
        ))}
      </MapGL>
    </div>
  );
};

export default Map;
