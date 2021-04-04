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
export const StyledContainer = styled.main`
  margin: 0 auto;
  z-index: 0;
  margin-top: 8.5vh;
  margin-bottom: 6vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background: ${menusBackground};
  opacity: 0.9;
  color: ${menusTextColor}; */
`;
// Invalid input warnings
export const StyledNotificationWarning = styled.div<{ visibility: string }>`
  visibility: ${(props) => props.visibility};
  font-size: ${formFontSize};
  color: red;
  font-weight: 550;
  line-height: 1.2;
`;

export const StyledEmailNotification = styled.p``;

export const StyledCharactersLeft = styled.p`
  margin-top: 5px;
`;

export const StyledForm = styled.form`
  color: ${menusTextColor};
  background: ${menusBackground};
  opacity: 0.8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  border: 5px dashed ${menuLightBlue};
  border-radius: 25px;
  padding: calc(24px + 3vh);
  align-items: center;
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
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 0.6vh;
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
  margin-right: 20px;
`;

export const StyledContactTitle = styled.h1``;

export const StyledContactText = styled.p``;

export const StyledFormElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSubmitButton = styled.button`
  background: ${menuLightBlue};
  color: ${lightBackground};
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  margin: calc(12px + 1vh);
  margin-top: 0;
  padding: calc(5px + 1vh);
  margin: 0 auto;

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
