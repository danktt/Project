import  Logo  from '../../assets/logo-guarda.png';

import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";

import '../../Styles/GlobalStyles.css';

function Guarda() {

  


  return ( 
    <>
    <div className="wrapper">
        <Sidebar 
          title="Guarda"
          icon={Logo}
        />
          <main>
            <Navbar />
            <h1>Guarda</h1>
          </main>
    </div>
  </>
   );
}

export default Guarda;