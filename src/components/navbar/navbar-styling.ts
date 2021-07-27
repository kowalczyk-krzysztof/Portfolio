import styled, { keyframes } from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
// Variables
import {
  white,
  black,
  darkBlue,
  lightGray,
  veryDarkBlue,
  lightBlue,
  lightBlueHover,
  veryLightBlue,
  font1_5rem,
} from '../../createGlobalStyle';

// This animation is needed to avoid flickering
const MenuFade = keyframes`
from {opacity: 0;}
  to {opacity: 1;}
`;
// Icons
export const MenuIconWrapper = styled.div`
  :hover {
    color: ${veryLightBlue};
  }
`;
// Logo container
export const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  order: 1;
  flex: 1;
  img {
    :hover {
      transform: scale(0.9, 0.9);
    }
  }
`;
// Theme toggle cintainer
export const StyledThemeToggle = styled.div`
  order: 1;
  display: inline-flex;
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
  :hover {
    transform: scale(0.9, 0.9);
  }

  @media only screen and (max-width: 400px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
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
  font-size: ${font1_5rem};
  background: ${darkBlue};
  :hover {
    background: #415a77;
    color: ${veryLightBlue};
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
// Links container - max height has to be 0 for dropdown onClickAway to work properly
export const StyledLinksDropdown = styled.div<{
  display: string;
}>`
  grid-area: content;
  z-index: 1;
  display: ${(props) => props.display};
  animation: ${MenuFade} 250ms ease-in-out both;
  max-height: 0;
  a {
    color: ${white};
  }
`;

// Link list at width > 768
export const StyledFlexLinkList = styled.div`
  display: none;
  order: 1;
  flex: 1;
  ${StyledLink} {
    border: none;
  }
`;

// Menu button container
export const StyledMenu = styled.div`
  order: 2;
  button {
    :hover {
      transform: scale(0.9, 0.9);
    }
  }
`;
// Navbar
export const StyledNavbar = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
  background: ${darkBlue};
  align-items: center;
  user-select: none;
  button {
    background: ${darkBlue};
    border: none;
    cursor: pointer;
  }
  div,
  a {
    color: ${lightGray};
  }

  @media only screen and (min-width: 768px) {
    ${StyledLogo} {
      flex: 0;
    }
    ${StyledMenu} {
      display: none;
    }

    ${StyledFlexLinkList} {
      display: inline-flex;
    }
  }
`;
