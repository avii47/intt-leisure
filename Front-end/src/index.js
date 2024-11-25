import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'
import { MobileViewProvider } from './contexts/MobileViewContext';
import { HelmetProvider } from 'react-helmet-async'
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const rootElement = document.getElementById('root');
const AppComponent = (
  <Router>
    <React.StrictMode>
      <HelmetProvider>
        <MobileViewProvider>
          <App />
        </MobileViewProvider>
      </HelmetProvider>
    </React.StrictMode>
  </Router>
);

if (rootElement.hasChildNodes()) {
  hydrate(AppComponent, rootElement);
} else {
  render(AppComponent, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

