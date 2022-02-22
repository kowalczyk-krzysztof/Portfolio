import { FC } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import {
  StyledContactTitleContainer,
  StyledContactLinkBig,
  StyledContactLinkContainer,
  StyledContactLinkWrapper,
} from './contact-styling';
import { Linkedin, Facebook } from '@styled-icons/bootstrap';
import { GithubSquare } from '@styled-icons/fa-brands';

export const ContactTitle: FC = () => {
  const localization: Locale = useSelector(localizationSelector);
  const { contactH1, contactMeText } = localization;

  const github = `${process.env.REACT_APP_GITHUB}`;
  const linkedin = `${process.env.REACT_APP_LINKEDIN}`;
  const facebook = `${process.env.REACT_APP_FACEBOOK}`;

  return (
    <StyledContactTitleContainer data-testid={'contacttitle'}>
      <h1 data-testid={'contacttitletext'}>{contactH1}</h1>
      <h2>{contactMeText}</h2>
      <StyledContactLinkContainer>
        <StyledContactLinkWrapper>
          <StyledContactLinkBig href={github} target="_blank" rel="noopener">
            <GithubSquare
              size="62"
              color="#211f1f"
              title="GitHub"
              className="contacticons"
            />
          </StyledContactLinkBig>
          <StyledContactLinkBig href={linkedin} target="_blank" rel="noopener">
            <Linkedin
              size="54"
              color="#0077B5"
              title="LinkedIn"
              className="contacticons"
            ></Linkedin>
          </StyledContactLinkBig>
          <StyledContactLinkBig href={facebook} target="_blank" rel="noopener">
            <Facebook
              size="54"
              color="#4267B2"
              title="Facebook"
              className="contacticons"
            ></Facebook>
          </StyledContactLinkBig>
        </StyledContactLinkWrapper>
      </StyledContactLinkContainer>
    </StyledContactTitleContainer>
  );
};
