import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Components
import { EmailSendingStyle } from './ContactForm';
// Styling
import {
  StyledEmailNotification,
  StyledDummyContainer,
} from './contact-styling';
import { lightGray, lightGreen, lightRed } from '../../createGlobalStyle';

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
      <StyledEmailNotification color={lightGray}>
        {sendEmailLoading}
      </StyledEmailNotification>
    );

  if (isEmailSent === EmailSendingStyle.SUCCESS)
    return (
      <StyledEmailNotification color={lightGreen}>
        {sendEmailSuccess}
      </StyledEmailNotification>
    );
  if (isEmailSent === EmailSendingStyle.FAILURE)
    return (
      <StyledEmailNotification color={lightRed}>
        {sendEmailFailure}
      </StyledEmailNotification>
    );
  else return <StyledDummyContainer>Invisible</StyledDummyContainer>;
};
