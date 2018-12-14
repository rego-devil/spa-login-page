import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// import { ErrorBoundary } from './error-boundary';
import { SwitchRoute } from './containers';
import { store } from './redux/store';
import { Layout } from './layout';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <SwitchRoute />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('app')
);
