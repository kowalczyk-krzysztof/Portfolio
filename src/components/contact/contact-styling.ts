import styled from 'styled-components';
import {
  white,
  darkBlue,
  lightGray,
  lightBlue,
  lightBlueHover,
  font1rem,
  font1_25rem,
  font1_5rem,
} from '../../createGlobalStyle';

export const StyledNotificationWarning = styled.div<{ visibility: number }>`
  opacity: ${(props) => props.visibility};
  font-size: ${font1rem};
  color: #ff6161;
  user-select: none;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledEmailNotification = styled.div<{ color: string }>`
  font-size: ${font1rem};
  text-align: center;
  color: ${(props) => props.color};
  user-select: none;
`;

export const StyledCharactersLeft = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  text-align: center;
`;

export const StyledForm = styled.form`
  color: ${lightGray};
  background: ${darkBlue};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border: 5px dashed ${lightBlue};
  border-radius: 15px;
  padding: 1rem;
`;

export const StyledInput = styled.input<{
  border: string;
  shadow: string;
}>`
  border: 2px solid ${(props) => props.border};
  :focus {
    box-shadow: 0 0 0 3px ${(props) => props.shadow};
  }
  :hover {
    box-shadow: 0 0 0 3px ${(props) => props.shadow};
  }
`;

export const StyledTextArea = styled.textarea<{
  border: string;
  shadow: string;
}>`
  border: 2px solid ${(props) => props.border};
  :focus {
    box-shadow: 0 0 0 3px ${(props) => props.shadow};
  }
  :hover {
    box-shadow: 0 0 0 3px ${(props) => props.shadow};
  }
`;

export const StyledLabel = styled.label`
  user-select: none;
  margin-bottom: 10px;
`;

export const StyledContactTitleContainer = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 2rem;
`;

export const StyledFormElement = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    outline: none;
    font-size: ${font1_25rem};
    border-radius: 5px;
    font-weight: 400;
    margin-bottom: 0.5rem;
    resize: vertical;
  }
`;

export const StyledContactLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const StyledContactLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${white};
  border: 2px solid ${lightBlue};
  border-radius: 25px;
`;

// to style styled-icons, give them a class
export const StyledContactLinkBig = styled.a`
  padding: 5px;
  .contacticons {
    :hover {
      transform: scale(0.9, 0.9);
    }
  }
`;

export const StyledSubmitButton = styled.button`
  background: ${lightBlue};
  cursor: pointer;
  margin: ${font1_25rem};
  padding: ${font1_25rem};
  font-size: ${font1_25rem};
  border-radius: 10px;
  :hover {
    background: ${lightBlueHover};
  }
`;

export const StyledContactContainer = styled.main`
  z-index: 0;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 550;
  ${font1_25rem}
  @media only screen and (min-width: 900px) {
    ${StyledContactTitleContainer} {
      font-size: ${font1_25rem};
    }
    ${StyledForm} {
      font-size: ${font1_5rem};
    }
  }
`;
