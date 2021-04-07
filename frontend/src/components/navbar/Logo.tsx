import React, { FC } from 'react';
// Styling
import { StyledLogo, StyledLogoH1 } from './navbar-styling';

export const Logo: FC = () => {
  const logoText: string = 'KK';

  return (
    <StyledLogo>
      <StyledLogoH1>{logoText}</StyledLogoH1>
    </StyledLogo>
  );
};

export default Logo;
