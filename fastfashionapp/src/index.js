import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

import IMPACTS from './data/impacts.json';
import WHYSUSTAINABLE from './data/whysustainable.json';
import BRANDS from './data/brands.json';
import CHECKLIST from './data/checklist.json';
import STYLES from './data/styles.json';
import MATERIALS from "./data/materials.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App impacts={IMPACTS} brands={BRANDS} whySustainable={WHYSUSTAINABLE} checklist={CHECKLIST} styles={STYLES} materials={MATERIALS}/>
  </BrowserRouter>
);
