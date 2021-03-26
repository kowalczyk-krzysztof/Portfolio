import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

import {
  Locales,
  localizationSelector,
  SET_LOCALE,
} from '../../features/localization/localizationSlice';
import styled from 'styled-components/macro';

const Navbar: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const localization = useSelector(localizationSelector);
  const { navbarItem1 } = localization;

  // Thanks to currying I can pass a value in onClick
  const localizationHandler = (language: Locales) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const newLocale = language as Locales;

    if (localization.name !== newLocale) dispatch(SET_LOCALE(newLocale));
  };

  return (
    <NavbarContent>
      <strong>{navbarItem1}</strong>
      <NavbarDropdown>
        <FontAwesomeLanguage icon={faLanguage} size="2x"></FontAwesomeLanguage>
        <NavbarDropdownContent>
          <a href="!#" onClick={localizationHandler(Locales.PL)}>
            {Locales.PL}
          </a>
          <a href="!#" onClick={localizationHandler(Locales.ENG)}>
            {Locales.ENG}
          </a>
        </NavbarDropdownContent>
      </NavbarDropdown>
    </NavbarContent>
  );
};

export default Navbar;

const FontAwesomeLanguage = styled(FontAwesomeIcon)`
  :hover {
    color: red;
  }
`;

const NavbarContent = styled.div`
  width: 100%;
`;

const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
`;

const colorBlack: string = 'black';

const NavbarDropdown = styled.div`
  position: relative;
  float: right;
  &:hover ${NavbarDropdownContent} {
    display: block;

    a {
      color: ${colorBlack};
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
  }
`;
