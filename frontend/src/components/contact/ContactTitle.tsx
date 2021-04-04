import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Stylinng
import {
  StyledContactTitle,
  StyledContactText,
  StyledContactTitleContainer,
} from './contact-styling';

export const ContactTitle: FC = () => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { contactH1, contactMeText } = localization;

  return (
    <StyledContactTitleContainer>
      <StyledContactTitle>{contactH1}</StyledContactTitle>
      <StyledContactText>{contactMeText}</StyledContactText>
    </StyledContactTitleContainer>
  );
};

export default ContactTitle;
