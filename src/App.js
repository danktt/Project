import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imports of system
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Guarda from "./Pages/Guarda";
import HelpDesk from "./Pages/Helpdesk";
import FatosObs from "./Pages/FatosObs";
import Chamadas from "./Pages/Chamadas";
import Arranchamento from "./Pages/Arranchamento";
import Aniversario from "./Pages/Aniversariantes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path ="/home" element={<HomePage/>} />
        <Route exact path="/guarda" element={<Guarda/>} />
        <Route exact path="/helpdesk" element={<HelpDesk/>} />
        <Route exact path="/fatos-obs" element={<FatosObs/>} />
        <Route exact path="/plano-chamada" element={<Chamadas/>} />
        <Route exact path="/arranchamento" element={<Arranchamento/>} />
        <Route exact path="/aniversariantes" element={<Aniversario/>} />
      </Routes>  
    </Router>
  );
}

export default App;
