import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
// Variables
import {
  black,
  lightBlue,
  lightBlueHover,
  font16px,
  font10px,
  font12px,
  font14px,
  font24px,
} from '../../createGlobalStyle';

// Link
export const StyledHomepageLink = styled(Link)`
  cursor: pointer;
  font-size: ${font14px};
  font-weight: 700;
  box-sizing: border-box;
  margin: ${font10px};
  padding: calc(5px + 1vh);
  border: 2px solid ${black};
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  color: ${black};

  background: ${lightBlue};

  :hover {
    background: ${lightBlueHover};
  }
`;
// Homepage container
export const HomepageContent = styled.main<{
  background: string;
  color: string;
}>`
  /* This margin centers the container */
  margin: 0 auto;
  z-index: 0;
  margin-top: calc(20px + 6.5vh);
  margin-bottom: 6vh;

  user-select: none;
  text-align: center;

  color: ${(props) => props.color};
  background: ${(props) => props.background};

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  font-size: ${font16px};
  font-weight: 500;

  border: 5px dashed ${lightBlue};
  padding: ${font16px};

  h1,
  h2 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  p,
  h1,
  h2 {
    margin: 5px;
  }

  p :last-of-type {
    margin-bottom: calc(30px + 1vh);
  }

  @media only screen and (min-width: 768px) {
    font-size: ${font24px};
  }

  @media only screen and (max-width: 400px) {
    font-size: ${font12px};
  }

  @media only screen and (max-width: 330px) {
    font-size: ${font10px};
  }

  @media only screen and (max-height: 500px) {
    font-size: ${font14px};
    margin-bottom: 6rem;
    margin-top: 4rem;
  }
`;
