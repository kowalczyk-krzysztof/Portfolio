import styled from 'styled-components/macro';
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
export const StyledThemeToggle = styled.div`
  display: block;
  order: 1;
  text-align: center; /* for label to align I need to use text */
  margin: 10px;
  padding-right: 20px;

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
  label {
    input {
      border: 3px solid #707070;
      width: 50px;
      height: 25px;
      appearance: none; /* hides default checkbox*/
      background: #fafafa;
      outline: none;
      border-radius: 20px; /* slider-like edges */
      transition: 0.5s; /* slow translition between toggles */
    }

    input :checked {
      background: #1b263b;
    }
    /* slider circle */
    input :before {
      content: ''; /* needs to be empty */
      /* needs to be absolute*/
      position: absolute;

      margin: -3px; /*if I set a border then I need to add a margin of equal px to circle */
      width: 25px;
      height: 25px;
      background: #415a77;

      border-radius: 50%;
      transform: scale(
        0.85
      ); /* makes the circle slightly bigger than the rest */
      transition: 0.5s;
    }

    input :checked:before {
      transform: scale(0.85) translateX(29px); /* this does the sliding process */
    }
  }
`;
// Language toggle
export const StyledLanguage = styled.div`
  order: 2;

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
// Links
export const StyledLinks = styled.div`
  width: 100%;
  display: ${(props) => props.id};
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
// Menu button
export const StyledMenuButton = styled.button`
  order: 3;
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
  @media only screen and (min-width: 768px) {
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
