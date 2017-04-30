import React, {Component} from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import {statuses} from 'constants'
import { getAddress } from 'Api';

const { number, func, string } = PropTypes

class Content extends Component {
  state={
    address:''
  }
  
  componentDidMount() {
    const { latitude, longitude } = this.props;
    getAddress(latitude,longitude)
      .then( r => r.json())
      .then( ({results}) => {
        if(results.length)
          this.setState({ address: results[0].formatted_address})
      })
  }
    render() {
      const { latitude, longitude, status, text, cb, date } = this.props;
      return (
        <div className="marker-item-content">
          <span className="col-md-12">
            <span>Latitude: {latitude}</span><br/>
            <span>Longitude: {longitude}</span>
          </span>
          <div role="separator" className="divider"></div>
          <span className="col-md-12">
            {this.state.address}
          </span>
          <div role="separator" className="divider"></div>
          <span className="col-md-12">
            Date: {moment(date).format("MM-DD-YYYY")}
          </span>
          <div role="separator" className="divider"></div>
          {status !== 3 ? <span
            className={`btn btn-raised btn-${statuses[status].style} offset-md-4`}
            onClick={cb}
          >
            {statuses[status].button}
          </span>: <Button bsStyle="success">{statuses[status].name}</Button>}
        </div>       
      )
    }
}

Content.defaultProps = {
    cb: () =>{},
}

Content.Proptypes = {
    cb: func,
    latitude: number,
    longitude: number,
    text: string,
    status: number
}

export default Content;
