import  Logo  from '../../assets/logo-fato-obs.png';

import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import '../../Styles/GlobalStyles.css';

function FatosObs() {
  return ( 
    <>
    <div className="wrapper">
        <Sidebar 
          title="Fatos Obs"
          icon={Logo}
        />
          <main>
            <Navbar />
            <h1>Fatos Observados</h1>
          </main>
    </div>
  </>
   );
}

export default FatosObs;