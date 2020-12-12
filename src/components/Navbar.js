import React from 'react'
import ArunBrand from '../img/typeface.svg'
import styles from '../css/navbar.module.css'
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
    const { match, location, history } = this.props
    const headerColor = location.pathname === '/' ? { background: 'white', 'color': '#ffffff'} : { background: '#065068', 'color': '#ffffff'}
    const menuItemStyle = location.pathname === '/' ? {color: '#0a0a0a'}:{color: 'white'}
    
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
                                 <div className="col-3">
                                     <Link to="/" style={menuItemStyle}> Home </Link>
                                 </div>
                                 <div className="col-3">
                                     <Link to="/" style={menuItemStyle}> Work </Link>
                                 </div>
                                 <div className="col-3">
                                     <Link to="/play" style={menuItemStyle}> Play </Link>
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