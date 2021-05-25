import React from 'react'
import ArunBrand from '../img/typeface.svg'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class Header extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props
    var headerColor = new Object();
    var menuItemStyle = new Object();

    const white = {
        'background': 'white', 
    }

    const blue = {
        'background': '#065068', 
    }

    const green = {
        'background' : '#16411D'
    }

    const doughBlue = {
        'background' : '#096276'
    }

    const black = {
        'background': '#28282A', 
    }

    const blackFont = {
        'color': '#0a0a0a',
    }

    const whiteFont = {
        'color': '#ffffff',
    }

    var logoColor = 'white'

    if(location.pathname === '/'){
        headerColor = white
        menuItemStyle = blackFont
        logoColor = '#0a0a0a'
    }
    else if (location.pathname ==='/sp/pose' || location.pathname ==='/ph/studio' || location.pathname === '/ds/cashflow' ) {
        headerColor = black
        menuItemStyle = whiteFont
        logoColor = 'white'
    }
    else if (location.pathname ==='/sp/openpassport' ) {
        headerColor = green
        menuItemStyle = whiteFont
        logoColor = 'white'
    }
    else if (location.pathname ==='/dough/onboarding' ) {
        headerColor = doughBlue
        menuItemStyle = whiteFont
        logoColor = 'white'
    }
    else {
        headerColor = white
        menuItemStyle = blackFont
        logoColor = '#0a0a0a'
    }

    
    return (
            <div className="container-fluid" style={headerColor}>
                <div className="row navbar">
                 <div className="col-md-10 offset-md-1">
                     <div className='row align-items-center justify-content-center'>
                         <div className="col-lg-4 col-md-3 col-12 logo">
                            <img src={ArunBrand} height='75px' alt='logo'/>

                         </div>
                         <div className="col-lg-6 offset-lg-2 col-md-9 col-12" style={{textAlign: 'right'}}>
                             <div className="row links" >
                                 <div className="col-4">
                                     <Link to="/" style={menuItemStyle}> Home </Link>
                                 </div>
                                 <div className="col-4">
                                     <Link to="/Work" style={menuItemStyle}> Industry Works </Link>
                                 </div>
                                 {/* <div className="col-3">
                                     <a href='https://www.notion.so/Working-Notes-23bc6f4185204c93bceec77708e089f3' style={menuItemStyle}> Working Notes </a>
                                 </div> */}
                                 <div className="col-4">
                                     <Link to="/about" style={menuItemStyle}> About </Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
             </div>
  )
}
}

const Navbar = withRouter(Header)

export default Navbar