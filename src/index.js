import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import XhrCache from '@spirit-fish/xhr-cache';

XhrCache.setup({
  shouldCache: () => {
    return true;
  },
  shouldLog: () => {
    return true;
  },
});

const AppAsStrict = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  console.log("index.js - WILL HYDRATE");
  hydrate(<AppAsStrict />, rootElement);
} else {
  console.log("index.js - WILL RENDER");
  render(<AppAsStrict />, rootElement);
}
