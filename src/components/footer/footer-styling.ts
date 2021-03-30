import styled from 'styled-components/macro';
import { Envelope } from '@styled-icons/fa-regular/';
import { Github } from '@styled-icons/fa-brands';

// Icons
export const StyledEnvelope = styled(Envelope)``;
export const StyledGithub = styled(Github)``;
// Copyright
export const StyledCopyright = styled.div`
  font-size: 0.55rem;
  display: inline-block;
  padding-right: 5px;
  flex: 1;
`;
// Social media links
export const StyledContactList = styled.div`
  display: inline-block;
  flex: 2;
  list-style-type: none;
  padding: 5px 0px 5px 10px;

  span :after {
    content: ':';
  }

  span {
    padding-right: 10px;
    font-size: 1rem;
  }

  a {
    margin-right: 5px;
  }

  a :hover {
    color: cyan;
  }
`;
// Footer
export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: #0d1b2a;
  justify-content: flex-start;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.4);

  * {
    color: #e0e1dd;
    background: none;
  }
`;
