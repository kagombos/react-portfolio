import React, { lazy, Suspense } from 'react';

const LazyGithubCard = lazy(() => import('./GithubCard'));

const GithubCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGithubCard {...props} />
  </Suspense>
);

export default GithubCard;
