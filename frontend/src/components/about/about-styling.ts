import styled from 'styled-components';
// Variables
import {
  lightBackground,
  menusBackground,
  menusTextColor,
  menuLightBlue,
  menuLightBlueHover,
} from '../../createGlobalStyle';

// Main container
export const StyledAboutContainer = styled.main`
  z-index: 0;
  margin-top: 6.5vh;
  margin-bottom: 6vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  color: ${menusTextColor};
  background: ${menusBackground};
  opacity: 0.8;
`;
// Icon container
export const StyledTechnologyIcons = styled.div``;
// Picture container
export const StyledPictureContainer = styled.div``;
// Picture
export const StyledPicture = styled.img``;
