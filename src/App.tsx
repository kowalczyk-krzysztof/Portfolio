import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//Components
import Navbar from './components/navbars/Navbar';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/AboutMe';

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
