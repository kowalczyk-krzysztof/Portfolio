import React, { FC } from 'react';
// Components
import LanguageDropdownItems from './LanguageDropdownItems';
// Styling
import { StyledLanguageIcon, StyledDropdown } from './navbar-styling';

const LanguageDropdown: FC = (): JSX.Element => {
  return (
    <StyledDropdown>
      <StyledLanguageIcon icon="language" size="2x" />
      <LanguageDropdownItems />
    </StyledDropdown>
  );
};

export default LanguageDropdown;
