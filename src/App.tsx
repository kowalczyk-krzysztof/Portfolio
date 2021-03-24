import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import TopNavbar from './components/navbars/TopNavbar';
import BottomNavbar from './components/navbars/BottomNavbar';
import AboutMe from './components/aboutme/AboutMe';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route exact path="/">
            <AboutMe />
          </Route>
        </Switch>
        <BottomNavbar />
      </div>
    </Router>
  );
};

export default App;
