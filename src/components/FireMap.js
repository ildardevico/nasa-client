import React from 'react'

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Circle,
  Marker,
} from "react-google-maps";

const Holder = (<div style={{ height: `100%` }} />);

const PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    center={props.center}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}

    {props.center && (
      <InfoWindow position={props.center}>
        <div>{props.content}</div>
      </InfoWindow>
    )}
    {props.center && (
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `red`,
          fillOpacity: 0.20,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
    )}
  </GoogleMap>
));

PopUpInfoWindowExampleGoogleMap.defaultProps={
    containerElement: Holder,
    mapElement: Holder
}

export default PopUpInfoWindowExampleGoogleMap;