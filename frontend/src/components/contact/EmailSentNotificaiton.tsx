import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledEmailNotification } from './contact-styling';
import { EmailSendingStyle } from './ContactForm';

export interface EmailSentNotificationProps {
  isEmailSent: EmailSendingStyle;
}
export const EmailSentNotification: FC<EmailSentNotificationProps> = ({
  isEmailSent,
}) => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { sendEmailFailure, sendEmailSuccess, sendEmailLoading } = localization;

  if (isEmailSent === EmailSendingStyle.LOADING)
    return (
      <StyledEmailNotification>{sendEmailLoading}</StyledEmailNotification>
    );

  if (isEmailSent === EmailSendingStyle.SUCCESS)
    return (
      <StyledEmailNotification>{sendEmailSuccess}</StyledEmailNotification>
    );
  if (isEmailSent === EmailSendingStyle.FAILURE)
    return (
      <StyledEmailNotification>{sendEmailFailure}</StyledEmailNotification>
    );
  else return null;
};

export default EmailSentNotification;
