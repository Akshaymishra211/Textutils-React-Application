import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {App, App2} from './App'; for multiple components when default is not used
import App from './App'; // for single components when default is used
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
