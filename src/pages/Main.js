import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Circle,
  Marker,
} from "react-google-maps";
import raf from "raf";
import './index.scss';

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
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
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

/*
 *
 *  Add <script src="https://maps.googleapis.com/maps/api/js"></script>
 *  to your HTML to provide google.maps reference
 *
 *  @author: @chiwoojo
 */
export default class PopUpInfoWindowExample extends Component {

  state = {
    center: null,
    content: null,
    radius: 6000,
    // array of objects of markers
    markers: [
      {
        position: new google.maps.LatLng(48.4, 35.03),
        showInfo: false,
        infoContent: (
          <div>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'/>
            'some message 1'
          </div>
        ),
      },
      {
        position: new google.maps.LatLng(48.5, 35.06),
        showInfo: false,
        infoContent: (
          <div>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png'/>
            'some message 2'
          </div>
        ),
      },
    ],
  };

  isUnmounted = false;

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick = (targetMarker) => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose = (targetMarker) => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  componentDidMount() {
    const tick = () => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });

      if (this.state.radius > 200) {
        raf(tick);
      }
    };
    navigator.geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      console.log({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Location found using HTML5.`,
      });

      raf(tick);
    }, (reason) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: 60,
          lng: 105,
        },
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    return (
      <div className='mapHolder'>
      <PopUpInfoWindowExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        center={this.state.center}
        content={this.state.content}
        radius={this.state.radius}
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
      </div>
    );
  }
}