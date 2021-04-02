import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Stylinng
import { StyledTitle } from './contact-styling';

export const ContactTitle: FC = () => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { contactH1 } = localization;

  return <StyledTitle>{contactH1}</StyledTitle>;
};

export default ContactTitle;
