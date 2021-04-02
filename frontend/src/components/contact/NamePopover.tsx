import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledNotification } from './contact-styling';
import { PopoverStyles } from './ContactForm';

export interface NamePopoverProps {
  display: PopoverStyles;
}
export const NamePopover: FC<NamePopoverProps> = ({ display }) => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { enterName } = localization;

  if (display === PopoverStyles.SUCCESS)
    return <StyledNotification>Checkmark</StyledNotification>;
  if (display === PopoverStyles.FAILURE)
    return <StyledNotification>{enterName}</StyledNotification>;
  else return null;
};

export default NamePopover;
