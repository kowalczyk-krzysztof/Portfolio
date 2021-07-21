import styled, { keyframes } from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
// Variables
import {
  black,
  darkBlue,
  lightGray,
  veryDarkBlue,
  lightBlue,
  lightBlueHover,
  veryLightBlue,
  font16px,
  font20px,
} from '../../createGlobalStyle';

// This animation is needed to avoid flickering
const MenuFade = keyframes`
from {opacity: 0;}
  to {opacity: 1;}
`;
// Icons
export const MenuIconWrapper = styled.div`
  padding-bottom: 5px;
  :hover {
    color: ${veryLightBlue};
  }
`;
// Logo container
export const StyledLogo = styled.div`
  order: 1;
  flex: 1;
`;
// Logo text
export const StyledLogoH1 = styled.h1`
  font-size: ${font20px};
  margin: 10px 10px;
  font-weight: 900;
  color: ${lightBlue};
  :hover {
    color: ${lightBlueHover};
  }
`;
// Theme toggle cintainer
export const StyledThemeToggle = styled.div`
  order: 1;
  display: block;
  margin-right: 5px;
`;
// Theme toggle slider
export const StyledThemeToggleSlider = styled.input`
  /* How this works:
    // The box 
    1. You make a checkbox and hide the appeareance of it so the ugly default one goes away
    2. Define the width and height of the box
    3. Do border radius 20px for smooth circle-like edges
    // Circle in the box
    4. Add a :before with content of empty string (important, otherwise it won't work)
    5. Make the position absolute (important!!!!)
    6. Set the height the same as the box and width as half of the box, do border-radius 20px for edges
    7. Do a transform: scale(1.1) to make it slightly bigger than the box
    // Sliding the cricle
    8. Make a :checked:before and do a transform: translateX(the width of box). This will move circle to the other side of the box
  
   */
  cursor: pointer;
  border: 4px solid ${lightBlue};
  width: 60px;
  height: 30px;
  appearance: none; /* hides default checkbox*/
  background: ${veryLightBlue};
  opacity: 0.9;
  border-radius: 20px; /* slider-like edges */
  transition: 0.6s; /* slow translition between toggles */
  :checked {
    background: ${veryDarkBlue};
  }
  /* slider circle */
  :before {
    content: ''; /* needs to be empty */
    /* needs to be absolute*/
    position: absolute;
    opacity: 0, 8;
    margin: -4px; /*if I set a border then I need to add a margin of equal px to circle */
    width: 30px;
    height: 30px;
    background: #30649b;
    border-radius: 50%;
    transform: scale(0.9); /* makes the circle slightly bigger than the rest */
    transition: 0.6s;
  }
  :checked:before {
    transform: scale(0.85) translateX(34px); /* this does the sliding process */
  }
`;
// Language toggle container
export const StyledLanguage = styled.div`
  order: 2;
  display: flex;
  justify-content: flex-end;
`;
// Language toggle buttons
export const StyledLanguageButtons = styled.button`
  transform: scale(1.2);
  cursor: pointer;
  :hover {
    transform: scale(1.25, 1.25);
  }

  :last-of-type {
    margin-right: 10px;
  }
`;
/*
Props with custom names in styled-components:
You need to pass an interface with an object to the component.
Example: 

const foo = styled.div<{bar: any}>`
 color: black;
`*/
// Links container
export const StyledLinks = styled.div<{
  display: string;
}>`
  display: ${(props) => props.display};

  order: 3;
  width: 100%;
  animation: ${MenuFade} 250ms ease-in-out both;
`;

// Links
/*
  To make links highlight on active you need to give them a class property  
  activeClassName="active" (can be any name) and then do it like this

  &.${(props) => props.activeClassName} {}

  For home link e.g ("/") you also need to pass exact={true}


*/
export const StyledLink = styled(NavLink)`
  /* inline components can't have any align properites so this has to be a block*/
  display: block;
  padding: 15px;
  text-decoration: none;
  text-align: center;
  border-top: 1px ridge ${lightGray};
  font-size: ${font16px};
  background: ${darkBlue};
  :hover {
    background: #415a77;
    color: ${veryLightBlue};
  }
  :last-child {
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
  }
  &.${(props) => props.activeClassName} {
    color: ${black};
    font-weight: 600;
    background: ${lightBlue};
    :hover {
      background: ${lightBlueHover};
    }
  }
`;

// Link list at width > 768
export const StyledFlexLinkList = styled.div`
  display: inline-flex;
  order: 1;
  flex: 1;

  animation: none;
  ${StyledLink} {
    top: 0;
    border: none;
    box-shadow: none;
  }
`;

// Menu button container
export const StyledMenu = styled.div`
  order: 2;
`;
// Menu button
export const StyledMenuButton = styled.button`
  margin-right: 5px;
  cursor: pointer;
`;
/* Navbar
The logic behind this:
1. On screen width >= 576x this is just a regular flex container with display row - the menu button is hidden (display: none)
2. On screen width < 576 px all the elements you want to hide are set to display: none and the menu button is displayed
3. Menu button toggles display betwen none and block. To achieve the column-like look, the display has to be block AND width: 100% and IMPORTANT - flex-wrep: wrap HAS TO BE SET ON THE NAVBAR OTHERWISE ITEMS WON'T GET PUSHED TO NEW LINE
*/
export const StyledNavbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  /* After thinking about it, I decided to make the navbar not sticky because there won't be much scrolling done */

  /*
          NON-STICKY NAVBAR DROPDOWN DON'T PUSH PAGE DOWN
          1. Set the navbar position to abosolute
          2. Set content container padding to match the navbar
  */

  /*
  STICKY NAVBAR SETTINGS
  
  Position has to be fixed or sticky to stick to the top. Top: 0 is also needed. Since I don't want dropdown to push down the content, it has to be fixed and I need to add padding-top to body so it doesn't cut main content*/
  /* position: fixed;
  top: 0;
  width: 100%; */
  position: absolute;
  z-index: 1;
  box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.4);
  background: ${darkBlue};
  align-items: center;
  user-select: none;
  button {
    background: none;
    border: none;
  }
  div,
  a {
    color: ${lightGray};
  }

  /*Those settings are for non-mobile devices. Minimum width to cater for is 320px. */
  @media only screen and (min-width: 768px) {
    ${StyledLogo} {
      flex: 0;
    }
  }
  @media only screen and (max-width: 330px) {
    ${StyledLogo} {
      flex: 0;
    }

    ${StyledLogoH1} {
      margin: 0px;
      margin-left: 3px;
      margin-bottom: 5px;
      font-size: ${font16px};
    }

    ${StyledLanguageButtons} {
      padding-right: 2px;
      margin-right: 2px;
      padding-left: 3px;
      transform: scale(1);
      margin: 0px;
      flex: 0;
      :last-of-type {
        margin-right: 0px;
      }
    }

    ${StyledMenuButton} {
      margin-right: 0px;
      transform: scale(0.9);
    }

    ${StyledThemeToggle} {
      flex: 0;
      transform: scale(0.9);
      margin: 0px;
      padding: 0px;
    }
  }
`;
