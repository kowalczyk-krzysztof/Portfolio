import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledNotification } from './contact-styling';
import { PopoverStyles } from './ContactForm';

export interface MessagePopoverProps {
  display: PopoverStyles;
}
export const MessagePopover: FC<MessagePopoverProps> = ({ display }) => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { enterMessage } = localization;

  if (display === PopoverStyles.SUCCESS)
    return <StyledNotification>Checkmark</StyledNotification>;
  if (display === PopoverStyles.FAILURE)
    return <StyledNotification>{enterMessage}</StyledNotification>;
  else return null;
};

export default MessagePopover;
