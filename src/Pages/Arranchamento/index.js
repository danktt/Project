import  Logo  from '../../assets/logo-arranchamento.png';

import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import '../../Styles/GlobalStyles.css';

function Arranchamento() {
  return ( 
    <>
    <div className="wrapper">
        <Sidebar 
          title="Arranchamento"
          icon={Logo}
        />
          <main>
            <Navbar />
            <h1>Arranchamento</h1>
          </main>
    </div>
  </>
   );
}

export default Arranchamento;