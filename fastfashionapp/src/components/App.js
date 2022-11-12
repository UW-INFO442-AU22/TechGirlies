import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useState } from "react";
import HomePage from './homePage.js';
import CheckList from './checklistPage.js';
import FindBrands from './findBrandsPage.js';
// import SavedBrands from './savedBrandsPage';
import FindStyles from './findStyles';
import GenrePage from "./genrePage";

function App(props) {
  const [selectedStyle, setSelectedStyle] = useState([]);
  return (
    <Routes>
      <Route path="find-brands" element={<FindBrands brands={props.brands} />} />
      {/* <Route path="saved-brands" element={<SavedBrands savedBrands={props.savedBrands} />} /> */}
      <Route path="find-styles" element={<FindStyles setSelectedStyle={setSelectedStyle} styles={props.styles} genres={props.genres} /> }/>
      <Route path="style/:genreType" element={<GenrePage styles={props.styles} selectedStyle={selectedStyle} genres={props.genres}/>}/>
      <Route path="checklist" element={<CheckList rules={props.checklist} />} />
      <Route path="/" element={<HomePage impacts={props.impacts} whySustainable={props.whySustainable}/>} />
    </Routes>
  );
}

export default App;
