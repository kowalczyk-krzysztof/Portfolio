import styled from 'styled-components';

export const StyledTitle = styled.h1``;

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  * {
    width: 100%;
  }
`;

export const StyledNotification = styled.p<{
  display: number;
}>`
  opacity: ${(props) => props.display};
  color: red;
  user-select: none;
`;

export const DefaultButton = styled.button`
  background: blue;
`;

export const LoadingButton = styled.button`
  background: yellow;
`;

export const FailedButton = styled.button`
  background: red;
`;

export const SuccessButton = styled.button`
  background: green;
`;
