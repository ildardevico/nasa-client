import React, { Component } from "react"
import raf from "raf"
import {FireMap, MarkerContent} from 'components'
import NotifyList from './NotifyList'
import './index.scss'

export default class PopUpInfoWindowExample extends Component {

  state = {
    center: null,
    content: null,
    radius: 6000,
    markers: [
      {
        position: new google.maps.LatLng(48.4, 35.03),
        showInfo: false,
        infoContent: <MarkerContent latitude={48.5} longitude={35.06} status={1}/>,
      },
      {
        position: new google.maps.LatLng(48.5, 35.06),
        showInfo: false,
        infoContent: <MarkerContent latitude={48.5} longitude={35.06} status={1}/>,
      },
    ],
  };

  isUnmounted = false;

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick = (targetMarker, showInfo) => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo,
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
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Current fire station.`,
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
        <NotifyList />
        <FireMap
          center={this.state.center}
          content={this.state.content}
          radius={this.state.radius}
          markers={this.state.markers}
          onMarkerClick={e=>this.handleMarkerClick(e,true)}
          onMarkerClose={e=>this.handleMarkerClick(e,false)}
        />
      </div>
    );
  }
}
