import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import {
  StyledEmailNotification,
  StyledDummyContainer,
} from './contact-styling';
import { menusTextColor } from '../../createGlobalStyle';
// Components
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
      <StyledEmailNotification color={menusTextColor}>
        {sendEmailLoading}
      </StyledEmailNotification>
    );

  if (isEmailSent === EmailSendingStyle.SUCCESS)
    return (
      <StyledEmailNotification color="green">
        {sendEmailSuccess}
      </StyledEmailNotification>
    );
  if (isEmailSent === EmailSendingStyle.FAILURE)
    return (
      <StyledEmailNotification color="red">
        {sendEmailFailure}
      </StyledEmailNotification>
    );
  else return <StyledDummyContainer>Invisible</StyledDummyContainer>;
};

export default EmailSentNotification;
