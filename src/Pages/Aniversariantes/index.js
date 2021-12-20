import { useContext } from "react";
import { PersonContext } from "../../Contexts/Person";

function Aniversario() {
  const { users } = useContext(PersonContext);
  return (
    <>
      <header className="container d-flex justify-content-center">
        <h1 className="justify-content-sm-center">Lista de Aniversariantes</h1>
      </header>
      <main className="container d-column justify-content-end ">
        {users.map((user) => (
          <div key={user.id}>
            <h3>
              {user.pattent} {user.nickname}
            </h3>
            <h6>Full name: {user.name}</h6>
            <hr />
          </div>
        ))}

         {/* <div> */}
          {/* {users.name} */}
        {/* </div>  */}
      </main>
    </>
  );
}

export default Aniversario;
