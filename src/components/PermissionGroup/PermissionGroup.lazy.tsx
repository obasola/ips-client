import React, { lazy, Suspense } from 'react';

const LazyPermissionGroup = lazy(() => import('./PermissionGroup'));

const PermissionGroup = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPermissionGroup {...props} />
  </Suspense>
);

export default PermissionGroup;
