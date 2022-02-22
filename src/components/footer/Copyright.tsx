import { FC } from 'react';
import { StyledCopyright } from './footer-styling';

export const Copyright: FC = () => {
  const yearNow = new Date().getFullYear();
  const myName = `${process.env.REACT_APP_REAL_NAME}`;
  return (
    <StyledCopyright data-testid={'copyright'}>
      <p data-testid={'copyrighttext'}>
        © {yearNow} {myName}
      </p>
    </StyledCopyright>
  );
};
