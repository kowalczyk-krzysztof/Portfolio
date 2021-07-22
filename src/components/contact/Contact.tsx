import { FC } from 'react';
// Components
import { ContactForm } from './ContactForm';
import { ContactTitle } from './ContactTitle';
// Stylinng
import { StyledContactContainer } from './contact-styling';

export const Contact: FC = () => {
  return (
    <StyledContactContainer data-testid={'contact'}>
      <ContactTitle />
      <ContactForm />
    </StyledContactContainer>
  );
};
