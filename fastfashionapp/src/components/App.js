import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './homePage.js';
import CheckList from './checklistPage.js';
import FindBrands from './findBrandsPage.js';
import SavedBrands from './savedBrandsPage';

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage impacts={props.impacts}/>} />
      <Route path="find-brands" element={<FindBrands/>} />
      <Route path="saved-brands" element={<SavedBrands />} />
      <Route path="checklist" element={<CheckList />} />
    </Routes>
  );
}

export default App;
