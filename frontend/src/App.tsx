import React from 'react';
// React router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
import {
  themeSelector,
  ThemeProps,
} from './features/themetoggle/themeToggleSlice';
// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Homegapage from './components/homepage/Homepage';
// Styling
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  MainContainer,
  ContentContainer,
} from './createGlobalStyle';
// FontAwesome - no longer needed, changed to styled icons
// import { library } from '@fortawesome/fontawesome-svg-core';
// Adding icons to library makes it so I don't need to import them in every file - NOT NEEDED - keeping this as a reference
// library.add(
//   faReact,
// );

// Routes
export const home: string = '/';
export const about: string = '/about';
export const contact: string = '/contact';

const App = (): JSX.Element => {
  // Assigning a theme based on store
  const theme: ThemeProps = useSelector(themeSelector);

  /* For a general path (eg. when someone enters an invalid route like /foo ) you need to do a <Router path="/">
     This can't be an exact path. All exact paths have to be ABOVE this path otherwise that path would always render. 
  */

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <MainContainer>
          <Navbar />
          <ContentContainer>
            <Switch>
              <Route exact path={about} component={About}></Route>
              <Route exact path={contact} component={Contact}></Route>
              <Route path={home} component={Homegapage}></Route>
            </Switch>
          </ContentContainer>
          <Footer />
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
