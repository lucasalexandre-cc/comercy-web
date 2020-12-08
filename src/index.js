import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootProviders } from "providers";

ReactDOM.render(
  <RootProviders>
    <App />
  </RootProviders>,
  document.getElementById('root')
);
