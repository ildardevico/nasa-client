import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GoogleMapReact from 'google-map-react';
import * as actions from 'actions'
import './index.scss'

const AnyReactComponent = ({ text }) => (
  <div className='svgHolder'>
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="45" stroke="#81d3f9" strokeWidth="1" fill="#b2e6ff" fillOpacity="0.35"/>
    </svg>
    <svg className='svgPin' height="50" width="50" viewBox="-16 -18 64 64">
      <path fill="#d53" stroke="black" strokeWidth="1" d="M0,47 Q0,28 10,15 A15,15 0,1,0 -10,15 Q0,28 0,47"/>
    </svg>
  </div>
);

class Main extends Component {

  state={
    center:{
      lat:  0,
      lng: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    const { coords } = nextProps.position;
    if(coords) {
      this.setMyposition(coords);
    }
  }

  setMyposition = coords => {
    const { latitude: lat, longitude: lng  } = coords;
    this.setState({ center: { lat, lng }})
  }

  onChange = data => this.setState(data);

  componentDidMount() {
    this.props.actions.getPosition();
  }

  render() {
    const { center } = this.state;
    const { position } = this.props;

   return (
    <div >
    <div className='mapHolder'>
     <GoogleMapReact
        apiKey='AIzaSyCD6k__pqj9usjtMuq7JXJ_HT9y_UW5hwk'
        onChange={this.onChange}
        center={center}
        defaultZoom={15}
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text={'We are here'}
        />
      </GoogleMapReact>
      </div>
      <div className='btnHolder'>
        <span onClick={ () => this.setMyposition(position.coords)} className="btn btn-raised btn-success">My Location</span>
      </div>
    </div>
   )
  }
}

export default connect(
  ({ position }) => ({ position }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Main)