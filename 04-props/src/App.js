import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import MyProps from "./pages/MyProps.js";
import MyPropTypes from "./pages/MyPropTypes";
import MyChildren from "./pages/MyChildren.js";
import GradeTable from "./pages/GradeTable.js";

function App() {
  return (
    <div>
      <h1>04-props</h1>
      <nav>
        <Link to="/myprops">MyProps</Link>&nbsp;&nbsp;
        <Link to="/myproptypes">MyPropTypes</Link>&nbsp;&nbsp;
        <Link to="/mychildren">MyChildren</Link>&nbsp;&nbsp;
        <Link to="/grade_table">GradeTable(demo)</Link>&nbsp;&nbsp;
      </nav>
      <hr/>

      <Routes>
        <Route path="/myprops" element={<MyProps/>}/>
        <Route path="/myproptypes" element={<MyPropTypes/>}/>
        <Route path="/mychildren" element={<MyChildren/>}/>
        <Route path="/grade_table" element={<GradeTable/>}/>
      </Routes>
    </div>
  );
}

export default App;