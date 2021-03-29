import React, { FC } from 'react';
// Components
import ContactLinks from './ContactLinks';
import Copyright from './Copyright';
// Styling
import { StyledFooter } from './footer-styling';

export const BottomNavbar: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <ContactLinks />
      <Copyright />
    </StyledFooter>
  );
};

export default BottomNavbar;
