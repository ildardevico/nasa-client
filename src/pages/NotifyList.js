import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notify from 'components/Notify';

class NofifyList extends Component {
  render() {
    return (
      <div className="notify-list">
        {this.props.notifies.map(notify => <Notify />)}
      </div>
    )
  }
}

const mapStateToProps = ({ notifies }) => ({ notifies })
export default connect(
  mapStateToProps
)
