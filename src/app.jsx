import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
// import { ErrorBoundary } from './error-boundary';
import {Routes} from './routes';
import {store} from './redux/store';
import { Layout } from './layout';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('app'),
);