import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const app = (
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
   {app},
  </React.StrictMode>,
  document.getElementById('root')
);

