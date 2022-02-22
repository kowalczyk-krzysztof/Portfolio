import { FC } from 'react';
import { ContactLinks } from './ContactLinks';
import { Copyright } from './Copyright';
import { StyledFooter } from './footer-styling';

export const Footer: FC = () => (
  <StyledFooter data-testid={'footer'}>
    <ContactLinks />
    <Copyright />
  </StyledFooter>
);
