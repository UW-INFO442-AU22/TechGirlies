import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useState } from "react";
import HomePage from './homePage.js';
import CheckList from './checklistPage.js';
import FindBrands from './findBrandsPage.js';
// import SavedBrands from './savedBrandsPage';
import FindStyles from './findStyles';
import GenrePage from "./genrePage";
import Materials from './materialsPage.js';

function App(props) {
  const [leaveBrowser, setLeaveBrowser] = useState(false);
  return (
    <Routes>
      <Route path="find-brands" element={<FindBrands leaveBrowser={leaveBrowser} setLeaveBrowser={setLeaveBrowser} brands={props.brands} />} />
      {/* <Route path="saved-brands" element={<SavedBrands savedBrands={props.savedBrands} />} /> */}
      <Route path="find-styles" element={<FindStyles styles={props.styles} genres={props.genres} /> }/>
      <Route path="style/:genreType" element={<GenrePage styles={props.styles} leaveBrowser={leaveBrowser} setLeaveBrowser={setLeaveBrowser} />}/>
      <Route path="checklist" element={<CheckList rules={props.checklist} materials={props.materials} />} />
      <Route path="what-material" element={<Materials materials={props.materials} />} />
      <Route path="/" element={<HomePage impacts={props.impacts} whySustainable={props.whySustainable}/>} />
    </Routes>
  );
}

export default App;
