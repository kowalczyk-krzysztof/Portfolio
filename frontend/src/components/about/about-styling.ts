import styled from 'styled-components';
// Variables
import { menuLightBlue } from '../../createGlobalStyle';

// Main container
export const StyledAboutContainer = styled.main`
  z-index: 0;
  margin-top: 6.5vh;
  margin-bottom: 6vh;
  display: flex;
  flex-direction: column;
  font-weight: 900;
  flex-wrap: wrap;
`;

// Picture container
export const StyledPictureContainer = styled.div`
  order: 1;
  display: flex;

  align-items: center;
  flex-wrap: nowrap;
`;
// Picture
export const StyledPicture = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 25px;
  border: 5px solid ${menuLightBlue};
  order: 1;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 15px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

// Text container
export const StyledTextContainer = styled.div`
  width: 50%;
  margin-right: 2vh;

  font-size: calc(12px + 1vh);

  p {
    border: 5px dashed ${menuLightBlue};
    padding: 1vh;
  }
`;
// Text + picture container
export const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  order: 2;

  @media only screen and (max-width: 1250px) {
    ${StyledTextContainer} {
      width: 80%;
      order: 2;
      text-align: center;
      margin-right: none;
      margin-top: 2vh;
    }

    ${StyledPicture} {
      border-radius: 50%;
      width: 255px;
      height: 255px;
    }
  }
`;

// Text + icons container
export const StyledTechnologyContainer = styled.div`
  text-align: center;
  order: 3;
  padding: 1vh;
`;
//
export const StyledTechnologyIconWrapper = styled.div`
  display: inline-flex;
  text-align: center;
`;

// Icon container
export const StyledTechnologyIcon = styled.div`
  padding: 2px;
`;
