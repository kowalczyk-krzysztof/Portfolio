import React, { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import '../../index.css';

export const BottomNavbar: FC = () => {
  return (
    <Navbar
      bg="secondary"
      variant="dark"
      fixed="bottom"
      className="navBarBottom"
    >
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="navBarLink"> Powered by:</Navbar.Text>{' '}
        <Nav>
          <FontAwesomeIcon
            icon={faReact}
            size="2x"
            color="#61dbfb"
          ></FontAwesomeIcon>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BottomNavbar;
