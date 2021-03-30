import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './features/themetoggle/themeToggleSlice';
import styled from 'styled-components';
/*Styled components global ThemeProps explained.
1. Define an interface that will contain all theme props
2. Define an interface CustomTheme with property "theme" that will be of type "ThemeProps" and use it in createGlobalStyle<CustomTheme>
3. Wrap <App/> in <ThemeProvider and add a listener to store (or state) so you can toggle themes
*/
export enum ThemeNames {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}
export interface CustomTheme {
  theme: ThemeProps;
}

/*
    SUPER IMPORTANT !!!!!!!!!!!!!!!!!!!!!

    For footer to work properly with react-router, you need both MainContainer and ContentContainer containers to wrap around <Switch> like this
    
        <MainContainer>
          <ContentContainer>
            <Switch>
              <Routes>
            </Switch>
          </ContentContainer>
        </MainContainer>

*/
export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const GlobalStyle = createGlobalStyle<CustomTheme>`
 
 html, body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    /* This webkit setting makes it so there's no flickering when tapping buttons and links on mobile */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   
    font-size: 1.125rem;
    font-family: 'Lato';
    font-weight: 400;
    /* ALL of those settings are needed for footer and navbar to work properly */
    margin: 0;
    min-height: 100vh;
    /*  padding top is required for the navbar to not cut text if it's fixed */
    padding-top: 1.125rem;

    /** Note: Every content page now needs to have height of 100vh otherwise footer won't be at the bottom of the viewport */
 
}
`;

export const lightTheme: ThemeProps = {
  name: ThemeNames.LIGHT,
  body: '#FFFF',
  text: '#363537',
};
export const darkTheme: ThemeProps = {
  name: ThemeNames.DARK,
  body: '#1B263B',
  text: '#E0E1DD',
};
