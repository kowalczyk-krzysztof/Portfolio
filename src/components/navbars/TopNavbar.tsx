import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
  Locales,
  localizationSelector,
  SET_LOCALE,
} from '../../features/localization/localizationSlice';
import '../../index.css';

const TopNavbar: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const localization = useSelector(localizationSelector);
  const { navbarItem1 } = localization;

  const localizationHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newLocale = e.currentTarget.value as Locales;
    if (localization.name !== newLocale) dispatch(SET_LOCALE(newLocale));
  };

  return (
    <Navbar bg="primary" variant="dark" sticky="top" className="navBarTop">
      <Navbar.Brand href="#">
        <strong>{navbarItem1}</strong>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button
          variant="primary"
          onClick={localizationHandler}
          value={Locales.ENG}
          size="sm"
        >
          <img
            src={`${process.env.PUBLIC_URL}/flag_ENG.svg`}
            alt="flag_ENG"
            height="25px"
            width="25px"
          />
        </Button>
        <Button
          variant="primary"
          onClick={localizationHandler}
          value={Locales.PL}
          size="sm"
        >
          <img
            src={`${process.env.PUBLIC_URL}/flag_PL.svg`}
            alt="flag_PL"
            height="25px"
            width="25px"
          />
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
