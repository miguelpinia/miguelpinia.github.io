import React from 'react';
import ReactDOM from 'react-dom';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assests/font-awesome/css/all.css';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const engine = new Styletron();

root.render(
  <Router>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
