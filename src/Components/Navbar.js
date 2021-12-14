
import { FiLogOut } from 'react-icons/fi';
import { BsFillGearFill } from 'react-icons/bs';
// import { BsPersonCheckFill } from 'react-icons/bs';
// import { FaUserLock } from 'react-icons/fa';
// import { MdManageAccounts } from 'react-icons/md'
import '../Styles/Navbar.css';


function Navbar(props) {
  return (
    <>
    
      <nav fixed="top" className="navbar navbar-expand-lg navbar-light  col-12  " id="container">


            <li className="nav-item list-group" >
              <a className="nav-link" href="/" id="icon">
                <FiLogOut />
              </a>
            </li>
            <li className="nav-item list-group">
              <a className="nav-link" href="http://localhost/sistemas/"  id="icon">
                <BsFillGearFill />
              </a>
            </li>
        
      </nav>


     
    </>
  );
}

export default Navbar;
