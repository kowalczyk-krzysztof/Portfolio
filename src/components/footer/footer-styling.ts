import styled from 'styled-components/macro';
// Icons
export const FooterIconWrapper = styled.div`
  padding-bottom: 5px;
  display: inline-block;

  a {
    color: #e0e1dd;
    margin-right: 5px;
  }

  a :hover {
    color: #fafafa;
  }
`;
// Copyright
export const StyledCopyright = styled.div`
  font-size: 0.55rem;
  padding-right: 15px;
`;
// Social media links
export const StyledContactList = styled.div`
  flex: 1;
  padding-left: 15px;
  span :after {
    content: ':';
  }

  span {
    padding-right: 10px;
    font-size: 1rem;
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
  color: #e0e1dd;
  user-select: none;
`;
