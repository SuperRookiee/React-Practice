import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import './assets/css/menu.css';

import InlineCss from './pages/InlineCss'
import CssClass from './pages/CssClass'
import CssModule from './pages/CssModule.js'
import Scss from './pages/Scss'
import ScssModule from './pages/ScssModule'
import StyledComponent from './pages/StyledComponent'
import Responsive from './pages/Responsive'
import News from './pages/News'

import GlobalStyles from './GlobalStyles';


const App = () => {
  const myStyle = {
    fontWeight: "bold",
    color: "#b82514",
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
      <div>
        <GlobalStyles/>
          <h1 style={myStyle}>05-stylesheet</h1>
        <nav>
          <NavLink className='normalLink' to='/inline_css'>
            InlineCss
          </NavLink>
          <NavLink className='normalLink' to='/css_class'>
            CssClass
          </NavLink>
          <NavLink className='normalLink' to='/css_module'>
            CssModule
          </NavLink>
          <NavLink className='normalLink' to='/scss'>
            Scss
          </NavLink>
          <NavLink className='normalLink' to='/scss_module'>
            ScssModule
          </NavLink>
          <NavLink className='normalLink' to='/styled_component'>
            StyledComponent
          </NavLink>
          <NavLink className='normalLink' to='/responsive'>
            Responsive
          </NavLink>
          <NavLink className='normalLink' to='/news'>
            News(Demo)
          </NavLink>
        </nav>
        <hr/>

        <Routes>
          <Route path='/inline_css' element={<InlineCss />} />
          <Route path='/css_class' element={<CssClass />} />
          <Route path='/css_module' element={<CssModule />} />
          <Route path='/scss' element={<Scss />} />
          <Route path='/scss_module' element={<ScssModule />} />
          <Route path='/styled_component' element={<StyledComponent />} />
          <Route path='/responsive' element={<Responsive />} />
          <Route path='/news/*' element={<News />} />
        </Routes>
      </div>
  );
};

export default App;