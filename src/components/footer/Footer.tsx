import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BottomNavbar: FC = (): JSX.Element => {
  return (
    <footer>
      <div>
        <p>Powered by:</p>
        <FontAwesomeIcon
          icon="react"
          size="2x"
          color="#61dbfb"
        ></FontAwesomeIcon>
      </div>
    </footer>
  );
};

export default BottomNavbar;
