import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notify from 'components/Notify'

class NotifyList extends Component {
  render() {
    return (
      <div className="notify-list">
        {Object.keys(this.props.notifies).map(key => <Notify key={key} {...this.props.notifies[key]} />)}
      </div>
    )
  }
}

export default NotifyList
