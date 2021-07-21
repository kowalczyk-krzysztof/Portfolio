import styled from 'styled-components';
// Variables
import {
  darkBlue,
  lightGray,
  lightBlue,
  lightBlueHover,
  font10px,
  font14px,
} from '../../createGlobalStyle';

// Invalid input warnings
export const StyledNotificationWarning = styled.div<{ visibility: number }>`
  opacity: ${(props) => props.visibility};
  font-size: ${font10px};
  color: #ff6161;
  font-weight: 550;
  line-height: 1.2;
  user-select: none;
`;
// Button container
export const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
// Email status
export const StyledEmailNotification = styled.div<{ color: string }>`
  font-size: ${font10px};
  text-align: center;
  line-height: 0.3;
  color: ${(props) => props.color};
  user-select: none;
  font-weight: 550;
`;
// Characters left counter
export const StyledCharactersLeft = styled.p`
  margin-top: 5px;
  text-align: center;
`;
// Form container
export const StyledForm = styled.form`
  color: ${lightGray};
  background: ${darkBlue};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  border: 5px dashed ${lightBlue};
  border-radius: 15px;
  padding: 2vh;
`;

// Input field
export const StyledInput = styled.input<{
  border: string;
  shadow: string;
}>`
  outline: none;
  font-size: ${font10px};
  border: 2px solid ${(props) => props.border};
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 400;
  margin-bottom: 0.5vh;

  :focus {
    box-shadow: 0 0 0 3px ${(props) => props.shadow};
  }
`;
// Text area
export const StyledTextArea = styled.textarea<{
  border: string;
  shadow: string;
}>`
  outline: none;
  font-size: ${font10px};
  border: 2px solid ${(props) => props.border};
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 400;
  margin-bottom: 0.5vh;
  resize: vertical;

  :focus {
    box-shadow: 0 0 0 3px ${(props) => props.shadow};
  }
`;
// Label
export const StyledLabel = styled.label`
  user-select: none;
  margin-bottom: 10px;
  font-size: ${font10px};
`;

// Title and text below
export const StyledContactTitleContainer = styled.div`
  border-radius: 15px;
  font-size: ${font10px};
  padding: 1vh;
  font-weight: bold;
  margin: 0.5vh;
  margin-bottom: 1.5vh;
  text-align: center;

  @media only screen and (max-height: 500px) {
    margin: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;
// Form section wrapper
export const StyledFormElement = styled.div`
  display: flex;
  flex-direction: column;
`;

// Contact link container
export const StyledContactLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
// Contact link wrapper
export const StyledContactLinkWrapper = styled.div`
  background: #fafafa;
  border: 2px solid ${lightBlue};
  border-radius: 25px;
  padding: 5px 2vh 5px 2vh;
`;

// Contact links
export const StyledContactLinkBig = styled.a`
  margin-right: 5px;
  text-decoration: none;
  padding-right: 5px;
`;

// Submit button
export const StyledSubmitButton = styled.button`
  background: ${lightBlue};
  color: #ffff;
  box-sizing: border-box;
  cursor: pointer;
  margin: ${font10px};
  margin-top: 0;
  padding: ${font10px};
  font-size: ${font10px};
  border-radius: 10px;
  :hover {
    background: ${lightBlueHover};
  }
`;
// Main container
export const StyledContactContainer = styled.main`
  z-index: 0;
  margin-top: 2vh;
  margin-bottom: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 900px) {
    ${StyledContactTitleContainer} {
      margin: 3vh;
      font-size: ${font14px};
    }

    ${StyledForm} {
      font-size: ${font14px};
    }
  }

  @media only screen and (min-width: 1250px) {
    margin-top: calc(20px + 8.5vh);
  }

  @media only screen and (max-height: 450px) and (min-width: 400px) {
    ${StyledContactTitleContainer} {
      margin-right: 20px;
    }
  }
`;
