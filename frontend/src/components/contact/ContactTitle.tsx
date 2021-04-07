import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Stylinng
import {
  StyledContactTitleContainer,
  StyledContactLinkBig,
} from './contact-styling';

import { Linkedin, Twitter } from '@styled-icons/bootstrap';
import { GithubSquare } from '@styled-icons/fa-brands';

export const ContactTitle: FC = () => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { contactH1, contactMeText } = localization;

  const github: string = `${process.env.REACT_APP_GITHUB}`;
  const linkedin: string = `${process.env.REACT_APP_LINKEDIN}`;
  const twitter: string = `${process.env.REACT_APP_TWITTER}`;

  return (
    <StyledContactTitleContainer>
      <h1>{contactH1}</h1>
      <h3>{contactMeText}</h3>
      <StyledContactLinkBig href={github} target="_blank">
        <GithubSquare size="62" title="GitHub" />
      </StyledContactLinkBig>
      <StyledContactLinkBig href={linkedin} target="_blank">
        <Linkedin size="54" color="#0077B5" title="LinkedIn"></Linkedin>
      </StyledContactLinkBig>
      <StyledContactLinkBig href={twitter} target="_blank">
        <Twitter size="54" color="#1DA1F2" title="Twitter"></Twitter>
      </StyledContactLinkBig>
    </StyledContactTitleContainer>
  );
};

export default ContactTitle;
