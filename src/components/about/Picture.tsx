import { FC } from 'react';
import { StyledPicture, StyledPictureContainer } from './about-styling';

export const Picture: FC = () => (
  <StyledPictureContainer data-testid={'aboutpicture'}>
    <StyledPicture
      alt="Profile"
      src={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
    ></StyledPicture>
  </StyledPictureContainer>
);
