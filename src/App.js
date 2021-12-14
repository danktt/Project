import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import HelpDesk from "./Pages/Helpdesk";
import Guarda from "./Pages/Guarda";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path ="/home" element={<HomePage/>} />
        <Route exact path="/helpdesk" element={<HelpDesk/>} />
        <Route exact path="/guarda" element={<Guarda/>} />
      </Routes>  
    </Router>
  );
}

export default App;
