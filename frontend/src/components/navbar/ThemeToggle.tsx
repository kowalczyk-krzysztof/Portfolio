import React, { FC, MouseEvent } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_THEME_DARK,
  SET_THEME_LIGHT,
  themeSelector,
  ThemeProps,
} from '../../features/themetoggle/themeToggleSlice';
// Styling
import { StyledThemeToggle, StyledThemeToggleSlider } from './navbar-styling';

export const ThemeToggle: FC = () => {
  const theme: ThemeProps = useSelector(themeSelector);
  const { toggle } = theme;
  const dispatch = useDispatch();

  const themeToggler = (e: MouseEvent<HTMLInputElement>): void => {
    const isChecked: boolean = e.currentTarget.checked;
    if (isChecked === true) dispatch(SET_THEME_DARK());
    if (isChecked === false) dispatch(SET_THEME_LIGHT());
  };

  // This toggle check is needed so everything works properly with redux persist
  return (
    <StyledThemeToggle>
      {toggle === false ? (
        <StyledThemeToggleSlider
          type="checkbox"
          aria-label="Theme toggle"
          onClick={themeToggler}
        ></StyledThemeToggleSlider>
      ) : (
        <StyledThemeToggleSlider
          checked
          type="checkbox"
          aria-label="Theme toggle"
          onClick={themeToggler}
        ></StyledThemeToggleSlider>
      )}
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
