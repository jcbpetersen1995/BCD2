import React from 'react';
import '../src/css/index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DAMediaWelcome from './components/DAMediaWelcome';



function App() {
  return (
    <Router>
      <Route exact path={process.env.PUBLIC_URL + "/home"} component={LandingPage} />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={DAMediaWelcome} />
    </Router>
  );
}

export default App;
