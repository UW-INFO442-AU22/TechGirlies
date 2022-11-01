import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

import IMPACTS from './data/impacts.json';
import WHYSUSTAINABLE from './data/whysustainable.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App impacts={IMPACTS} whySustainable={WHYSUSTAINABLE} />
  </BrowserRouter>
);
