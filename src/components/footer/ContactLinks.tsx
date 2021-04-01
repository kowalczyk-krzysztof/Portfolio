import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  localizationSelector,
  Locale,
} from '../../features/localization/localizationSlice';
// Styling
import { Envelope } from '@styled-icons/fa-regular/';
import { Github } from '@styled-icons/fa-brands';
import { FooterIconWrapper, StyledContactList } from './footer-styling';

const ContactLinks: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);

  const { navbarContact }: { navbarContact: string } = localization;

  const githubName: string = `${process.env.REACT_APP_GITHUB_USERNAME}`;
  const githubLink: string = `https://github.com/${githubName}`;
  const myEmail: string = `${process.env.REACT_APP_EMAIL}`;

  return (
    <StyledContactList>
      <p>{navbarContact}</p>
      <FooterIconWrapper>
        <a href={githubLink}>
          <Github
            size="32"
            title="
        GitHub"
          />
        </a>
        <a href={`mailto:${myEmail}`}>
          <Envelope size="32" title="Email Address" />
        </a>
      </FooterIconWrapper>
    </StyledContactList>
  );
};

export default ContactLinks;
