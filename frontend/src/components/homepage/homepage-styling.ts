import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
// Variables
import {
  menusBackground,
  menusTextColor,
  menuLightBlue,
  menuLightBlueHover,
  lightBackground,
} from '../../createGlobalStyle';

// Link
export const StyledHomepageLink = styled(Link)`
  cursor: pointer;
  font-size: calc(14px + 1vh);
  box-sizing: border-box;
  margin: calc(12px + 1vh);
  padding: calc(5px + 1vh);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  color: ${menusTextColor};

  background: ${menuLightBlue};

  :after {
    content: ' >';
  }

  :hover {
    background: ${menuLightBlueHover};
  }
`;
// Homepage container
export const HomepageContent = styled.main`
  /* This margin centers the container */
  margin: 0 auto;
  z-index: 0;
  margin-top: 6.5vh;
  margin-bottom: 6vh;

  user-select: none;
  text-align: center;

  color: ${menusTextColor};
  background: ${menusBackground};
  opacity: 0.8;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  font-size: calc(16px + 1vh);
  font-weight: 500;

  border: 5px dashed ${menuLightBlue};
  border-radius: 25px 50px;
  padding: calc(16px + 1vh);
  line-height: 1;

  h1 {
    margin-top: 0px;
  }

  p,
  h1,
  h2,
  a {
    text-shadow: 1px 1px;

    :hover {
      color: ${lightBackground};
    }
  }

  p :last-of-type {
    margin-bottom: calc(30px + 1vh);
  }

  @media only screen and (min-width: 768px) {
    font-size: calc(24px + 1vh);
  }

  @media only screen and (max-height: 500px) {
    font-size: calc(14px + 1vh);
  }
`;
