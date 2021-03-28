import React, { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  SET_THEME_DARK,
  SET_THEME_LIGHT,
} from '../../features/themetoggle/themeToggleSlice';
// Styling
import { StyledThemeToggle } from './navbar-styling';

export const ThemeToggle: FC = () => {
  const dispatch = useDispatch();

  const themeToggler = (e: MouseEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    if (isChecked === true) dispatch(SET_THEME_DARK());
    if (isChecked === false) dispatch(SET_THEME_LIGHT());
  };

  return (
    <StyledThemeToggle>
      <input type="checkbox" onClick={themeToggler}></input>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
