import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import { EmailSendingStyle } from './ContactForm';
import { StyledEmailNotification } from './contact-styling';
import { lightGray, lightGreen, lightRed } from '../../createGlobalStyle';

type Props = {
  readonly isEmailSent: EmailSendingStyle | string;
};
export const EmailSentNotification: FC<Props> = ({ isEmailSent }) => {
  const localization: Locale = useSelector(localizationSelector);
  const { sendEmailFailure, sendEmailSuccess, sendEmailLoading } = localization;
  const [color, setColor] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (isEmailSent === EmailSendingStyle.LOADING) {
      setColor(lightGray);
      setText(sendEmailLoading);
    } else if (isEmailSent === EmailSendingStyle.SUCCESS) {
      setColor(lightGreen);
      setText(sendEmailSuccess);
    } else if (isEmailSent === EmailSendingStyle.FAILURE) {
      setColor(lightRed);
      setText(sendEmailFailure);
    } else {
      setColor('');
      setText('');
    }
  }, [isEmailSent, sendEmailFailure, sendEmailSuccess, sendEmailLoading]);

  return (
    <StyledEmailNotification
      color={color}
      data-testid={'emailsentnotification'}
    >
      {text}
    </StyledEmailNotification>
  );
};
