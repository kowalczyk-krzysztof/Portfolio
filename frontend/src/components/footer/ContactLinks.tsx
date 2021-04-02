import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { Envelope } from '@styled-icons/fa-regular/';
import { Github } from '@styled-icons/fa-brands';
import {
  FooterIconWrapper,
  StyledContactList,
  StyledContactLink,
} from './footer-styling';

const ContactLinks: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);

  const { navbarContact } = localization;

  const githubName: string = `${process.env.REACT_APP_GITHUB_USERNAME}`;
  const githubLink: string = `https://github.com/${githubName}`;
  const myEmail: string = `${process.env.REACT_APP_EMAIL}`;

  // Can't use <Link> with external links
  return (
    <StyledContactList>
      <p>{navbarContact}</p>
      <FooterIconWrapper>
        <StyledContactLink href={githubLink}>
          <Github
            size="24"
            title="
        GitHub"
          />
        </StyledContactLink>
        <StyledContactLink href={`mailto:${myEmail}`}>
          <Envelope size="24" title="Email Address" />
        </StyledContactLink>
      </FooterIconWrapper>
    </StyledContactList>
  );
};

export default ContactLinks;
