import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import MainSub1 from './MainSub1';
import MainSub2 from './MainSub2';

const Main = () => {
    return(
        <div>
            <h2>여기는 Main.js</h2>
            <p>SubRoute엣 대한 경로 구성은 ./ 없이 상대경로만 가능합니다. (절대경로 불가)</p>

            <nav>
                <Link to="sub1">[MainSub1]</Link>
                <Link to="sub2">[MainSub2]</Link>
            </nav>
            
            <Routes>
                <Route path="sub1" element={<MainSub1/>} />
                <Route path="sub2" element={<MainSub2/>} />
            </Routes>
        </div>
        
    )
};
  
export default Main;