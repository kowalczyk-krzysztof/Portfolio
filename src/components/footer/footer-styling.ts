import styled from 'styled-components/macro';
import {
  black,
  darkBlue,
  lightGray,
  lightBlue,
  veryLightBlue,
} from '../../createGlobalStyle';

export const StyledContactLink = styled.a`
  color: ${lightGray};
  padding-right: 10px;
  :hover {
    color: ${veryLightBlue};
  }
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px 5px 5px;
`;

export const StyledCopyright = styled.div`
  color: ${black};
  background: ${lightBlue};
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  text-align: center;
  flex-direction: column;
  opacity: 0.9;
  background: ${darkBlue};
  color: ${lightGray};
  user-select: none;
  line-height: 0.1;
`;
