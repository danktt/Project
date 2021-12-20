

import Sidebar from '../../Components/Sidebar';
import  Logo  from '../../assets/logo-helpdesk.png'; 
import Navbar from '../../Components/Navbar';

// import UserProvider from '../../Contexts/HelpdeskContext';

import '../../Styles/GlobalStyles.css';
// import { useContext } from 'react';


function HelpDesk() {

//  const users = useContext(UserProvider)
  
  return (
    <>
    <div className="wrapper">
        <Sidebar 
          title="HelpDesk"
          icon={Logo}
        />
          <main >
            <Navbar />
            <h1>oi</h1>
            
          </main>
    </div>

    <div>
      {/* {console.log(users)} */}
    </div>

  </>
  );
}


export default HelpDesk;







