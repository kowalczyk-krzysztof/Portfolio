import React, { FC } from 'react';
import { useSelector } from 'react-redux';
// Redux
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
// import { Check } from '@styled-icons/bootstrap';
import {
  LoadingButton,
  SuccessButton,
  FailedButton,
  DefaultButton,
} from './contact-styling';

import { ButtonStyle } from './ContactForm';

export interface SubmitButtonProps {
  type: string;
  style: ButtonStyle;
  form: string;
}
export const SubmitButton: FC<SubmitButtonProps> = ({ style, form }) => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { buttonSend } = localization;

  if (style === ButtonStyle.LOADING)
    return (
      <LoadingButton type="submit" form={form} disabled={true}>
        Loading
      </LoadingButton>
    );
  if (style === ButtonStyle.SUCCESS)
    return (
      <SuccessButton type="submit" form={form} disabled={true}>
        Success
      </SuccessButton>
    );
  if (style === ButtonStyle.FAILURE)
    return (
      <FailedButton type="submit" form={form} disabled={true}>
        Failure
      </FailedButton>
    );
  else
    return (
      <DefaultButton type="submit" form={form}>
        {buttonSend}
      </DefaultButton>
    );
};

export default SubmitButton;
