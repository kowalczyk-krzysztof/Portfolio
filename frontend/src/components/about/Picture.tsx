import { FC } from 'react';
// Styling
import { StyledPicture, StyledPictureContainer } from './about-styling';

export const Picture: FC = () => {
  const picture: string = 'profile_pic';
  return (
    <StyledPictureContainer>
      <StyledPicture
        alt="Profile"
        src={`${process.env.PUBLIC_URL}/${picture}.png`}
      ></StyledPicture>
    </StyledPictureContainer>
  );
};
