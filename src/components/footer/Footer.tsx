import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const BottomNavbar: FC = (): JSX.Element => {
  return (
    <footer>
      <div>
        <p>Powered by:</p>
        <FontAwesomeIcon
          icon={faReact}
          size="2x"
          color="#61dbfb"
        ></FontAwesomeIcon>
      </div>
    </footer>
  );
};

export default BottomNavbar;
