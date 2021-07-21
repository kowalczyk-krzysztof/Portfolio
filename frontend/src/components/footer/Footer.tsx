import { FC } from 'react';
// Components
import { ContactLinks } from './ContactLinks';
import { Copyright } from './Copyright';
// Styling
import { StyledFooter } from './footer-styling';

export const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter data-testid={'footer'}>
      <ContactLinks />
      <Copyright />
    </StyledFooter>
  );
};
