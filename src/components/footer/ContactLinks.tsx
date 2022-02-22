import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import { Envelope } from '@styled-icons/fa-regular/';
import { Github } from '@styled-icons/fa-brands';
import { Linkedin, Facebook } from '@styled-icons/bootstrap';
import { FooterIconWrapper, StyledContactLink } from './footer-styling';
import { smallIcon } from '../../createGlobalStyle';

export const ContactLinks: FC = () => {
  const localization: Locale = useSelector(localizationSelector);

  const { navbarContact } = localization;

  const github = `${process.env.REACT_APP_GITHUB}`;
  const myEmail = `${process.env.REACT_APP_EMAIL}`;
  const linkedin = `${process.env.REACT_APP_LINKEDIN}`;
  const facebook = `${process.env.REACT_APP_FACEBOOK}`;

  return (
    <Fragment>
      <p data-testid={'footercontacttext'}>{navbarContact}:</p>
      <FooterIconWrapper data-testid={'footercontact'}>
        <StyledContactLink href={github} target="_blank" rel="noopener">
          <Github size={smallIcon} title="GitHub" />
        </StyledContactLink>
        <StyledContactLink href={linkedin} target="_blank" rel="noopener">
          <Linkedin size={smallIcon} title="LinkedIn"></Linkedin>
        </StyledContactLink>
        <StyledContactLink href={facebook} target="_blank" rel="noopener">
          <Facebook size={smallIcon} title="Facebook"></Facebook>
        </StyledContactLink>
        <StyledContactLink href={`mailto:${myEmail}`}>
          <Envelope size={smallIcon} title="Email Address" />
        </StyledContactLink>
      </FooterIconWrapper>
    </Fragment>
  );
};
