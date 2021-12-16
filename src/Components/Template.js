import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import '../Styles/GlobalStyles.css';

function Template(props) {
  return (
    <>
      <div className="wrapper">
        <Sidebar 
          title={props.title}
          icon={props.icon} />
        
        <main>
          <Navbar />
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Template;
