import { Link, Routes, Route } from "react-router-dom";

import Expr from './pages/Expr';
import If1 from './pages/If1';
import If2 from './pages/If2';
import If3 from './pages/If3';
import If4 from './pages/If4';
import Loop1 from './pages/Loop1';
import Loop2 from './pages/Loop2';
import Loop3 from './pages/Loop3';

function App() {
  return (
    <div>
      <h1>03-jsx</h1>
      {/* Link 구성 */}
      <nav>
        <Link to="/expr">[Expr]</Link>
        <Link to="/If1">[If1]</Link>
        <Link to="/If2">[If2]</Link>
        <Link to="/If3">[If3]</Link>
        <Link to="/If4">[If4]</Link>
        <Link to="/Loop1">[Loop1]</Link>
        <Link to="/Loop2">[Loop2]</Link>
        <Link to="/Loop3">[Loop3]</Link>
      </nav>
      <hr/>

      <Routes>
        <Route path="/expr" element={<Expr/>} />
        <Route path="/if1" element={<If1/>} />
        <Route path="/if2" element={<If2/>} />
        <Route path="/if3" element={<If3/>} />
        <Route path="/if4" element={<If4/>} />
        <Route path="/Loop1" element={<Loop1/>} />
        <Route path="/Loop2" element={<Loop2/>} />
        <Route path="/Loop3" element={<Loop3/>} />
      </Routes>
    </div>
  );
}

export default App;
