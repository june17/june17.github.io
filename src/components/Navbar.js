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

    const black = {
        'background': '#28282A', 
    }

    const blackFont = {
        'color': '#0a0a0a'
    }

    const whiteFont = {
        'color': '#ffffff'
    }

    if(location.pathname === '/'){
        headerColor = white
        menuItemStyle = blackFont;
    }
    else if (location.pathname ==='/sp/pose' || location.pathname ==='/ph/studio'  ) {
        headerColor = black;
        menuItemStyle = whiteFont;
    }
    else {
        headerColor = white
        menuItemStyle = blackFont;
    }

    
    return (
            <div className="container-fluid" style={headerColor}>
                <div className="row navbar">
                 <div className="col-md-10 offset-md-1">
                     <div className='row align-items-center justify-content-center'>
                         <div className="col-md-4 col-12">
                             <img src={ArunBrand} alt="Arunraj" style={{width: '150px'}} />
                         </div>
                         <div className="col-md-4 offset-md-4 col-12" style={{textAlign: 'right'}}>
                             <div className="row" >
                                 <div className="col-4">
                                     <Link to="/" style={menuItemStyle}> Home </Link>
                                 </div>
                                 <div className="col-4">
                                     <Link to="/Work" style={menuItemStyle}> Industry works </Link>
                                 </div>
                                 <div className="col-3">
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