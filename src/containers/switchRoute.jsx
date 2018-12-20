import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

const SwitchRoute = () => (
  <Switch>
    {
      routes.map((route) => {
        const Component = route.component;
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            render={props => (
              <Component
                {...props}
                redirect={route.redirect}
                innerComponent={route.innerComponent}
              />
            )}
          />
        );
      })
    }
  </Switch>
);

export default SwitchRoute;
