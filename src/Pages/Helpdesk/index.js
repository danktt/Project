

import Sidebar from '../../Components/Sidebar';
import  Logo  from '../../assets/logo-helpdesk.png'; 
import Navbar from '../../Components/Navbar';

import '../../Styles/GlobalStyles.css';


function HelpDesk() {

  

  return (
    <>
    <div className="wrapper">
        <Sidebar 
          title="HelpDesk"
          icon={Logo}
        />
          <main >
            <Navbar />
            <h1>HelpDesk</h1>
            
          </main>
    </div>
  </>
  );
}


export default HelpDesk;







