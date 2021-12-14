import  Logo  from '../../assets/logo-plano-chamada.png';

import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import '../../Styles/GlobalStyles.css';

function Chamadas() {
  return ( 
    <>
    <div className="wrapper">
        <Sidebar 
          title="Plano de Chamada"
          icon={Logo}
        />
          <main>
            <Navbar />
            <h1>Plano de Chamada</h1>
          </main>
    </div>
  </>
   );
}

export default Chamadas;