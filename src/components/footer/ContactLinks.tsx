import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styling
import { StyledContactList } from './footer-styling';

const ContactLinks: FC = (): JSX.Element => {
  const localization = useSelector(localizationSelector);

  const { navbarContact } = localization;

  const githubName: string = `${process.env.REACT_APP_GITHUB_USERNAME}`;
  const githubLink: string = `https://github.com/${githubName}`;
  const myEmail: string = `${process.env.REACT_APP_EMAIL}`;

  return (
    <StyledContactList>
      <span>{navbarContact}</span>

      <a href={githubLink}>
        <FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon>
      </a>
      <a href={`mailto:${myEmail}`}>
        <FontAwesomeIcon icon="envelope"></FontAwesomeIcon>
      </a>
    </StyledContactList>
  );
};

export default ContactLinks;
