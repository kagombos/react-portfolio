import React, { lazy, Suspense } from 'react';

const LazyHeaderButton = lazy(() => import('./HeaderButton'));

const HeaderButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeaderButton {...props} />
  </Suspense>
);

export default HeaderButton;
