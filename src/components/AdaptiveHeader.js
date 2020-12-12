import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// A simple component that shows the pathname of the current location
class Header extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location, history } = this.props

    const headerColor = location.pathname === '/' ? { background: 'white'} : { background: 'blue' }
    return (
  <div style={headerColor}>You are now at {location.pathname}</div>
  )
}
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const AdaptiveHeader = withRouter(Header)

export default AdaptiveHeader