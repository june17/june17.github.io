import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
  withRouter
} from 'react-router-dom'
import Play from './components/Play'
import Work from './components/Work'
import About from './components/About'
import DSdock from './components/ds/Dock'

import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group'

function App() {
  return (
      <Router>
        <Route render={({location}) => (
          <React.Fragment>
            <Navbar />
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={600}>
                <Switch location = {location}>
                  <Route exact path='/' component={Work} />
                  <Route path='/play' component={Play}/>
                  <Route path='/about' component={About} />
                  <Route path='/dreamspring/dock' component={DSdock} />
              </Switch>
            </CSSTransition>
            </TransitionGroup>
            <Footer />
          </React.Fragment>
        )} />   
      </Router>
  );
}

export default App;
