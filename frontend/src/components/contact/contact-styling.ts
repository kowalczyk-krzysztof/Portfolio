import styled from 'styled-components';
// Variables
import {
  lightBackground,
  menusBackground,
  menusTextColor,
  menuLightBlue,
  menuLightBlueHover,
} from '../../createGlobalStyle';

const formFontSize = 'calc(12px + 1vh)';

// Main container
export const StyledContactContainer = styled.main`
  z-index: 0;
  margin-top: 8.5vh;
  margin-bottom: 6vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
// Invalid input warnings
export const StyledNotificationWarning = styled.div<{ visibility: number }>`
  opacity: ${(props) => props.visibility};
  font-size: ${formFontSize};
  color: red;
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
// Dummy container for email notification
export const StyledDummyContainer = styled.div`
  opacity: 0;
  text-align: center;
  font-size: ${formFontSize};
  line-height: 0.3;
  user-select: none;
`;
// Email status
export const StyledEmailNotification = styled.div<{ color: string }>`
  font-size: ${formFontSize};
  text-align: center;
  line-height: 0.3;
  color: ${(props) => props.color};
  user-select: none;
`;
// Characters left counter
export const StyledCharactersLeft = styled.p`
  margin-top: 5px;
  text-align: center;
`;
// Form container
export const StyledForm = styled.form`
  color: ${menusTextColor};
  background: ${menusBackground};
  opacity: 0.8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  border: 5px dashed ${menuLightBlue};
  border-radius: 15px;
  padding: 3vh;
`;

// Input field
export const StyledInput = styled.input<{
  border: string;
  shadow: string;
}>`
  outline: none;
  font-size: ${formFontSize};
  border: 1px solid ${(props) => props.border};
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
  font-size: ${formFontSize};
  border: 1px solid ${(props) => props.border};
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
  font-size: ${formFontSize};
`;

// Title and text below
export const StyledContactTitleContainer = styled.div`
  border-radius: 15px;
  font-size: ${formFontSize};

  padding: 2vh;
  font-weight: bold;
  margin: 1vh;
  text-align: center;
`;
// Form section wrapper
export const StyledFormElement = styled.div`
  display: flex;
  flex-direction: column;
`;
// Contact links
export const StyledContactLinkBig = styled.a`
  margin-right: 5px;
  text-decoration: none;
  padding-right: 5px;
  color: inherit;
`;

// Submit button
export const StyledSubmitButton = styled.button`
  background: ${menuLightBlue};
  color: ${lightBackground};
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  margin: calc(12px + 1vh);
  margin-top: 0;
  padding: ${formFontSize};

  font-size: ${formFontSize};
  border-radius: 10px;

  :hover {
    background: ${menuLightBlueHover};
  }

  :disabled {
    :hover {
      background: ${menuLightBlue};
    }
  }
`;
