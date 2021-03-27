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
 }
  ${StyledNavbar} {
    background:${({ theme }) => theme.navbarBg};
    a:hover{
      background:${({ theme }) => theme.navbarLinkHover}
    }}
`;

export const lightTheme: ThemeProps = {
  name: ThemeNames.LIGHT,
  body: '#FFFF',
  text: '#363537',
  navbarBg: '#3b5998',
  navbarLinkHover: '#8b9dc3',
};
export const darkTheme: ThemeProps = {
  name: ThemeNames.DARK,
  body: '#222222',
  text: '#FAFAFA',
  navbarBg: '#0f4c75',
  navbarLinkHover: '#3282b8',
};
