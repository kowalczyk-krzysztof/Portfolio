import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_THEME_DARK,
  SET_THEME_LIGHT,
} from '../../features/themetoggle/themeToggleSlice';
import { menuToggleSelector } from '../../features/menutoggle/menuToggleSlice';
// Styling
import { StyledThemeToggle } from './navbar-styling';

export const ThemeToggle: FC = () => {
  const dispatch = useDispatch();
  const display = useSelector(menuToggleSelector);

  const themeToggler = (e: MouseEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    if (isChecked === true) dispatch(SET_THEME_DARK());
    if (isChecked === false) dispatch(SET_THEME_LIGHT());
  };

  return (
    <StyledThemeToggle id={display}>
      <label>
        <input type="checkbox" onClick={themeToggler}></input>
      </label>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
