import { FC } from 'react';
import { StyledPicture, StyledPictureContainer } from './home-styling';

export const Picture: FC = () => (
  <StyledPictureContainer data-testid={'homepicture'}>
    <StyledPicture
      alt="Profile"
      src={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
    ></StyledPicture>
  </StyledPictureContainer>
);
