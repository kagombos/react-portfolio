import React, { lazy, Suspense } from 'react';

const LazyCard = lazy(() => import('./Card'));

const Card = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCard expanded={false} {...props} />
  </Suspense>
);

export default Card;
