import { FC, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { localizationSelector } from '../../features/localization/localizationSlice';
import { Locale } from '../../features/localization/locales';
import { MenuDisplay } from './Navbar';
import { StyledLinksDropdown, StyledLink } from './navbar-styling';
import { home, contact } from '../../App';

type Props = {
  readonly display: MenuDisplay;
  readonly setDisplay: Dispatch<SetStateAction<MenuDisplay>>;
};

export const LinksDropdown: FC<Props> = ({ display, setDisplay }) => {
  const localization: Locale = useSelector(localizationSelector);
  const { navbarContact, navbarHome } = localization;

  /* My previous method of closing menu on clicking away had a big drawback - rapid clicking links wouldn't work. 
    So now I add a reference to the dropdown menu container and an event listener to document. If ref.current doesn't contain the component then close the menu.
  */

  useEffect(() => {
    document.addEventListener('mousedown', clickAway);
  });
  // Ref is for handling the dropdown collapsing
  const ref = useRef<HTMLDivElement>(null);

  const clickAway = (e: MouseEvent): void => {
    if (display === MenuDisplay.NONE) return;
    if (ref.current && !ref.current.contains(e.target as Node))
      setDisplay(MenuDisplay.NONE);
    return document.removeEventListener('mousedown', clickAway);
  };
  // Need this so menu gets closed after redirecting
  const closeMenuWhenRedirected = (): void => {
    if (display === MenuDisplay.BLOCK) setDisplay(MenuDisplay.NONE);
  };

  return (
    <StyledLinksDropdown display={display} ref={ref} data-testid={'linklist'}>
      <StyledLink
        to={home}
        exact={true}
        activeClassName="active"
        onClick={closeMenuWhenRedirected}
        aria-label={home}
        data-testid={'homelink'}
      >
        {navbarHome}
      </StyledLink>
      <StyledLink
        to={contact}
        activeClassName="active"
        onClick={closeMenuWhenRedirected}
        aria-label={contact}
      >
        {navbarContact}
      </StyledLink>
    </StyledLinksDropdown>
  );
};
