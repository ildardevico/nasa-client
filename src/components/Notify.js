import React from 'react'
import { Panel } from 'react-bootstrap'

export default ({ latitude, longitude, status }) => (
  <Panel className="notfy-item">
    <span className="col-md-4">
      <span>{latitude}</span>
      <span>{longitude}</span>
    </span>
    <span className="col-md-4">
      {status}
    </span>
    <span className="col-md-4">
      Photo
    </span>
  </Panel>
)
