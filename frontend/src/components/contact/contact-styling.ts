import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  * {
    width: 100%;
  }
`;

export const StyledWarning = styled.p<{
  display: number;
}>`
  opacity: ${(props) => props.display};
  color: red;
  user-select: none;
`;
