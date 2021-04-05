import React, { FC } from 'react';
// Styling
import { StyledPictureContainer, StyledPicture } from './about-styling';

export const Picture: FC = () => {
  const picture = 'profile_pic';
  return (
    <StyledPictureContainer>
      <StyledPicture
        alt="Profile"
        src={`${process.env.PUBLIC_URL}/${picture}.png`}
      ></StyledPicture>
    </StyledPictureContainer>
  );
};

export default Picture;
