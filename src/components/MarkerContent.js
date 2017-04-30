import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import {statuses} from 'constants'

const { number, func, string } = PropTypes

const Content = ({ latitude, longitude, status, text, cb, date, _id }) => (
  <div className="marker-item-content">
    <span className="col-md-12">
      <span>Latitude: {latitude}</span><br/>
      <span>Longitude: {longitude}</span>
    </span>
    <span className="col-md-12">
      Date: {moment(date).format("MM-DD-YYYY")}
    </span>
    {status !== 3 ? <span
      className={`btn btn-raised btn-${statuses[status].style} offset-md-4`}
      onClick={cb}
    >
      {statuses[status].button}
    </span>: <Button bsStyle="success">{statuses[status].name}</Button>}
  </div>
);

Content.defaultProps = {
    cb: () => {},
}

Content.Proptypes = {
    cb: func,
    latitude: number,
    longitude: number,
    text: string,
    status: number
}

export default Content;
