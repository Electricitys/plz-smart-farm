import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-virtualized/styles.css';
import "react-datepicker/dist/react-datepicker.css";
import {
  BrowserRouter
} from "react-router-dom";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { FeathersProvider } from './components/feathers';

ReactDOM.render(
  // <React.StrictMode>
  <FeathersProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter >
  </FeathersProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
