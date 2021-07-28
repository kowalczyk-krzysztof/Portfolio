import styled from 'styled-components/macro';
// Variables
import {
  black,
  darkBlue,
  lightGray,
  lightBlue,
  veryLightBlue,
} from '../../createGlobalStyle';

// Links
export const StyledContactLink = styled.a`
  color: ${lightGray};
  padding-right: 5px;
  :hover {
    color: ${veryLightBlue};
  }
`;
// Icons
export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px 5px 5px;
`;
// Copyright
export const StyledCopyright = styled.div`
  color: ${black};
  background: ${lightBlue};
`;
// Footer
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
