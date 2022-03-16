import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  themeSelector,
  ThemeProps,
} from './features/themetoggle/themeToggleSlice';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Contact } from './components/contact/Contact';

import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  MainContainer,
  ContentContainer,
} from './createGlobalStyle';

export const home = '/';
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
              <Route exact path={contact} component={Contact}></Route>
              <Route path={home} component={Home}></Route>
            </Switch>
          </ContentContainer>
          <Footer />
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
