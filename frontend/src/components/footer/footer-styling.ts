import styled from 'styled-components/macro';
// Variables
import {
  darkBlue,
  lightGray,
  lightBlue,
  veryLightBlue,
  font10px,
} from '../../createGlobalStyle';

// Links
export const StyledContactLink = styled.a`
  color: ${lightGray};
  margin-right: 5px;

  padding-right: 5px;
  :hover {
    color: ${veryLightBlue};
  }
`;

// Icons
export const FooterIconWrapper = styled.div`
  padding: 0 5px 5px 5px;
`;
// Copyright
export const StyledCopyright = styled.div`
  font-size: calc(6px + 1vh);
  background: ${lightBlue};
  width: 100%;
  line-height: 0.1;
`;
// Social media links
export const StyledContactList = styled.div`
  display: inline;
  line-height: 0.1;

  p :after {
    content: ':';
  }

  p {
    font-size: ${font10px};
  }
`;
// Footer
export const StyledFooter = styled.footer`
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0.9;

  background: ${darkBlue};

  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.4);
  color: ${lightGray};
  user-select: none;

  @media only screen and (max-width: 280px) {
    ${StyledContactList} {
      padding: 0px;
    }
  }
`;
