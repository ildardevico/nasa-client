import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import raf from "raf"
import {FireMap, MarkerContent} from 'components'
import * as actions from 'actions'
import NotifyList from './NotifyList'
import './index.scss'

class Main extends Component {

  state = {
    center: null,
    content: null,
    radius: 6000,
    markers: [],
  };

  componentWillReceiveProps (nextProps) {
    if(nextProps.notifies !== this.props.notifies) {
      const markers = this.getMarks(nextProps.notifies);
      this.setState({ markers })
    }
    if(nextProps.position !== this.props.position) {
      const {latitude: lat, longitude: lng} = nextProps.position.coords;
      this.setState({
          center: { lat, lng },
          content: `Current fire station.`
      });
    }
  }

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

  getMarks = n => {
    const { approve, resolve } = this.props.actions
    return Object.keys(n).map(key => ({
        position: new google.maps.LatLng(n[key].latitude, n[key].longitude),
        showInfo: false,
        infoContent: <MarkerContent
          cb={n[key].status === 1 ? () => approve({ id: n[key]._id }): () => resolve({ id: n[key]._id }) }
          {...n[key]}
          />
      })
    );
  }

  componentDidMount() {
    this.props.actions.getPosition();
    const tick = () => {
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });
      if (this.state.radius > 200) {
        raf(tick);
      }
    };
    raf(tick);
  }

  handleMapClick = (event) => {
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();
    this.props.actions.setNotify({latitude,longitude});
  }

  render() {
    return (
      <div className='mapHolder'>
        <NotifyList notifies={this.props.notifies} />
          <FireMap
            center={this.state.center}
            content={this.state.content}
            radius={this.state.radius}
            onMapClick={this.handleMapClick}
            markers={this.state.markers}
            onMarkerClick={e=>this.handleMarkerClick(e,true)}
            onMarkerClose={e=>this.handleMarkerClick(e,false)}
          />
      </div>
    );
  }
}

export default connect(
  ({ position, notifies }) => ({ position, notifies }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Main)
