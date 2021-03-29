import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faLanguage,
  faBars,
  faCircle,
  faTimes,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Homegapage from './components/homepage/Homepage';

import { themeSelector } from './features/themetoggle/themeToggleSlice';
import { GlobalStyle } from './createGlobalStyle';
// Adding icons to library makes it so I don't need to import them in every file
library.add(
  faLanguage,
  faBars,
  faCircle,
  faReact,
  faTimes,
  faGithub,
  faEnvelope
);

const App = (): JSX.Element => {
  // Assigning a theme based on store
  const theme = useSelector(themeSelector);

  /* For a general path (eg. when someone enters an invalid route like /foo ) you need to do a <Router path="/">
     This can't be an exact path. All exact paths have to be ABOVE this path otherwise that path would always render. 
  */

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route path="/" component={Homegapage}></Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
