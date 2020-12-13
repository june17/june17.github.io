import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Play from './components/Play'
import Work from './components/Work'
import About from './components/About'
import DSdock from './components/ds/Dock'
import Home from './components/Home'
import SPPose from './components/studentprojects/Poser'
import ScrollToTop from './components/ScrollToTop'
import PHStudio from './components/promohunt/PHStudio'

import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group'

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Route render={({location}) => (
          <React.Fragment>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/work' component={Work} />
            <Route path='/play' component={Play}/>
            <Route path='/about' component={About} />
            <Route path='/dreamspring/dock' component={DSdock} />
            <Route path='/sp/pose' component={SPPose} />
            <Route path='/ph/studio' component={PHStudio}/>
            <Footer />
          </React.Fragment>
        )} />   
      </Router>
  );
}

export default App;
