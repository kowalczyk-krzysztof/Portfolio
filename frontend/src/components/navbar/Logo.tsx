import { FC } from 'react';
// Styling
import { StyledLogo, StyledLogoH1 } from './navbar-styling';

export const Logo: FC = () => {
  const logoText: string = 'KK';

  return (
    <StyledLogo data-testid={'logo'}>
      <StyledLogoH1>{logoText}</StyledLogoH1>
    </StyledLogo>
  );
};
