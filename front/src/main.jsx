import React from 'react';
import ReactDOM from 'react-dom/client';
// import {Auth0Provider} from '@auth0/auth0-react';
import App from './App';
import { Router } from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Auth0Provider
    domain='dev-qfkenpytpsa7t0wy.us.auth0.com'
    clientId='3HDK6mGkSg9wVPQvy7Xm6lPRmpWdbRT1'
    redirectUri= {window.location.origin}
    > */}
      <App />
  {/* </Auth0Provider> */}
  </React.StrictMode>
);