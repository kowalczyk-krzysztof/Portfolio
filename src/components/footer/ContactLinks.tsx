import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  localizationSelector,
  Locale,
} from '../../features/localization/localizationSlice';
// Styling
import {
  StyledContactList,
  StyledEnvelope,
  StyledGithub,
} from './footer-styling';

const ContactLinks: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);

  const { navbarContact }: { navbarContact: string } = localization;

  const githubName: string = `${process.env.REACT_APP_GITHUB_USERNAME}`;
  const githubLink: string = `https://github.com/${githubName}`;
  const myEmail: string = `${process.env.REACT_APP_EMAIL}`;

  return (
    <StyledContactList>
      <span>{navbarContact}</span>

      <a href={githubLink}>
        <StyledGithub
          size="20"
          title="
        GitHub"
        />
      </a>
      <a href={`mailto:${myEmail}`}>
        <StyledEnvelope size="20" title="Email Address" />
      </a>
    </StyledContactList>
  );
};

export default ContactLinks;
