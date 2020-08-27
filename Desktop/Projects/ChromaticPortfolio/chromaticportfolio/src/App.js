import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../src/css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
    </Router>
  );
}

export default App;
