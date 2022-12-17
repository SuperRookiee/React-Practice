import React from 'react';
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
import MyState from './pages/MyState';
import DateRange1 from './pages/DateRange1';
import MyEffect from './pages/MyEffect';

import MyRef from './pages/MyRef.js';
import MyReducer from './pages/MyReducer';
import DateRange2 from './pages/DateRange2';
import MyMemo from './pages/MyMemo';
import MyCallback from './pages/MyCallback';
import MyWidth from './pages/MyWidth';

const App = () => {
    return (
        <div>
            <h1>07-hook-event</h1>

            <nav>
                <MenuLink to='/mystate'>MyState</MenuLink>
                <MenuLink to='/daterange1'>DateRange1</MenuLink>
                <MenuLink to='/myeffect'>MyEffect</MenuLink>
                <MenuLink to='/myref'>MyRef</MenuLink>
                <MenuLink to='/myreducer'>MyReducer</MenuLink>
                <MenuLink to='/daterange2'>DateRange2</MenuLink>
                <MenuLink to='/mymemo'>MyMemo</MenuLink>
                <MenuLink to='/mycallback'>MyCallback</MenuLink>
                <MenuLink to='/mywidth'>MyWidth</MenuLink>
            </nav>

            <Routes>
                <Route path='/mystate' element={<MyState/>}></Route>
                <Route path='/daterange1' element={<DateRange1/>}></Route>
                <Route path='/myeffect' element={<MyEffect/>}></Route>
                <Route path='/myref' element={<MyRef/>}></Route>
                <Route path='/myreducer' element={<MyReducer/>}></Route>
                <Route path='/daterange2' element={<DateRange2/>}></Route>
                <Route path='/mymemo' element={<MyMemo/>}></Route>
                <Route path='/mycallback' element={<MyCallback/>}></Route>
                <Route path='/mycallback' element={<MyWidth/>}></Route>
            </Routes>

        </div>
    );
};

export default App;