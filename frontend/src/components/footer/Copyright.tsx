import { FC } from 'react';
// Styling
import { StyledCopyright } from './footer-styling';

export const Copyright: FC = () => {
  const yearNow: number = new Date().getFullYear();
  const myName: string = `${process.env.REACT_APP_REAL_NAME}`;

  return (
    <StyledCopyright>
      <p>
        © {yearNow} {myName}
      </p>
    </StyledCopyright>
  );
};
