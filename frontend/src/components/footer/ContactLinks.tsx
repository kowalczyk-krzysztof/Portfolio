import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { Envelope } from '@styled-icons/fa-regular/';
import { Github } from '@styled-icons/fa-brands';
import { Linkedin, Twitter } from '@styled-icons/bootstrap';
import {
  FooterIconWrapper,
  StyledContactList,
  StyledContactLink,
} from './footer-styling';

const ContactLinks: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);

  const { navbarContact } = localization;

  const github: string = `${process.env.REACT_APP_GITHUB}`;
  const myEmail: string = `${process.env.REACT_APP_EMAIL}`;
  const linkedin: string = `${process.env.REACT_APP_LINKEDIN}`;
  const twitter: string = `${process.env.REACT_APP_TWITTER}`;

  // Can't use <Link> with external links
  return (
    <StyledContactList>
      <p>{navbarContact}</p>
      <FooterIconWrapper>
        <StyledContactLink href={github}>
          <Github
            size="24"
            title="
        GitHub"
          />
        </StyledContactLink>
        <StyledContactLink href={linkedin}>
          <Linkedin size="24" title="Linkedin"></Linkedin>
        </StyledContactLink>

        <StyledContactLink href={twitter}>
          <Twitter size="24" title="Twitter"></Twitter>
        </StyledContactLink>

        <StyledContactLink href={`mailto:${myEmail}`}>
          <Envelope size="24" title="Email Address" />
        </StyledContactLink>
      </FooterIconWrapper>
    </StyledContactList>
  );
};

export default ContactLinks;
