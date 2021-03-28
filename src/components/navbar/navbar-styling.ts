import styled from 'styled-components/macro';
// MobileDropDownItem
const MobileDropDownItem = styled.div`
  width: 100%;
  display: ${(props) => props.id};
`;

// Logo
export const StyledLogo = styled.h1`
  flex: 1;
  order: 1;
  font-size: 20px;
  margin-left: 20px;

  :hover {
    color: #fafafa;
  }
`;
// Theme toggle
export const StyledThemeToggle = styled(MobileDropDownItem)`
  order: 3;
  text-align: center; /* for label to align I need to use text */
`;
// Links
export const StyledLinks = styled(MobileDropDownItem)`
  order: 3;
  a {
    /* inline components can't have any align properites so this has to be a block*/
    display: block;
    padding: 15px 15px 15px 15px;
    text-decoration: none;
    text-align: center;
    border-top: 1px ridge #e0e1dd;
    font-size: 18px;
  }

  a :last-child {
    border-bottom: 1px ridge #e0e1dd;
  }
`;
// Language toggle
export const StyledLanguage = styled.div`
  order: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;

  button * {
    padding-right: 5px;
  }

  button:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;
// Menu button
export const StyledMenuButton = styled.button`
  order: 2;
  font-size: 30px;
  padding-left: 5px;
`;
/* Navbar
The logic behind this:
1. On screen width >= 576x this is just a regular flex container with display row - the menu button is hidden (display: none)
2. On screen width < 576 px all the elements you want to hide are set to display: none and the menu button is displayed
3. Menu button toggles display betwen none and block. To achieve the column-like look, the display has to be block AND width: 100%
*/
export const StyledNavbar = styled.nav`
  /* position: sticky;
  top: 0;
  this makes it actually sticky */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  /*Those settings are for non-mobile devices */
  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
    ${StyledMenuButton} {
      display: none;
    }

    * {
      width: auto;
      display: inline-flex;
    }

    ${StyledLinks} {
      order: 1;
      flex: 1;

      a :first-child {
        background: #008adc;

        :hover {
          background: #00a1f2;
        }
      }

      a {
        border: none;
      }
      margin-right: 10px;
    }

    ${StyledThemeToggle} {
      order: 2;
      border: none;
    }

    ${StyledLogo} {
      flex: 0;
      margin-right: 30px;
    }

    ${StyledLanguage} {
      order: 3;
      align-items: center;
    }
  }
`;
