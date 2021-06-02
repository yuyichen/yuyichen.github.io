import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import routerConfig from './config';

export default () => {
  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <span>loading...</span>
          </div>
        }
      >
        <Switch>
          {routerConfig.map((x) => {
            const Comp = lazy(
              () => import(`../views/${x.component}/index.jsx`)
            );
            return (
              <Route
                key={x.path}
                exact
                path={x.path}
                // React.lazy 目前只支持默认导出（default exports）
                // https://zh-hans.reactjs.org/docs/code-splitting.html
                render={(props) => <Comp {...x.componentProps} {...props} />}
              />
            );
          })}
          <Redirect path="/" to="/"/>
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
