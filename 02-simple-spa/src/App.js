import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';
import Error404 from './pages/Error404';

const App = () => {
  return(
    <div>
      <h1>02-SimpleSPA</h1>
      <hr/>

      <nav>
        <Link to="/home">[Home]</Link> 
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main(SubRoute)]</Link>
        {/* HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
        {/* PATH 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/102/world">[기계학과]</Link>
      </nav>

      <a href="/about">일반링크</a>

      <Routes>
        <Route path="/" element={<Home/>} exact={true}/>
        <Route path="/about" element={<About/>} />
        {/* 서브라우팅 사용 */}
        <Route path="/main/*" element={<Main/>} />
        {/* GET 파라미터 사용 */}
        <Route path="/department_get" element={<DepartmentGet/>} />
        {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
        <Route path="/department_path/:id/:msg" element={<DepartmentPath/>} />

        <Route path="/*" element={<Error404/>} />
      </Routes>
    </div>
  )
};

export default App;
