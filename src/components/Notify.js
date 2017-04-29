import React from 'react'

export default ({ latitude, longitude, status }) => (
  <div className="notfy-item">
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
  </div>
)
