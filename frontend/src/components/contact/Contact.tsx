import React, { FC } from 'react';
// Components
import ContactForm from './ContactForm';
import ContactTitle from './ContactTitle';
// Stylinng
import { StyledContainer } from './contact-styling';

export const Contact: FC = () => {
  return (
    <StyledContainer>
      <ContactTitle />
      <ContactForm />
    </StyledContainer>
  );
};

export default Contact;
