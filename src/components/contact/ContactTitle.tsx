import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Stylinng
import {
  StyledContactTitleContainer,
  StyledContactLinkBig,
  StyledContactLinkContainer,
  StyledContactLinkWrapper,
} from './contact-styling';

import { Linkedin, Twitter, Facebook } from '@styled-icons/bootstrap';
import { GithubSquare } from '@styled-icons/fa-brands';

export const ContactTitle: FC = () => {
  // Localization
  const localization: Locale = useSelector(localizationSelector);
  const { contactH1, contactMeText } = localization;

  const github: string = `${process.env.REACT_APP_GITHUB}`;
  const linkedin: string = `${process.env.REACT_APP_LINKEDIN}`;
  const twitter: string = `${process.env.REACT_APP_TWITTER}`;
  const facebook: string = `${process.env.REACT_APP_FACEBOOK}`;

  return (
    <StyledContactTitleContainer data-testid={'contacttitle'}>
      <h1 data-testid={'contacttitletext'}>{contactH1}</h1>
      <h2>{contactMeText}</h2>
      <StyledContactLinkContainer>
        <StyledContactLinkWrapper>
          <StyledContactLinkBig href={github} target="_blank" rel="noopener">
            <GithubSquare size="62" color="#211f1f" title="GitHub" />
          </StyledContactLinkBig>
          <StyledContactLinkBig href={linkedin} target="_blank" rel="noopener">
            <Linkedin size="54" color="#0077B5" title="LinkedIn"></Linkedin>
          </StyledContactLinkBig>
          <StyledContactLinkBig href={twitter} target="_blank" rel="noopener">
            <Twitter size="54" color="#1DA1F2" title="Twitter"></Twitter>
          </StyledContactLinkBig>
          <StyledContactLinkBig href={facebook} target="_blank" rel="noopener">
            <Facebook size="54" color="#4267B2" title="Facebook"></Facebook>
          </StyledContactLinkBig>
        </StyledContactLinkWrapper>
      </StyledContactLinkContainer>
    </StyledContactTitleContainer>
  );
};
