import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './homePage.js';
import CheckList from './checklistPage.js';
import FindBrands from './findBrandsPage.js';
import SavedBrands from './savedBrandsPage';

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage impacts={props.impacts} whySustainable={props.whySustainable}/>} />
      <Route path="find-brands" element={<FindBrands brands={props.brands} />} />
      <Route path="saved-brands" element={<SavedBrands savedBrands={props.savedBrands} />} />
      <Route path="checklist" element={<CheckList rules={props.checklist} />} />
    </Routes>
  );
}

export default App;
