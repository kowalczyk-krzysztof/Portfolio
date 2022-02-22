import { FC } from 'react';
import { StyledLogo } from './navbar-styling';

export const Logo: FC = () => (
  <StyledLogo data-testid={'logo'}>
    <img
      src={`${process.env.PUBLIC_URL}/logo.png`}
      alt="logo"
      role="button"
      aria-label="logo"
      height="50px"
      width="50px"
    ></img>
  </StyledLogo>
);
