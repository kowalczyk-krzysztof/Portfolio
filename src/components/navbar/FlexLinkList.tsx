import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
// Styling
import { StyledFlexLinkList, StyledLink } from './navbar-styling';
// Variables
import { home, about, contact } from '../../App';

export const FlexLinkList: FC = (): JSX.Element => {
  const localization: Locale = useSelector(localizationSelector);
  const { navbarAbout, navbarContact, navbarHome } = localization;

  return (
    <StyledFlexLinkList data-testid={'flexlinklist'}>
      <StyledLink
        to={home}
        exact={true}
        activeClassName="active"
        aria-label={home}
        data-testid={'flexhomelink'}
      >
        {navbarHome}
      </StyledLink>
      <StyledLink to={about} activeClassName="active" aria-label={about}>
        {navbarAbout}
      </StyledLink>
      <StyledLink to={contact} activeClassName="active" aria-label={contact}>
        {navbarContact}
      </StyledLink>
    </StyledFlexLinkList>
  );
};
