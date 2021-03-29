import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './features/themetoggle/themeToggleSlice';
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

export const GlobalStyle = createGlobalStyle<CustomTheme>`

  html {
   
    font-size: 16px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
 
 body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-size: 1.125rem;
    font-family: 'Lato';
    font-weight: 400;
    min-width: 320px;
    padding-top: 54px;
    
    
    /*  padding top is required for the navbar to not cut text if it's fixed */
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
