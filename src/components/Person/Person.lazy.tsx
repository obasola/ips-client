import React, { lazy, Suspense } from 'react';

const LazyPerson = lazy(() => import('./Person'));

const Person = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPerson {...props} />
  </Suspense>
);

export default Person;
