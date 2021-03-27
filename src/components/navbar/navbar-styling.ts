import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';

// Default dropdown content - has to be invisible
export const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
`;
// Dropdown "button"
export const StyledDropdown = styled.div`
  order: 3;
  background: inherit;
  :hover ${StyledDropdownContent} {
    display: flex;
    flex-direction: column;
    background: inherit;

    button {
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      background: inherit;
      color: #fafafa;
      border: none;
      outline: none; // makes it so there's no outline on click
    }
  }
`;
// Icon for mobile dropdown menu
export const StyledBarsIcon = styled(FontAwesomeIcon)`
  color: #fafafa;
  display: none;
  order: 4;
`;
// Icon for dropndown menu for language toggling
export const StyledLanguageIcon = styled(FontAwesomeIcon)`
  color: #fafafa;
  margin: 5px;
`;
// Navbar
export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0; // this + sticky makes it actually sticky
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 100%;
  @media only screen and (max-width: 600px) {
    div:not(:first-child) {
      display: none;
    }

    div:first-child a:not(:first-child) {
      display: none;
    }

    div:first-child a:first-child:after {
      content: '';
    }

    ${StyledBarsIcon} {
      display: block;
      margin-right: 5px;
    }
  }
`;

// Navbar links
export const StyledLinks = styled.div`
  flex: 1;
  order: 1;
  // Aligns have no effect on inline elements
  a:first-of-type {
    background: #007d00;
    padding: 15px;
    :hover {
      background: #00bf00;
    }
  }

  a {
    color: #fafafa;
    padding: 15px;
    text-decoration: none;
    display: inline-flex;
  }
`;
// Theme toggle
export const StyledThemeToggle = styled.div`
  order: 2;
  margin-right: 10px;
`;
