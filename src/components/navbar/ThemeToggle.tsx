import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  SET_THEME_DARK,
  SET_THEME_LIGHT,
} from '../../features/themetoggle/themeToggleSlice';
import './test.css';
// Styling
import { StyledThemeToggle } from './navbar-styling';

export const ThemeToggle: FC = () => {
  const dispatch = useDispatch();

  const themeToggler = (e: React.MouseEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    if (isChecked === true) dispatch(SET_THEME_DARK());
    if (isChecked === false) dispatch(SET_THEME_LIGHT());
  };

  return (
    <StyledThemeToggle>
      <label className="switch">
        <input type="checkbox" onClick={themeToggler}></input>
        <span className="slider round"></span>
      </label>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
