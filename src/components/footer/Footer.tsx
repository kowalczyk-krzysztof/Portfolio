import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BottomNavbar: FC = (): JSX.Element => {
  return (
    <footer>
      <div>
        <p>Powered by: / ignore this i'll make this footer proper later</p>
        <FontAwesomeIcon
          icon={['fab', 'react']}
          size="2x"
          style={{ color: '#61dbfb' }}
          mask={['fas', 'circle']}
          flip="horizontal"
        ></FontAwesomeIcon>
      </div>
    </footer>
  );
};

export default BottomNavbar;
