import styled from 'styled-components';
// Variables
import { lightBlue, font1_25rem } from '../../createGlobalStyle';

// Main container
export const StyledAboutContainer = styled.main`
  z-index: 0;
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
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
  border: 5px solid ${lightBlue};
  order: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 15px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

// Text container
export const StyledTextContainer = styled.div<{ background: string }>`
  width: 50%;
  margin-right: 5vh;
  font-weight: 900;
  font-size: ${font1_25rem};

  p {
    background: ${(props) => props.background};
    border: 5px dashed ${lightBlue};
    padding: 2vh;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  p:last-of-type {
    margin-top: 5vh;
  }
`;
// Text + picture container
export const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  order: 2;

  @media only screen and (max-height: 500px) {
    ${StyledTextContainer} {
      p:last-of-type {
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    ${StyledTextContainer} {
      width: 80%;
      order: 2;
      text-align: center;
      margin-right: 0;
      margin-top: 2vh;
    }

    ${StyledPictureContainer} {
      margin-top: 20px;
    }

    ${StyledPicture} {
      border-radius: 50%;
      width: 255px;
      height: 255px;
    }
  }
`;

// Text + icons  main container
export const StyledTechnologyContainer = styled.div`
  margin-top: 5vh;
  text-align: center;
  order: 3;
  padding: 1vh;
  font-size: ${font1_25rem};
  text-shadow: 1px 1px #4d96bb;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 900;
`;

// Text + icons centered container
export const StyledTechnologyWrapper = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  border: 5px dashed ${lightBlue};
  padding: 0.5vh 3vh 2vh 3vh;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

// Icon wrapper
export const StyledTechnologyIconWrapper = styled.div`
  display: inline-flex;
  text-align: center;
`;

// Icon container
export const StyledTechnologyIcon = styled.div`
  padding: 2px;
`;
