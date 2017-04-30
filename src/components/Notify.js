import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import moment from 'moment'
import { statuses } from 'constants'

export default ({ date, latitude, longitude, status }) => (
  <Panel className="notfy-item">
    <span>
      <span>{latitude}</span><br />
      <span>{longitude}</span>
    </span>
    <span>
      <Button bsStyle={statuses[status].style}>
        {statuses[status].name}
      </Button>
    </span>
    <span>
      {moment(date).format("MM-DD-YYYY")}
    </span>
  </Panel>
)
