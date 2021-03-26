import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

//Components
import Navbar from './components/navbars/Navbar';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/AboutMe';

// Adding icons to library makes it so I don't need to import icons in every file
library.add(faLanguage, faReact);

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
