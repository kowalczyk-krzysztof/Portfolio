import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
// Variables
import {
  black,
  lightBlue,
  lightBlueHover,
  font1_75rem,
  font1rem,
  font1_25rem,
  font1_5rem,
  font2_25rem,
} from '../../createGlobalStyle';

// Link
export const StyledHomepageLink = styled(Link)`
  align-self: center;
  cursor: pointer;
  margin-top: 1rem;
  padding: 1rem;
  border: 2px solid ${black};
  border-radius: 10px;
  text-decoration: none;
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
  /* Align-self centers the container */
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 2rem;
  z-index: 0;
  user-select: none;
  text-align: center;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  font-size: ${font1_75rem};
  font-weight: 500;
  border: 5px dashed ${lightBlue};
  padding: ${font1_75rem};
  h1,
  h2 {
    margin: 5px;
  }
  p :last-of-type {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: ${font2_25rem};
  }
  @media only screen and (max-width: 400px) {
    font-size: ${font1_25rem};
  }
  @media only screen and (max-width: 330px) {
    font-size: ${font1rem};
  }
  @media only screen and (max-height: 500px) {
    font-size: ${font1_5rem};
  }
`;
