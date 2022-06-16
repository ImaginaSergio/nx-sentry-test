import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import App from './App';

import './index.css';

Sentry.init({
  release: 'nx-test-sentry@1.0.0',
  environment: process.env.NODE_ENV,
  integrations: [new BrowserTracing()],
  dsn: 'https://97a21dc56bca487cac7f295197f82c84@o1267595.ingest.sentry.io/6509740',

  tracesSampleRate: 0.5,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
