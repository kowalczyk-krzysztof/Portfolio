import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledEmailNotificaiton } from './contact-styling';
import { StateStyle } from './ContactForm';

export interface EmailSentNotificationProps {
  isEmailSent: StateStyle;
}
export const EmailSentNotification: FC<EmailSentNotificationProps> = ({
  isEmailSent,
}) => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { sendEmailFailure, sendEmailSuccess, sendEmailLoading } = localization;

  if (isEmailSent === StateStyle.LOADING)
    return (
      <StyledEmailNotificaiton>{sendEmailLoading}</StyledEmailNotificaiton>
    );

  if (isEmailSent === StateStyle.SUCCESS)
    return (
      <StyledEmailNotificaiton>{sendEmailSuccess}</StyledEmailNotificaiton>
    );
  if (isEmailSent === StateStyle.FAILURE)
    return (
      <StyledEmailNotificaiton>{sendEmailFailure}</StyledEmailNotificaiton>
    );
  else return null;
};

export default EmailSentNotification;
