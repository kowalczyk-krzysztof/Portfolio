import { FC } from 'react';
// Styling
import { StyledCopyright } from './footer-styling';

export const Copyright: FC = () => {
  const yearNow: number = new Date().getFullYear();
  const myName: string = `${process.env.REACT_APP_REAL_NAME}`;

  return (
    <StyledCopyright data-testid={'copyright'}>
      <p data-testid={'copyrighttext'}>
        © {yearNow} {myName}
      </p>
    </StyledCopyright>
  );
};
