import '../Styles/Sidebar.css';

import { FiLogOut } from 'react-icons/fi';
import { BsFillGearFill } from 'react-icons/bs';
import { BsPersonCheckFill } from 'react-icons/bs';
import { FaUserLock } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md'


function Sidebar(props) {
  return(
   <>
        <div 
            className="d-flex flex-column vh-100   flex-shrink-0 p-3 text-white bg-dark" 
            style={{width: 250}}
        > 
            <a 
                href="/" 
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            > 
                <img 
                    src={props.icon}
                    className="bi me-2" 
                    width="35"
                    height="35"
                    alt="Logo"
                /> 
    
                    <span className="fs-4">{props.title}</span> 
            </a>
            <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item"> <a href="/#" className="nav-link active" aria-current="page"> <i className="fa fa-home"></i><span className="ms-2">Pagina Inicial</span> </a> </li>
                    <li> <a href="/#" className="nav-link text-white"> <i className="fa fa-dashboard"></i><span className="ms-2">Meus Chamados</span> </a> </li>
                    <li> <a href="/#" className="nav-link text-white"> <i className="fa fa-first-order"></i><span className="ms-2">Novo Chamado</span> </a> </li>
                    <li> <a href="/#" className="nav-link text-white"> <i className="fa fa-cog"></i><span className="ms-2">Adminstrar Chamados</span> </a> </li>
                    <li> <a href="/#" className="nav-link text-white"> <i className="fa fa-bookmark"></i><span className="ms-2">Sistema</span> </a> </li>
                </ul>
            <hr/>
            <div className="dropdown"> <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/> <strong> Gen Miranda </strong> </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="/#"> <BsPersonCheckFill /> Atualizar Dados</a></li>
                    <li><a className="dropdown-item" href="/#">  <FaUserLock /> Atualizar Senha</a></li>
                    <li><a className="dropdown-item" href="/#"> <MdManageAccounts /> Adminstrar Usúario</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="http://localhost:3000/home"> <BsFillGearFill /> Sistemas</a></li>
                    <li><a className="dropdown-item" href="/#"> <FiLogOut /> Sair</a></li>
                </ul>
            </div>
    </div>
    
   </>
  )
}


export default Sidebar;