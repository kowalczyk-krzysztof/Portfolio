import { FC } from 'react';
import { StyledCopyright } from './footer-styling';

export const Copyright: FC = () => (
  <StyledCopyright data-testid={'copyright'}>
    <p data-testid={'copyrighttext'}>
      © {new Date().getFullYear()} {`${process.env.REACT_APP_REAL_NAME}`}
    </p>
  </StyledCopyright>
);
