import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './features/themetoggle/themeToggleSlice';
import { StyledNavbar } from './components/navbar/navbar-styling';
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
 
 body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0px;
    font-size: 18px;
    font-family: 'Lato';
    font-weight: 400;
 }
 
 ${StyledNavbar} {
    background: #0D1B2A;

    * {
      color: #E0E1DD;
      background: inherit;   
    }

    button {
      outline: none;
      border: none;
      
    }

    a:hover {
      background: #415A77;
    }
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
