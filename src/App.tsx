import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faLanguage,
  faBars,
  faCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import { themeSelector } from './features/themetoggle/themeToggleSlice';
import { GlobalStyle } from './createGlobalStyle';

// Adding icons to library makes it so I don't need to import them in every file
library.add(faLanguage, faBars, faCircle, faReact, faTimes);

const App = (): JSX.Element => {
  // Assigning a theme based on store
  const theme = useSelector(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
