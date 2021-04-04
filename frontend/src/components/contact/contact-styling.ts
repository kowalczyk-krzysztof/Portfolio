import styled from 'styled-components';
// Variables
import { lightBackground } from '../../createGlobalStyle';

export const StyledEmailNotificaiton = styled.p``;

export const StyledCharactersLeft = styled.p``;

export const StyledForm = styled.form``;

export const StyledInput = styled.input``;

export const StyledTextArea = styled.textarea``;

export const StyledLabel = styled.label``;

//
export const StyledContactTitleContainer = styled.div``;

export const StyledContactTitle = styled.h1``;

export const StyledContactText = styled.p``;

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  * {
    width: 100%;
  }
`;

export const StyledNotificationCorrect = styled.p`
  color: green;
  user-select: none;
`;

export const StyledNotificationWarning = styled.p`
  color: red;
  user-select: none;
`;

export const DefaultButton = styled.button`
  background: blue;
  color: ${lightBackground};
`;

export const LoadingButton = styled.button`
  background: yellow;
  color: ${lightBackground};
`;

export const FailedButton = styled.button`
  background: red;
  color: ${lightBackground};
`;

export const SuccessButton = styled.button`
  background: green;
  color: ${lightBackground};
`;
