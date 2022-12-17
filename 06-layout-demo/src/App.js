import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";

import Header from './common/Header.js';
import Navbar from './common/Navbar.js';
import Footer from './common/Footer.js';

import Main from './pages/Main';
import List1 from './pages/List1';

const App = () => {
    return (
        <div>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' exact={true} element={<Main />} />
            <Route path='/' exact={true} element={<List1 />} />
          </Routes>
          <Footer />
          
        </div>
    );
};

export default App;