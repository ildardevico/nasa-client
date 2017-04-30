import React from 'react'
import PropTypes from 'prop-types'
import {statuses} from 'constants'

const { number, func, string } = PropTypes

const Content = ({ latitude, longitude, status, text, cb }) => (
  <div className="marker-item-content">
    <span className="col-md-12">
      <span>Coordinates:</span>
      <span>{latitude}-</span>
      <span>{longitude}</span>
    </span>
    <span className="col-md-12">
      {text}
    </span>
    <span className={`btn btn-raised btn-${statuses[status]} offset-md-4`} onClick={cb}>
        {statuses[status]}
    </span>
  </div>
);

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