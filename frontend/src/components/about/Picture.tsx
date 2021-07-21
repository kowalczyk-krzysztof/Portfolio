import { FC } from 'react';
// Styling
import { StyledPicture, StyledPictureContainer } from './about-styling';

export const Picture: FC = () => {
  const picture: string = 'profile_pic';
  return (
    <StyledPictureContainer data-testid={'aboutpicture'}>
      <StyledPicture
        alt="Profile"
        src={`${process.env.PUBLIC_URL}/${picture}.jpg`}
      ></StyledPicture>
    </StyledPictureContainer>
  );
};
