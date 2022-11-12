import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './homePage.js';
import CheckList from './checklistPage.js';
import FindBrands from './findBrandsPage.js';
import SavedBrands from './savedBrandsPage';
import FindStyles from './findStyles';
import GenrePage from "./genrePage";

function App(props) {
  return (
    <Routes>
      
      <Route path="find-brands" element={<FindBrands brands={props.brands} />} />
      <Route path="saved-brands" element={<SavedBrands savedBrands={props.savedBrands} />} />
      <Route path="find-styles" element={<FindStyles genres={props.genres} /> } />
      <Route path="checklist" element={<CheckList rules={props.checklist} />} />
      <Route path="/style/:genreType" element={<GenrePage genres={props.genres}/>}/>
      <Route path="/" element={<HomePage impacts={props.impacts} whySustainable={props.whySustainable}/>} />
    </Routes>
  );
}

export default App;
