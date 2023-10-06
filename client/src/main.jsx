import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext.jsx';

//259956748847-ojsnsm1ago1oh63qu0i5sdnfvc3t2n4c.apps.googleusercontent.com
//537898112072-ld99b41tpnpsb9k6lchj9h0krm3hi4bg.apps.googleusercontent.com
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="259956748847-llkt4652t3jgf9veeh42u5q1u9c0kpor.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  </GoogleOAuthProvider>
);