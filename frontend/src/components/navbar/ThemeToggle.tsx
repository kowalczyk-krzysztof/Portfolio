import React, { FC, MouseEvent } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import {
  SET_THEME_DARK,
  SET_THEME_LIGHT,
} from '../../features/themetoggle/themeToggleSlice';
// Styling
import { StyledThemeToggle, StyledThemeToggleSlider } from './navbar-styling';

export const ThemeToggle: FC = () => {
  const dispatch = useDispatch();

  const themeToggler = (e: MouseEvent<HTMLInputElement>): void => {
    const isChecked: boolean = e.currentTarget.checked;
    if (isChecked === true) dispatch(SET_THEME_DARK());
    if (isChecked === false) dispatch(SET_THEME_LIGHT());
  };

  return (
    <StyledThemeToggle>
      <StyledThemeToggleSlider
        type="checkbox"
        aria-label="Theme toggle"
        onClick={themeToggler}
      ></StyledThemeToggleSlider>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
