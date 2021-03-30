import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
// import { localizationSelector } from '../../features/localization/localizationSlice';

const Homepage: FC = (): JSX.Element => {
  // const localization = useSelector(localizationSelector);

  return (
    <main>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
        distinctio odio vero itaque porro qui, earum modi optio eos voluptatem
        animi ea nobis deserunt eligendi minus praesentium totam vitae esse
        officiis, consequuntur magni facilis saepe reprehenderit! Tempore
        voluptate officiis vel delectus iure voluptatibus numquam deserunt
        debitis autem! Aliquam, suscipit temporibus.
      </p>
    </main>
  );
};

export default Homepage;
