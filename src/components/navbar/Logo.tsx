import { FC } from 'react';
// Styling
import { StyledLogo } from './navbar-styling';

export const Logo: FC = () => {
  return (
    <StyledLogo data-testid={'logo'}>
      <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="logo"
        role="button"
        aria-label="logo"
      ></img>
    </StyledLogo>
  );
};
