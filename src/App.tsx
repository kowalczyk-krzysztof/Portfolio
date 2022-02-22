import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  themeSelector,
  ThemeProps,
} from './features/themetoggle/themeToggleSlice';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Homepage } from './components/homepage/Homepage';

import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  MainContainer,
  ContentContainer,
} from './createGlobalStyle';

export const home = '/';
export const about = '/about';
export const contact = '/contact';

const App = () => {
  const theme: ThemeProps = useSelector(themeSelector);
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
              <Route path={home} component={Homepage}></Route>
            </Switch>
          </ContentContainer>
          <Footer />
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
