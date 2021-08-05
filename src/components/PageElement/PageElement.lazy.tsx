import React, { lazy, Suspense } from 'react';

const LazyPageElement = lazy(() => import('./PageElement'));

const PageElement = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPageElement {...props} />
  </Suspense>
);

export default PageElement;
