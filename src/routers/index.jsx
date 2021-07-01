import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import routerConfig from "./config";
import Loading from "@/components/Loading";

export default () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routerConfig.map((x) => {
            const Comp = lazy(() =>
              import(`../views/${x.component}/index.jsx`)
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
          <Route path="*" component={lazy(() => import(`../views/404.jsx`))} />
          <Redirect path="/" to="/" />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
