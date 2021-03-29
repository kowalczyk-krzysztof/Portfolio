import React, { FC } from 'react';
import { StyledCopyright } from './footer-styling';

export const Copyright: FC = () => {
  const yearNow = new Date().getFullYear();
  const myName = `${process.env.REACT_APP_REAL_NAME}`;

  return (
    <StyledCopyright>
      <p>
        © {yearNow} {myName}
      </p>
    </StyledCopyright>
  );
};

export default Copyright;
