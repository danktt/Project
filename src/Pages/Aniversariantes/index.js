import { useEffect, useState } from "react";
import { api } from "../../Service/api";
import '../../Service/mirage'
function Aniversario() {


  const [ users, setUsers ] = useState([])


  useEffect(() => {
    api.get('users')
      .then(res => setUsers(res.data) )
    
  },[])

  return ( 
    <>
      <header className="container d-flex justify-content-center">
        <h1 className="justify-content-sm-center">Lista de Aniversariantes</h1>
      </header>

      <main className="container d-column justify-content-end " >
        {users.map((user) =>(
          <>
            <h3 key={user.id} >{user.pattent} {user.nickname}</h3>
            <h6>Full name: {user.name}</h6>
            <hr /> 

           </> 
         ))} 

        {/* <li className="list-group " >02/01 - Militar - Seção Antiaérea</li>
        <li className="list-group " >05/01 - Militar - Seção Antiaérea</li>
        <li className="list-group " >06/01 - Militar - Base de Comando</li>
        <li className="list-group " >08/01 - Militar - Seção Antiaérea</li>
        <li className="list-group " >12/01 - Militar - Seção Antiaérea</li>
        <li className="list-group " >12/01 - Militar - Base de Comando</li>
        <li className="list-group " >12/01 - Militar - Seção Antiaérea</li>
        <li className="list-group " >15/01 - Militar - Base de Comando</li>
        <li className="list-group " >19/01 - Militar - Base de Comando</li>
        <li className="list-group " >25/01 - Militar - Base de Comando</li>
        <li className="list-group " >30/01 - Militar - Seção Antiaérea</li> */}
      </main>  </>
   );
}

export default Aniversario;