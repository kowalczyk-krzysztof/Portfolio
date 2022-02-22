import { FC } from 'react';
import { ContactForm } from './ContactForm';
import { ContactTitle } from './ContactTitle';
import { StyledContactContainer } from './contact-styling';

export const Contact: FC = () => (
  <StyledContactContainer data-testid={'contact'}>
    <ContactTitle />
    <ContactForm />
  </StyledContactContainer>
);
